import Loginform from "../../../components/Loginform";
import OAuthLoginButton from "../../../components/OAuthLoginButton";

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

      {/* Separador opcional */}
      {/* <div className="my-4 text-sm text-gray-500 flex items-center gap-2">
        <span className="h-px bg-gray-300 w-16"></span>
        O continua con
        <span className="h-px bg-gray-300 w-16"></span>
      </div> */}

      {/* Botón Google */}
      {/* <OAuthLoginButton role="client" /> */}
    </div>
  );
}
