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
import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"

export default function FormularioPrincipal() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-sky-300">
      <div className="fixed top-0 w-full z-10 p-4">
        <Navbar />
      </div>

      <div className="flex justify-center items-center pt-40 pb-10 px-6">
        <form className="w-full max-w-xl p-9 bg-white text-black rounded shadow-md text-shadow-lg shadow-white">
          <h2 className="text-4xl font-semibold mb-6 text-center">Formulario de Reserva</h2>
          <div id="contenido" className="justify-center items-center columns-2 py-5">
            <div className="mb-3">
              <label htmlFor="Names" className="block text-black">
                Nombre Completo (Nombres, Apellidos)
              </label>
              <input id="Names" type="text" name="Names" className="w-full px-5 py-2 border rounded border-black" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="block text-black">
                Correo Electronico
              </label>
              <input id="email" type="email" name="email" className="w-full px-5 py-2 border rounded border-black" />
            </div>

            <div className="mb-3">
              <label htmlFor="Number" className="block text-black">
                Número de Teléfono
              </label>
              <input id="Number" type="number" name="Number" className="w-full px-5 py-2 border rounded border-black" />
            </div>

            <div className="mb-3">
              <label htmlFor="dateinit" className="block text-black">
                Fecha de Llegada
              </label>
              <input
                id="dateinit"
                type="date"
                name="dateinit"
                className="w-full px-5 py-2 border rounded border-black"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="datefinis" className="block text-black">
                Fecha de Salida
              </label>
              <input
                id="datefinis"
                type="date"
                name="datefinis"
                className="w-full px-5 py-2 border rounded border-black"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="NumberHuspedes" className="block text-black">
                Número de Huéspedes
              </label>
              <input
                id="NumberHuspedes"
                type="number"
                name="NumberHuspedes"
                className="w-full px-5 py-2 border rounded border-black"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="options" className="block text-black">
                Tipo de Habitación:
              </label>
              <select id="options" name="options" className="w-full px-5 py-2 border rounded border-black bg-white-200">
                <option value="individual">Individual</option>
                <option value="doble">Doble</option>
                <option value="triple">Triple</option>
                <option value="familia">Familia</option>
                <option value="suite">Suite</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="paymentMethod" className="block text-black">
                Método de Pago
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                className="w-full px-5 py-2 border rounded border-black bg-white-200"
              >
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="paypal">Paypal</option>
                <option value="transferencia bancaria">Transferencia bancaria</option>
                <option value="pago en hotel">Pago en hotel</option>
              </select>
            </div>
          </div>

          <div className="mb-3 py-2">
            <label htmlFor="photos" className="block text-black">
              Subir Fotos Del Huésped o Huéspedes
            </label>
            <input
              id="photos"
              type="file"
              name="photos"
              className="w-full px-2 py-2 border rounded border-black  bg-sky-700"
              multiple
            />
          </div>

          <div className="flex justify-between">
            <Link to="/">
              <button className="px-3 py-2 text-base text-white bg-sky-700 rounded shadow-lg shadow-sky-700/50 hover:bg-sky-800 hover:shadow-lg hover:shadow-sky-800/50  transition duration-300">
                Volver
              </button>
            </Link>
            <button
              type="submit"
              className="px-3 py-2 text-base text-white bg-sky-700 rounded shadow-lg shadow-sky-700/50 hover:bg-sky-800 hover:shadow-lg hover:shadow-sky-800/50  transition duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

