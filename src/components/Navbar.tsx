import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 flex items-center justify-between px-6 py-4 z-50">
      
      {/* Logo */}
      <a href="/" className="flex items-center gap-2">
       <img src="/CleenGo_Logo_Pack/cleengo-logo-light.svg" alt="CleenGo Logo" className="h-16"/>
      </a>

      <div className="flex gap-4">
        <Link
          to ="/login"
          className="text-[#0C2340] font-medium hover:opacity-70 transition">

          Login
        </Link>
        <a
          href="/register"
          className="bg-[#0A65FF] text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition"
        >
          Register
        </a>
      </div>
    </nav>
  );
}
