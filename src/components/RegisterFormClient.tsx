export default function RegisterFormClient () {
    return (
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Registro Cliente</h2>

      <form className="flex flex-col gap-4">

        <input
          type="text"
          placeholder="Nombre"
          className="border rounded-lg px-3 py-2"
        />

        <input
          type="text"
          placeholder="Apellido"
          className="border rounded-lg px-3 py-2"
        />

        <input
          type="email"
          placeholder="Correo"
          className="border rounded-lg px-3 py-2"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="border rounded-lg px-3 py-2"
        />

        <input
          type="password"
          placeholder="Confirmar contraseña"
          className="border rounded-lg px-3 py-2"
        />

        <input
          type="date"
          className="border rounded-lg px-3 py-2"
        />

        <input
          type="text"
          placeholder="Teléfono"
          className="border rounded-lg px-3 py-2"
        />

        <button className="bg-blue-600 text-white py-2 rounded-lg hover:opacity-90">
          Registrarme
        </button>
      </form>
    </div>
    )
}