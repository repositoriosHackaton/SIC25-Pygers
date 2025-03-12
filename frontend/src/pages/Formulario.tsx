// import { useState } from 'react'
// import Navbar from '../components/Navbar'
// import Button from '../components/Button'
// import Image from '../components/Images'
// // import Live from './components/ActivarCamara';

// export default function Home() {
//   const [files, setFiles] = useState<File[]>([])
  
//   return (
//     <>
//       <Navbar />
//       {
//           files.length === 0
//           ?
//           <Button 
//             element='file'
//             background='primary' 
//             setFiles={setFiles}
//           >
//             Sube tus sospechosos
//           </Button>
//           :
//           <Image 
//             files={files} 
//             setFiles={setFiles} 
//           />
//         }
//   </>
//   )
// }

import { Link } from "react-router-dom";

export default function FormularioPrincipal(){
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <form className="w-full max-w-xl p-9 bg-gray-500 text-white rounded shadow-md text-shadow-lg shadow-gray-500/50">
        <h2 className="text-4xl font-semibold mb-6 text-center">Formulario de Reserva</h2>
      <div id="contenido" className="justify-center  items-center columns-2 py-5">

        <div className="mb-3">
          <label htmlFor="Names" className="block text-amber-100">Nombre Completo (Nombres, Apellidos)</label>
          <input
            id="Names"
            type="text"
            name="Names"
            className=" w-full px-5 py-2 border rounded border-white"
            />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="block text-amber-100">Correo Electronico</label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full px-5 py-2 border rounded border-white"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="Number" className="block text-amber-100">Número de Teléfono</label>
          <input
            id="Number"
            type="number"
            name="Number"
            className="w-full px-5 py-2 border rounded border-white"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="dateinit" className="block text-amber-100">Fecha de Llegada</label>
          <input
            id="dateinit"
            type="date"
            name="dateinit"
            className="w-full px-5 py-2 border rounded border-white"
            />
        </div>

        <div className="mb-3">
          <label htmlFor="datefinis" className="block text-amber-100">Fecha de Salida</label>
          <input
            id="datefinis"
            type="date"
            name="datefinis"
            className="w-full px-5 py-2 border rounded border-white"
            />
        </div>

        <div className="mb-3">
          <label htmlFor="NumberHuspedes" className="block text-amber-100">Número de Huspedes</label>
          <input
            id="NumberHuspedes"
            type="number"
            name="NumberHuspedes"
            className="w-full px-5 py-2 border rounded border-white"
            />
        </div>

        <div className="mb-3">
          <label htmlFor="options" className="block text-amber-100">Tipo de Habitación:</label>
          <select id="options" name="options" className="w-full px-5 py-2 border rounded border-white bg-gray-500">
            <option value="individual">individual</option>
            <option value="doble">doble</option>
            <option value="triple">triple</option>
            <option value="familia">familia</option>
            <option value="suite">suite</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="reservationNumber" className="block text-amber-100">Metodo de Pago</label>
          <select id="options" name="options" className="w-full px-5 py-2 border rounded border-white bg-gray-500">
            <option value="visa">visa</option>
            <option value="mastercard">mastercard</option>
            <option value="paypal">paypal</option>
            <option value="transferencia bancaria">transferencia bancaria</option>
            <option value="pago en hotel">pago en hotel</option>
          </select>
        </div>

      </div>
        <div className="mb-3 py-2">
          <label htmlFor="photos" className="block text-amber-100">Subir Fotos Del Husped o Huspedes</label>
          <input
            id="photos"
            type="file"
            name="photos"
            className="w-full px-2 py-2 border rounded border-white bg-stone-950 "
            multiple
          />
        </div>

        <div className="flex justify-between">
          <Link to='/'>
            <button className="px-3 py-2 text-base text-white bg-lime-950 rounded shadow-lg shadow-lime-950/50 hover:bg-lime-700 hover:shadow-lg hover:shadow-lime-700/50 transition duration-300">Volver</button>
          </Link>
          <button type="submit" className="px-3 py-2 text-base text-white bg-red-950 rounded shadow-lg shadow-red-950/50 hover:bg-red-700 hover:shadow-lg hover:shadow-red-700/50 transition duration-300">Enviar</button>
        </div>
      </form>
    </div>
  );
};

