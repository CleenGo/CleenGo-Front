"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/app/contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const role = user?.role;

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 flex items-center justify-between px-6 py-2 z-50">

      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo-horizontal.svg"
          alt="CleenGo Logo"
          width={180}  // <-- más grande
          height={70}
          className="h-10 w-auto"  // <-- 80px de alto, ajustable
        />
      </Link>


      {/* ------------------- */}
      {/* GUEST NAVBAR       */}
      {/* ------------------- */}
      {!user && (
        <div className="flex gap-4">
          <Link href="/login" className="text-[#0C2340] font-medium hover:opacity-70 transition">
            Login
          </Link>
          <Link
            href="/register"
            className="bg-[#0A65FF] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            Register
          </Link>
        </div>
      )}


      {/* ------------------- */}
      {/* CLIENTE NAVBAR     */}
      {/* ------------------- */}
      {user && role === "client" && (
        <div className="flex items-center gap-6">

          <Link href="/client/home" className="text-[#0C2340] hover:opacity-70 transition">
            Inicio
          </Link>

          <Link href="/client/appointments" className="text-[#0C2340] hover:opacity-70 transition">
            Proveedores
          </Link>

          <Link href="/client/profile" className="text-[#0C2340] hover:opacity-70 transition">
            Perfil
          </Link>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            Logout
          </button>
        </div>
      )}


      {/* ------------------- */}
      {/* PROVEEDOR NAVBAR   */}
      {/* ------------------- */}
      {user && role === "provider" && (
        <div className="flex items-center gap-6">

          <Link href="/provider/dashboard" className="text-[#0C2340] hover:opacity-70 transition">
            Dashboard
          </Link>

          <Link href="/provider/appointments" className="text-[#0C2340] hover:opacity-70 transition">
            Servicios
          </Link>

          <Link href="/provider/profile" className="text-[#0C2340] hover:opacity-70 transition">
            Perfil
          </Link>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}

