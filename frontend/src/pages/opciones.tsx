import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PaginaDecisiones() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-amber-50 pt-28">
      <div className="p-4 fixed top-0 w-full z-10 container mx-auto flex justify-between items-center">
        <Navbar/>
      </div>
      <h1 className="text-4xl font-semibold mb-6 text-center text-[#F9BC60]">
      ¡Bienvenido a SafeStay!
      </h1>
      <p className="mb-6 text-center text-[#F9BC60]">
        Bienvenido al hotel de tus sueños. Tus vacaciones están a un solo click
      </p>
      <div className="flex flex-col justify-center items-center mb-6">
        <Link to="/Formulario">
          <button className="mb-6 p-3 text-lg text-white bg-[#F9BC60] rounded shadow-lg shadow-amber-300/50 hover:shadow-lg transition duration-300 w-[300px] cursor-pointer hover:bg-amber-100">
            Reservar
          </button>
        </Link>
        <Link to='/Live'>
        <button className="p-3 text-lg text-white bg-[#F9BC60] rounded shadow-lg shadow-amber-300/50 hover:shadow-lg transition duration-300 w-[300px] cursor-pointer hover:bg-amber-100">
          Ingresar con cámara
        </button>
        </Link>
      </div>
    </div>
  );
}
