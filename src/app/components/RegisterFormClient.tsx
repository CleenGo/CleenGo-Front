"use client";

import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";
import { registerClient } from "../services/auth";
import OAuthLoginButton from "./OAuthLoginButton";

interface FormState {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  profileImgUrl: string;
  phone: string;
}

interface ErrorState {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  phone: string;
}

export default function RegisterFormClient() {
  const [form, setForm] = useState<FormState>({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    profileImgUrl: "",
    phone: "",
  });

  const [errors, setErrors] = useState<ErrorState>({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  // -------------------------------
  // VALIDACIONES EN TIEMPO REAL
  // -------------------------------
  const validate = (field: keyof ErrorState, value: string) => {
    let msg = "";

    switch (field) {
      case "email":
        if (!/^\S+@\S+\.\S+$/.test(value)) msg = "Correo inválido";
        break;

      case "password":
        const strongRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

        if (!strongRegex.test(value)) {
          msg =
            "Debe tener mayúscula, minúscula, número y símbolo, mínimo 8 caracteres";
        }

        if (form.confirmPassword && value !== form.confirmPassword) {
          msg = "Las contraseñas no coinciden";
        }
        break;

        
      case "phone":
        if (!/^\d+$/.test(value)) msg = "Solo números";
        if (value.length < 9) msg = "Número demasiado corto";
        break;

      case "birthDate":
        const birth = new Date(value);
        const today = new Date();
        const age = today.getFullYear() - birth.getFullYear();

        if (!value) msg = "La fecha es obligatoria";
        else if (age < 18 || (age === 18 && today < new Date(birth.setFullYear(birth.getFullYear() + 18))))
          msg = "Debes ser mayor de 18 años";
        break;

      default:
        if (!value.trim()) msg = "Campo obligatorio";
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: msg,
    }));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });

    validate(name as keyof ErrorState, value);
  };

  const allValid = () => {
    return (
      form.name &&
      form.surname &&
      form.email &&
      form.password &&
      form.confirmPassword &&
      form.birthDate &&
      form.phone &&
      Object.values(errors).every((e) => e === "")
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!allValid()) {
      setSuccess("");
      return;
    }

    setLoading(true);
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
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
      {/* LOGO */}
      <div className="relative w-[400px] h-[200px] mx-auto mb-1">
        <Image
          src="/logo-cleengo.svg"
          alt="CleenGo Logo"
          fill
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
            className="border rounded-lg px-3 py-2"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* APELLIDO */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Apellido</label>
          <input
            name="surname"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
          />
          {errors.surname && <p className="text-red-500 text-sm">{errors.surname}</p>}
        </div>

        {/* EMAIL */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Correo</label>
          <input
            name="email"
            type="email"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* PASSWORD */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Contraseña</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Confirmar contraseña</label>
          <input
            name="confirmPassword"
            type="password"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>

        {/* BIRTHDATE */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Fecha de nacimiento</label>
          <input
            name="birthDate"
            type="date"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
          />
          {errors.birthDate && (
            <p className="text-red-500 text-sm">{errors.birthDate}</p>
          )}
        </div>

        {/* PHONE */}
        <div className="flex flex-col">
          <label className="text-gray-700 text-sm font-medium mb-1">Teléfono</label>
          <input
            name="phone"
            onChange={handleChange}
            className="border rounded-lg px-3 py-2"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        <button
          disabled={loading || !allValid()}
          className="bg-blue-600 text-white py-2 rounded-lg hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Registrando..." : "Registrarme"}
        </button>

        <div className="mt-4">
          <OAuthLoginButton role="client" />
        </div>

        {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
      </form>
    </div>
  );
}