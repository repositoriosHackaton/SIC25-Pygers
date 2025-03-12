export default function FormularioPrincipal(){
    return (
      <div className="flex justify-center items-center min-h-screen bg-stone-950">
        <form className="w-full max-w-md p-9 bg-amber-950 text-white rounded shadow-md text-shadow-lg shadow-amber-950">
          <h2 className="text-4xl font-semibold mb-6 text-center">Formulario de Reserva</h2>
  
          <div className="mb-3">
            <label htmlFor="firstName" className="block text-amber-100">Nombre</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              className="w-full px-5 py-2 border rounded border-white"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="lastName" className="block text-amber-100">Apellido</label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              className="w-full px-5 py-2 border rounded border-white"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="idNumber" className="block text-amber-100">Cédula</label>
            <input
              id="idNumber"
              type="text"
              name="idNumber"
              className="w-full px-5 py-2 border rounded border-white"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="reservationNumber" className="block text-amber-100">Número de Reserva</label>
            <input
              id="reservationNumber"
              type="text"
              name="reservationNumber"
              className="w-full px-5 py-2 border rounded border-white"
            />
          </div>
  
          <div className="mb-3">
            <label htmlFor="photos" className="block text-amber-100">Subir Fotos</label>
            <input
              id="photos"
              type="file"
              name="photos"
              className="w-full px-5 py-2 border rounded border-white bg-stone-950"
              multiple
            />
          </div>
  
          <div className="flex justify-between">
            <button type="button" className="px-3 py-2 text-base text-white bg-lime-950 rounded shadow-lg shadow-lime-950/50 hover:bg-lime-700 transition duration-300">Volver</button>
            <button type="submit" className="px-3 py-2 text-base text-white bg-red-950 rounded shadow-lg shadow-red-950/50 hover:bg-red-700 transition duration-300">Enviar</button>
          </div>
        </form>
      </div>
    );
  };

  