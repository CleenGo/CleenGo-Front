"use client";

import { useNavigate } from "react-router-dom";

export default function RegisterRolePage () {
    const navigate = useNavigate();

    return (
         <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FAFC] px-4">
      {/* Logo */}
      <img
        src="/CleenGo_Logo_Pack/cleengo-logo-light.svg"
        className="h-24 mb-8"
        alt="Logo"
      />

      <h1 className="text-2xl font-semibold text-[#0C2340] mb-6">
        ¿Cómo deseas registrarte?
      </h1>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button
          onClick={() => navigate("/register/client")}
          className="bg-blue-500 text-white py-3 rounded-lg text-lg hover:opacity-90"
        >
          Soy Cliente
        </button>

        <button
          onClick={() => navigate("/register/provider")}
          className="bg-green-500 text-white py-3 rounded-lg text-lg hover:opacity-90"
        >
          Soy Proveedor
        </button>
      </div>
    </div>
    )
}