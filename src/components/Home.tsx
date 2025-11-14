import Navbar from "./Navbar";


export default function HomePage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#F7FAFC] flex flex-col items-center justify-center text-[#0C2340] px-4 pt-20">
        {/* Logo */}
       <img src="/CleenGo_Logo_Pack/bloop-icon-light.svg" alt="CleenGo Logo" className="h-16" />
       
        {/* Título */}
        <h1 className="text-4xl font-bold text-center mb-3">
          Bienvenido a CleenGo
        </h1>

        {/* Subtítulo */}
        <p className="text-lg text-center mb-8 max-w-md">
          Plataforma de servicio de Limpieza — Rapido, Facil y Confiable 
        </p>
      </div>
    </>
  );
}
