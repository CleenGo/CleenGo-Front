"use client";

import { useState, FormEvent, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { login } from "../services/auth";
import OAuthLoginButton from "./OAuthLoginButton";
import { useAuth } from "../contexts/AuthContext";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const router = useRouter();
  const { login: loginContext } = useAuth();

  // 🔵 VALIDACIÓN DINÁMICA DEL EMAIL
  const isEmailValid = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }, [email]);

  // 🔵 VALIDACIONES DINÁMICAS PASSWORD
  const passwordRules = useMemo(() => {
    return {
      length: password.length >= 8,
      upper: /[A-Z]/.test(password),
      lower: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[^A-Za-z0-9]/.test(password),
    };
  }, [password]);

  const allValid = Object.values(passwordRules).every(Boolean);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginError("");

    try {
      const res = await login({ email, password });
      loginContext(res.user, res.accessToken);
      router.push("/");
    } catch {
      setLoginError("Credenciales no válidas");
    }
  };

  const renderRule = (ok: boolean, text: string) => (
    <p className={`text-sm flex items-center gap-2 ${ok ? "text-green-600" : "text-red-500"}`}>
      <span className="font-bold">{ok ? "✔" : "✘"}</span> {text}
    </p>
  );

  return (
    <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-sm">
      <div className="flex justify-center mb-4">
        <Image
          src="/logo-cleengo.svg"
          alt="Logo"
          width={250}
          height={250}
          className="object-contain"
        />
      </div>

      <h2 className="text-2xl font-semibold text-center mb-6">
        Iniciar Sesión
      </h2>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* EMAIL */}
        <div>
          <label className="block text-sm font-medium mb-1">Correo electrónico</label>
          <input
            type="email"
            placeholder="ejemplo@correo.com"
            className={`w-full border rounded-lg px-3 py-2 
              focus:outline-none focus:ring-2
              ${email.length === 0 ? "border-gray-300" : isEmailValid ? "border-green-500 focus:ring-green-400" : "border-red-500 focus:ring-red-400"}
            `}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {email.length > 0 && !isEmailValid && (
            <p className="text-red-500 text-sm">Correo inválido</p>
          )}
        </div>

        {/* PASSWORD */}
        <div>
          <label className="block text-sm font-medium mb-1">Contraseña</label>
          <input
            type="password"
            placeholder="••••••••"
            className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2
              ${password.length === 0 ? "border-gray-300" : allValid ? "border-green-500 focus:ring-green-400" : "border-red-500 focus:ring-red-400"}
            `}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* 🔥 VALIDACIONES EN TIEMPO REAL */}
          <div className="mt-2 space-y-1">
            {renderRule(passwordRules.length, "Mínimo 8 caracteres")}
            {renderRule(passwordRules.upper, "Al menos una MAYÚSCULA")}
            {renderRule(passwordRules.lower, "Al menos una minúscula")}
            {renderRule(passwordRules.number, "Al menos un número")}
            {renderRule(passwordRules.special, "Al menos un símbolo (!@#$%...)")}
          </div>
        </div>

        {/* ERROR DEL LOGIN */}
        {loginError && <p className="text-red-500 text-center">{loginError}</p>}

        <button
          type="submit"
          disabled={!isEmailValid || !allValid}
          className="bg-[#0A65FF] text-white font-medium py-2 rounded-lg hover:opacity-90 transition disabled:opacity-50"
        >
          Iniciar Sesión
        </button>
      </form>

      <div className="mt-4">
        <OAuthLoginButton role="client" />
      </div>

      <p className="text-sm text-center mt-4">
        ¿No tienes cuenta?{" "}
        <Link href="/register" className="text-[#0A65FF] font-medium hover:underline">
          Regístrate aquí
        </Link>
      </p>
    </div>
  );
}