import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function PaginaDecisiones() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-sky-300">
      <div className="p-4 fixed top-0 w-full z-10 container mx-auto flex justify-between items-center">
        <Navbar/>
      </div>
      <h1 className="text-4xl font-semibold mb-6 text-center text-white">Reserva tu estancia en el Hotel</h1>
      <div className="flex flex-col justify-center items-center mb-6">
        <Link to="/Formulario">
          <button className="mb-6 px-5 py-2 text-lg text-white bg-sky-700 rounded shadow-lg shadow-sky-700/50 hover:bg-sky-800 hover:shadow-lg hover:shadow-sky-800/50  transition duration-300">
          Registrar Reserva
          </button>
        </Link>
        <Link to='/Live'>
        <button className="px-5 py-2 text-lg text-base text-white bg-sky-700 rounded shadow-lg shadow-sky-700/50 hover:bg-sky-800 hover:shadow-lg hover:shadow-sky-800/50  transition duration-300">
          Cámara en Vivo
        </button>
        </Link>
      </div>
    </div>
  );
}
