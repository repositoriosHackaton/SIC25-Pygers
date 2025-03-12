import { Link } from "react-router-dom";

export default function PaginaDecisiones() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800">
      <h1 className="text-4xl font-semibold mb-6 text-center text-white">Bienvenido a HotelPygers</h1>
      
      <div className="flex flex-col justify-center items-center mb-6">
        <Link to="/Formulario">
          <button className="mb-6 px-5 py-2 text-lg text-white bg-amber-950 rounded shadow-lg shadow-amber-950/50 hover:bg-amber-700 hover:shadow-lg hover:shadow-amber-700/50  transition duration-300">
          Registrar Reserva
          </button>
        </Link>
        <Link to='/Live'>
        <button className="px-5 py-2 text-lg text-base text-white bg-lime-950 rounded shadow-lg shadow-lime-950/50 hover:bg-lime-700 hover:shadow-lg hover:shadow-lime-700/50  transition duration-300 ">
          Cámara en Vivo
        </button>
        </Link>
      </div>
    </div>
  );
}
