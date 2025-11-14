import { Link } from "react-router-dom";


export default function Loginform() {
    return (
        <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm">
            <h2 className="text-2xl font-semibold text-center mb-6">
                Iniciar Sesión
            </h2>

            {/* Formulario */}
            <form className="flex flex-col gap-4">
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        placeholder="ejemplo@correo.com"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A65FF]"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Contraseña</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A65FF]"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#0A65FF] text-white font-medium py-2 rounded-lg hover:opacity-90 transition"
                >
                    Iniciar Sesión
                </button>
            </form>

            {/* Enlace a registro */}
            <p className="text-sm text-center mt-4">
                ¿No tienes cuenta?{" "}
                <Link
                    to="/register"
                    className="text-[#0A65FF] font-medium hover:underline"
                >
                    Regístrate aquí
                </Link>
            </p>
        </div>
    )
}