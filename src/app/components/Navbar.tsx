"use client";

import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/app/contexts/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 flex items-center justify-between px-6 py-4 z-50">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo-sin-fondo.png" // ajusta al nombre que tengas en /public
          alt="CleenGo Logo"
          width={120}
          height={48}
          className="h-16 w-auto"
        />
      </Link>

      {/* Si NO hay usuario: botones Login/Register */}
      {!user && (
        <div className="flex gap-4">
          <Link
            href="/login"
            className="text-[#0C2340] font-medium hover:opacity-70 transition"
          >
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

      {/* Si SÍ hay usuario: saludo + logout */}
      {user && (
        <div className="flex items-center gap-4">
          <span className="text-[#0C2340] font-medium">
            Hola, {user.name ?? user.email} 👋
          </span>

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
