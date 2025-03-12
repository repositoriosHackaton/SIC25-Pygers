import { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import Navbar from "../components/Navbar";

import { API_RESPONSES } from '../constants/ApiResponses';

export default function WebcamComponent() {
  const webcamRef = useRef<Webcam>(null);
  interface ComparisonResult {
    message: string;
    data?: {
      full_name: string;
      email: string;
      phone: string;
      arrival_time: string;
      departure_time: string;
      num_guests: string;
      room_type: string;
      pay_type: string;
      image: string;
    };
  }

  const [comparisonResult, setComparisonResult] = useState<ComparisonResult | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isSearching, setIsSearching] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isCameraActive && isSearching) {
      interval = setInterval(captureFrame, 1000)
    }
    return () => clearInterval(interval);
  }, [isCameraActive, isSearching]);

  const captureFrame = async () => {
    if (webcamRef.current && isSearching) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const blob = await fetch(imageSrc).then(res => res.blob());
        const file = new File([blob], "frame.jpg", { type: "image/jpeg" });

        const formData = new FormData();

        formData.append("image", file);

        try {
          const response = await fetch('http://localhost:8000/hotel/detect', {
            method: 'POST',
            body: formData,
          });
          const result = await response.json();
          console.log(result)
          setComparisonResult(result.data ? { message: "User found", data: result.data } : { message: "User not found" });
          if (result.data) {
            handlePause(); // Pausar la cámara al encontrar una coincidencia
            setIsSearching(false); // Detener las consultas al backend
          }
          console.log('Frame sent successfully:', result);
        } catch (error) {
          console.error('Error sending frame to backend:', error);
        }
      }
    }
  };

  const handleStart = () => {
    setIsCameraActive(true);
    setIsSearching(true);
    if (webcamRef.current) {
      const video = webcamRef.current.video;
      if (video) {
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then((stream) => {
            video.srcObject = stream;
          })
          .catch((error) => {
            console.error('Error accessing webcam:', error);
          });
      }
    }
  };

  const handlePause = () => {
    setIsCameraActive(false);
    if (webcamRef.current) {
      webcamRef.current.video?.pause();
    }
  };

  const handleResume = () => {
    setIsCameraActive(true);
    if (webcamRef.current) {
      webcamRef.current.video?.play();
    }
  };

  const handleStop = () => {
    setIsCameraActive(false);
    setIsSearching(false);
    if (webcamRef.current) {
      const video = webcamRef.current.video;
      if (video) {
        video.srcObject = null;
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className='bg-amber-50'>
        <h1 className="p-9 text-[#F9BC60] text-4xl font-semibold text-center">
          Búsqueda de huésped
        </h1>
        <div className="flex p-9 flex-row justify-center space-x-8">
          <div className="flex flex-col items-center">
            <Webcam
              audio={false}
              height={720}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={800}
              videoConstraints={{
                width: 1280,
                height: 720,
                facingMode: 'user',
              }}
              className=" bg-[#F9BC60] rounded shadow-lg shadow-sky-700/50"
            />
            <div className="mt-4 flex justify-center space-x-4 m-5">
              <button
                onClick={handleStart}
                className="py-2 px-4 w-48 text-white bg-amber-700 rounded shadow-md shadow-lime-600 hover:bg-lime-600 transition duration-300 active:scale-90 cursor-pointer"
              >
                Iniciar
              </button>
              <button
                onClick={handleStop}

                className="py-2 px-4 w-48 text-white bg-amber-700 rounded shadow-md shadow-red-700 hover:bg-red-700 transition duration-300 active:scale-90 cursor-pointer"
              >
                Detener
              </button>
              <button
                onClick={handlePause}
                className="py-2 px-4 w-48 text-white  bg-amber-700 rounded shadow-md shadow-sky-600 hover:bg-sky-600 transition duration-300 active:scale-90 cursor-pointer"
              >
                Pausar
              </button>
              <button
                onClick={handleResume}
                className="py-2 px-4 w-48 text-white  bg-amber-700 rounded shadow-md shadow-sky-600 hover:bg-sky-600 transition duration-300 active:scale-90 cursor-pointer"
              >
                Reanudar
              </button>
            </div>
          </div>
          {/* Mostrar resultados de comparación */}
          <div className="flex flex-col items-center">
            <p className="text-[#F9BC60] font-bold text-center text-2xl w-[60%]">
              {comparisonResult ? API_RESPONSES[comparisonResult.message] : "Esperando resultados de comparación..."}
            </p>
            {comparisonResult && comparisonResult.data && (
              <div className="flex flex-col items-center">
                <img
                  src={`data:image/jpeg;base64,${comparisonResult.data.image}`}
                  alt="Guest"
                  className="mt-4 border-4 border-[#F9BC60] bg-[#F9BC60] rounded shadow-lg shadow-amber-400"
                  width={200}
                  height={200}
                />
                <div className="text-[#F9BC60] mt-4">
                  <p>Nombre Completo: {comparisonResult.data.full_name}</p>
                  <p>Email: {comparisonResult.data.email}</p>
                  <p>Teléfono: {comparisonResult.data.phone}</p>
                  <p>Fecha de Llegada: {comparisonResult.data.arrival_time}</p>
                  <p>Fecha de Salida: {comparisonResult.data.departure_time}</p>
                  <p>Número de Huéspedes: {comparisonResult.data.num_guests}</p>
                  <p>Tipo de Habitación: {comparisonResult.data.room_type}</p>
                  <p>Método de Pago: {comparisonResult.data.pay_type}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
