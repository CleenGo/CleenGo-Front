"use client"

import { useForm } from "react-hook-form";
import { registerProvider } from "@/app/services/auth"
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
        formState: { errors },
    } = useForm<ProviderFormData>();

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

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

    return (
        <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6">
                Registro Proveedor
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                {/* NOMBRE */}
                <div className="flex flex-col">
                    <label className="text-gray-700 text-sm font-medium mb-1">Nombre</label>
                    <input
                        placeholder="Ej: Juan"
                        className="border rounded-lg px-3 py-2"
                        {...register("name", { required: "El nombre es obligatorio" })}
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                </div>

                {/* APELLIDO */}
                <div className="flex flex-col">
                    <label className="text-gray-700 text-sm font-medium mb-1">Apellido</label>
                    <input
                        placeholder="Ej: Pérez"
                        className="border rounded-lg px-3 py-2"
                        {...register("surname", { required: "El apellido es obligatorio" })}
                    />
                    {errors.surname && <span className="text-red-500 text-sm">{errors.surname.message}</span>}
                </div>

                {/* EMAIL */}
                <div className="flex flex-col">
                    <label className="text-gray-700 text-sm font-medium mb-1">Correo</label>
                    <input
                        type="email"
                        placeholder="Ej: juanperez@gmail.com"
                        className="border rounded-lg px-3 py-2"
                        {...register("email", { required: "El correo es obligatorio" })}
                    />
                    {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                </div>

                {/* PASSWORD */}
                <div className="flex flex-col">
                    <label className="text-gray-700 text-sm font-medium mb-1">Contraseña</label>
                    <input
                        type="password"
                        placeholder="Mínimo 8 caracteres"
                        className="border rounded-lg px-3 py-2"
                        {...register("password", {
                            required: "La contraseña es obligatoria",
                            minLength: { value: 8, message: "Debe tener al menos 8 caracteres" },
                        })}
                    />
                    {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                </div>

                {/* CONFIRM PASSWORD */}
                <div className="flex flex-col">
                    <label className="text-gray-700 text-sm font-medium mb-1">Confirmar contraseña</label>
                    <input
                        type="password"
                        placeholder="Repite la contraseña"
                        className="border rounded-lg px-3 py-2"
                        {...register("confirmPassword", { required: "Debes confirmar la contraseña" })}
                    />
                    {errors.confirmPassword && (
                        <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
                    )}
                </div>

                {/* BIRTHDATE */}
                <div className="flex flex-col">
                    <label className="text-gray-700 text-sm font-medium mb-1">Fecha de nacimiento</label>
                    <input
                        type="date"
                        className="border rounded-lg px-3 py-2"
                        {...register("birthDate", { required: "La fecha de nacimiento es obligatoria" })}
                    />
                    {errors.birthDate && (
                        <span className="text-red-500 text-sm">{errors.birthDate.message}</span>
                    )}
                </div>

                {/* PROFILE IMG */}
                <div className="flex flex-col">
                    <label className="text-gray-700 text-sm font-medium mb-1">Imagen de perfil (URL)</label>
                    <input
                        placeholder="Ej: https://miimagen.com/foto.jpg"
                        className="border rounded-lg px-3 py-2"
                        {...register("profileImgUrl")}
                    />
                </div>

                {/* PHONE */}
                <div className="flex flex-col">
                    <label className="text-gray-700 text-sm font-medium mb-1">Teléfono</label>
                    <input
                        placeholder="Ej: 987654321"
                        className="border rounded-lg px-3 py-2"
                        {...register("phone", {
                            required: "El teléfono es obligatorio",
                            minLength: { value: 10, message: "Número muy corto" },
                        })}
                    />
                    {errors.phone && (
                        <span className="text-red-500 text-sm">{errors.phone.message}</span>
                    )}
                </div>
                {/* DAYS */}
                <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Días de atención</p>

                    <div className="grid grid-cols-2 gap-2">
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
                            <label key={day} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    value={day}
                                    {...register("days", { required: "Debe seleccionar días" })}
                                    className="w-4 h-4"
                                />
                                <span>{day}</span>
                            </label>
                        ))}
                    </div>

                    {errors.days && (
                        <span className="text-red-500 text-sm">{errors.days.message}</span>
                    )}
                </div>
                {/* HOURS */}
                <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">Horarios disponibles</p>

                    <div className="grid grid-cols-1 gap-2">
                        {["09:00-12:00", "14:00-18:00", "18:00-21:00"].map((hour) => (
                            <label key={hour} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    value={hour}
                                    {...register("hours", { required: "Debe seleccionar horas" })}
                                    className="w-4 h-4"
                                />
                                <span>{hour}</span>
                            </label>
                        ))}
                    </div>

                    {errors.hours && (
                        <span className="text-red-500 text-sm">{errors.hours.message}</span>
                    )}
                </div>
                {/* ABOUT */}
                <textarea
                    placeholder="Cuéntanos sobre tu experiencia..."
                    rows={4}
                    className="border rounded-lg px-3 py-2"
                    {...register("about", {
                        required: "Este campo es obligatorio",
                        minLength: { value: 20, message: "Mínimo 20 caracteres" },
                        maxLength: { value: 250, message: "Máximo 250 caracteres" },
                    })}
                />
                {errors.about && (
                    <span className="text-red-500 text-sm">{errors.about.message}</span>
                )}

                {/* BUTTON */}
                <button
                    disabled={loading}
                    className="bg-blue-600 text-white py-2 rounded-lg hover:opacity-90 disabled:opacity-70"
                >
                    {loading ? "Registrando..." : "Registrarme como Proveedor"}
                </button>

                {/* ERRORS */}
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
            </form>
        </div>
    );
}
