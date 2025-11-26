import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../services/auth";
import OAuthLoginButton from "./OAuthLoginButton";
import { useAuth } from "../contexts/AuthContext";

export default function Loginform() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

        const { login: loginContext } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await login({ email, password });

            loginContext(res.user, res.accessToken);

            navigate("/");

        } catch (error) {
            alert("Credenciales incorrectas");
        }

    };

    return (
        <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm">
            <h2 className="text-2xl font-semibold text-center mb-6">
                Iniciar Sesión
            </h2>

            {/* Formulario */}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-sm font-medium mb-1">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        placeholder="ejemplo@correo.com"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A65FF]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium mb-1">Contraseña</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A65FF]"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-[#0A65FF] text-white font-medium py-2 rounded-lg hover:opacity-90 transition"
                >
                    Iniciar Sesión
                </button>
            </form>

            {/* 🔵 GOOGLE / GITHUB / FACEBOOK (OAuth) */}
            <div className="mt-4">
                <OAuthLoginButton />
            </div>

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
    );
}
