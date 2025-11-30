"use client";

import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
      {/* LOGO DENTRO DEL COMPONENTE */}
      <div className="flex justify-center mb-0">
        <Image
          src="/logo-vertical-sin-fondo.png"
          alt="CleenGo Logo"
          width={150}      // ← MÁS GRANDE
          height={150}
          className="object-contain"
        />
      </div>
      <h2 className="text-2xl font-semibold text-center mb-6">
        Registro Cliente
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* NOMBRE */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Nombre</label>
          <input
            name="name"
            onChange={handleChange}
            placeholder="Ej: Juan"
            className="border rounded-lg px-3 py-2"
          />
        </div>

        {/* APELLIDO */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Apellido</label>
          <input
            name="surname"
            onChange={handleChange}
            placeholder="Ej: Pérez"
            className="border rounded-lg px-3 py-2"
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Correo</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            placeholder="Ej: juanperez@gmail.com"
            className="border rounded-lg px-3 py-2"
          />
        </div>

        {/* PASSWORD */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Contraseña</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Mínimo 8 caracteres"
            className="border rounded-lg px-3 py-2"
          />
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Confirmar contraseña</label>
          <input
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            placeholder="Repite la contraseña"
            className="border rounded-lg px-3 py-2"
          />
        </div>

        {/* FECHA DE NACIMIENTO */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Fecha de nacimiento</label>
          <input
            name="birthDate"
            type="date"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
          />
        </div>

        {/* IMG PERFIL */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Imagen de perfil (URL)</label>
          <input
            name="profileImgUrl"
            onChange={handleChange}
            placeholder="Ej: https://miimagen.com/foto.jpg"
            className="border rounded-lg px-3 py-2"
          />
        </div>

        {/* TELÉFONO */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Teléfono</label>
          <input
            name="phone"
            onChange={handleChange}
            placeholder="Ej: 987654321"
            className="border rounded-lg px-3 py-2"
          />
        </div>

        {/* BOTÓN */}
        <button
          disabled={loading}
          className="bg-blue-600 text-white py-2 rounded-lg hover:opacity-90 disabled:opacity-70"
        >
          {loading ? "Registrando..." : "Registrarme"}
        </button>

        <div className="mt-4">
          <OAuthLoginButton role="client" />
        </div>

        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
      </form>
    </div>
  );
}

