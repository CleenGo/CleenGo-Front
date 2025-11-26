import { useState } from "react";
import { registerClient } from "../services/auth";
import OAuthLoginButton from "./OAuthLoginButton";

export default function RegisterFormClient() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    profileImgUrl: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    const bodyToSend = {
      ...form,
      profileImgUrl:
        form.profileImgUrl.trim() === "" ? undefined : form.profileImgUrl,
    };

    try {
      await registerClient(bodyToSend);
      setSuccess("Cliente registrado correctamente");
    } catch (err: any) {
      setError(err.response?.data?.message || "Error al registrarse");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Registro Cliente
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input name="name" onChange={handleChange} placeholder="Nombre" className="border rounded-lg px-3 py-2" />

        <input name="surname" onChange={handleChange} placeholder="Apellido" className="border rounded-lg px-3 py-2" />

        <input name="email" type="email" onChange={handleChange} placeholder="Correo" className="border rounded-lg px-3 py-2" />

        <input name="password" type="password" onChange={handleChange} placeholder="Contraseña" className="border rounded-lg px-3 py-2" />

        <input name="confirmPassword" type="password" onChange={handleChange} placeholder="Confirmar contraseña" className="border rounded-lg px-3 py-2" />

        <input name="birthDate" type="date" onChange={handleChange} className="border rounded-lg px-3 py-2" />

        <input name="profileImgUrl" onChange={handleChange} placeholder="URL Imagen Perfil (opcional)" className="border rounded-lg px-3 py-2" />

        <input name="phone" onChange={handleChange} placeholder="Teléfono" className="border rounded-lg px-3 py-2" />

        <button
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded-lg hover:opacity-90 disabled:opacity-70"
        >
          {loading ? "Registrando..." : "Registrarme"}
        </button>

        {/* 🔵 Registro con Google / GitHub */}
        <div className="mt-4">
          <OAuthLoginButton role="client" />
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
      </form>
    </div>
  );
}
