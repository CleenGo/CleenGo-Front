import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#F7FAFC] flex flex-col items-center justify-center text-[#0C2340] px-4 pt-20">
        {/* Logo */}
        <Image
          src="/cleengo-logo.png" // asegúrate que exista en /apps/next/public
          alt="CleenGo Logo"
          width={224}
          height={56}
          className="h-14 mb-6 w-auto"
        />

        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-3">
          Bienvenido a CleenGo
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-center mb-8 max-w-md">
          Plataforma de servicio de Limpieza — Rápido, Fácil y Confiable
        </p>

        {/* Botones */}
        <div className="flex gap-4">
          <Link
            href="/login"
            className="bg-[#0A65FF] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-[#2CC9C9] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
}
