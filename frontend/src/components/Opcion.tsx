import { Link } from 'react-router-dom';

export default function DecisionOpcion() {
  return (
    <>
     <div className="flex justify-center items-center min-h-screen bg-gray-800">
       <div className="w-full max-w-md p-12 bg-gray-900 text-white rounded-lg shadow-lg">
         <h2 className="text-4xl font-semibold mb-6 text-center border-b-4 border-red-700">Bienvenido</h2>

        <div className="mb-6 flex flex-col space-y-4">
          <Link to="/reservar">
             <button className="w-full px-6 py-4 text-base text-white bg-blue-700 rounded-lg shadow-md">Reservar</button>
           </Link>
          <Link to="/camara-en-vivo">
             <button className="w-full px-6 py-4 text-base text-white bg-red-700 rounded-lg shadow-md">Cámara en Vivo</button>
           </Link>
        </div>
       </div>
     </div>
    </>
  );
};
