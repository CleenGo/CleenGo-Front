import Loginform from "../../../components/Loginform";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FAFC] text-[#0C2340] px-4">
      {/* Logo */}
      <img
        src="/CleenGo_Logo_Pack/cleengo-logo-light.svg"
        alt="CleenGo Logo"
        className="h-20 mb-6"
      />

      {/* Formulario tradicional */}
      <Loginform />
    </div>
  );
}
