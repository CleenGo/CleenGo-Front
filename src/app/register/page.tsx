"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function RegisterRolePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FAFC] px-4">
      {/* Logo */}
      <Image
        src="/cleengo-logo-light.svg" // Ajusta al nombre real en public
        alt="CleenGo Logo"
        width={180}
        height={80}
        className="mb-8"
      />

      <h1 className="text-2xl font-semibold text-[#0C2340] mb-6">
        ¿Cómo deseas registrarte?
      </h1>

      <div className="flex flex-col gap-4 w-full max-w-sm">
        <button
          onClick={() => router.push("/register/client")}
          className="bg-blue-500 text-white py-3 rounded-lg text-lg hover:opacity-90"
        >
          Soy Cliente
        </button>

        <button
          onClick={() => router.push("/register/provider")}
          className="bg-green-500 text-white py-3 rounded-lg text-lg hover:opacity-90"
        >
          Soy Proveedor
        </button>
      </div>
    </div>
  );
}
