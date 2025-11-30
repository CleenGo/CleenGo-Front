"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { registerProvider } from "@/app/services/auth";
import { useState } from "react";

interface ProviderFormData {
    name: string;
    surname: string;
    email: string;
    password: string;
    confirmPassword: string;
    birthDate: string;
    profileImgUrl?: string;
    phone: string;
    days: string[];
    hours: string[];
    about: string;
}

export default function RegisterProviderForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<ProviderFormData>();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const passwordValue = watch("password");
    const birthDateValue = watch("birthDate");

    const onSubmit = async (data: ProviderFormData) => {
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await registerProvider(data);
            setSuccess("Proveedor registrado exitosamente");
        } catch (err: any) {
            setError(err.response?.data?.message || "Error inesperado");
        } finally {
            setLoading(false);
        }
    };

    // VALIDAR SI ES MAYOR DE 18
    const validateAge = (value: string) => {
        const today = new Date();
        const birth = new Date(value);

        const age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        if (
            monthDiff < 0 ||
            (monthDiff === 0 && today.getDate() < birth.getDate())
        ) {
            return age - 1;
        }

        return age;
    };

    return (
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md flex flex-col items-center">

            <div className="relative w-[400px] h-[200px] mx-auto mb-2">
                <Image
                    src="/logo-cleengo.svg"
                    alt="CleenGo Logo"
                    fill
                    className="object-contain"
                />
            </div>

            <h2 className="text-2xl font-semibold text-center mb-6">
                Registro Proveedor
            </h2>

            <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>

                {/* NOMBRE */}
                <div className="flex flex-col">
                    <label>Nombre</label>
                    <input
                        className="border rounded-lg px-3 py-2"
                        {...register("name", { required: "El nombre es obligatorio" })}
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>

                {/* APELLIDO */}
                <div className="flex flex-col">
                    <label>Apellido</label>
                    <input
                        className="border rounded-lg px-3 py-2"
                        {...register("surname", { required: "El apellido es obligatorio" })}
                    />
                    {errors.surname && <span className="text-red-500">{errors.surname.message}</span>}
                </div>

                {/* EMAIL */}
                <div className="flex flex-col">
                    <label>Correo</label>
                    <input
                        type="email"
                        className="border rounded-lg px-3 py-2"
                        {...register("email", {
                            required: "El correo es obligatorio",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Correo inválido",
                            },
                        })}
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>

                {/* PASSWORD */}
                <div className="flex flex-col">
                    <label>Contraseña</label>
                    <input
                        type="password"
                        className={`border rounded-lg px-3 py-2 
            ${errors.password ? "border-red-500" : "border-black-300"}`}
                        {...register("password", {
                            required: "La contraseña es obligatoria",
                            validate: {
                                minLength: (value) =>
                                    value.length >= 8 || "Debe tener mínimo 8 caracteres",
                                hasUpperCase: (value) =>
                                    /[A-Z]/.test(value) || "Debe incluir una mayúscula",
                                hasLowerCase: (value) =>
                                    /[a-z]/.test(value) || "Debe incluir una minúscula",
                                hasNumber: (value) =>
                                    /\d/.test(value) || "Debe incluir un número",
                            },
                        })}
                    />

                    {/* MENSAJE DE ERROR */}
                    {errors.password && (
                        <span className="text-red-500 text-sm mt-1">
                            {errors.password.message}
                        </span>
                    )}
                </div>

                {/* CONFIRM PASSWORD */}
                <div className="flex flex-col">
                    <label>Confirmar contraseña</label>
                    <input
                        type="password"
                        className={`border rounded-lg px-3 py-2 
            ${errors.confirmPassword ? "border-red-500" : "border-black-300"}`}
                        {...register("confirmPassword", {
                            required: "Debes confirmar la contraseña",
                            validate: (value) =>
                                value === passwordValue || "Las contraseñas no coinciden",
                        })}
                    />
                    {errors.confirmPassword && (
                        <span className="text-red-500 text-sm mt-1">
                            {errors.confirmPassword.message}
                        </span>
                    )}
                </div>
                {/* FECHA DE NACIMIENTO */}
                <div className="flex flex-col">
                    <label>Fecha de nacimiento</label>
                    <input
                        type="date"
                        className="border rounded-lg px-3 py-2"
                        {...register("birthDate", {
                            required: "La fecha de nacimiento es obligatoria",
                            validate: (value) =>
                                validateAge(value) >= 18 ||
                                "Debes ser mayor de 18 años",
                        })}
                    />
                    {errors.birthDate && (
                        <span className="text-red-500">{errors.birthDate.message}</span>
                    )}
                </div>

                {/* PHONE */}
                <div className="flex flex-col">
                    <label>Teléfono</label>
                    <input
                        className="border rounded-lg px-3 py-2"
                        {...register("phone", {
                            required: "El teléfono es obligatorio",
                            pattern: {
                                value: /^[0-9]+$/,
                                message: "Solo números",
                            },
                            minLength: { value: 9, message: "Debe tener al menos 9 dígitos" },
                            maxLength: { value: 15, message: "Número demasiado largo" },
                        })}
                    />
                    {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
                </div>

                <button
                    disabled={loading}
                    className="bg-blue-600 text-white py-2 rounded-lg hover:opacity-90 disabled:opacity-70"
                >
                    {loading ? "Registrando..." : "Registrarme como Proveedor"}
                </button>

                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}
            </form>
        </div>
    );
}