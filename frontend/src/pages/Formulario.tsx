import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useState } from "react"

export default function FormularioPrincipal() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    arrival_time: "",
    departure_time: "",
    num_guests: "",
    room_type: "",
    pay_type: "",
    image: null,
  })

  interface FormData {
    full_name: string;
    email: string;
    phone: string;
    arrival_time: string;
    departure_time: string;
    num_guests: string;
    room_type: string;
    pay_type: string;
    image: File | null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    const data = new FormData()
    for (const key in formData) {
      data.append(key, formData[key as keyof FormData] as string | Blob)
    }

    try {
      const response: Response = await fetch("http://127.0.0.1:8000/hotel/reservation", {
        method: "POST",
        body: data,
      })
      if (response.ok) {
        alert("Reserva creada con éxito")
      } else {
        const errorData = await response.json();
      alert(`Error al crear la reserva: ${errorData.detail}`);
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al crear la reserva")
    }
  }

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-sky-300">
      <div className="fixed top-0 w-full z-10 p-4">
        <Navbar />
      </div>

      <div className="flex justify-center items-center pt-40 pb-10 px-6">
        <form
          className="w-full max-w-xl p-9 bg-white text-black rounded shadow-md text-shadow-lg shadow-white"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl font-semibold mb-6 text-center">Formulario de Reserva</h2>
          <div id="contenido" className="justify-center items-center columns-2 py-5">
            <div className="mb-3">
              <label htmlFor="full_name" className="block text-black">
                Nombre Completo (Nombres, Apellidos)
              </label>
              <input
                id="full_name"
                type="text"
                name="full_name"
                className="w-full px-5 py-2 border rounded border-black"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="block text-black">
                Correo Electronico
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="w-full px-5 py-2 border rounded border-black"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="block text-black">
                Número de Teléfono
              </label>
              <input
                id="phone"
                type="number"
                name="phone"
                className="w-full px-5 py-2 border rounded border-black"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="arrival_time" className="block text-black">
                Fecha de Llegada
              </label>
              <input
                id="arrival_time"
                type="date"
                name="arrival_time"
                className="w-full px-5 py-2 border rounded border-black"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="departure_time" className="block text-black">
                Fecha de Salida
              </label>
              <input
                id="departure_time"
                type="date"
                name="departure_time"
                className="w-full px-5 py-2 border rounded border-black"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="num_guests" className="block text-black">
                Número de Huéspedes
              </label>
              <input
                id="num_guests"
                type="number"
                name="num_guests"
                className="w-full px-5 py-2 border rounded border-black"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="room_type" className="block text-black">
                Tipo de Habitación:
              </label>
              <select
                id="room_type"
                name="room_type"
                className="w-full px-5 py-2 border rounded border-black bg-white-200"
                onChange={handleChange}
              >
                <option value="individual">Individual</option>
                <option value="doble">Doble</option>
                <option value="triple">Triple</option>
                <option value="familia">Familia</option>
                <option value="suite">Suite</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="pay_type" className="block text-black">
                Método de Pago
              </label>
              <select
                id="pay_type"
                name="pay_type"
                className="w-full px-5 py-2 border rounded border-black bg-white-200"
                onChange={handleChange}
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
            <label htmlFor="image" className="block text-black">
              Subir Fotos Del Huésped o Huéspedes
            </label>
            <input
              id="image"
              type="file"
              name="image"
              className="w-full px-2 py-2 border rounded border-black bg-sky-700"
              multiple
              onChange={handleChange}
            />
          </div>

          <div className="flex justify-between">
            <Link to="/">
              <button className="px-3 py-2 text-base text-white bg-sky-700 rounded shadow-lg shadow-sky-700/50 hover:bg-sky-800 hover:shadow-lg hover:shadow-sky-800/50 transition duration-300">
                Volver
              </button>
            </Link>
            <button
              type="submit"
              className="px-3 py-2 text-base text-white bg-sky-700 rounded shadow-lg shadow-sky-700/50 hover:bg-sky-800 hover:shadow-lg hover:shadow-sky-800/50 transition duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}