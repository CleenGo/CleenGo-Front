import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { thirdPartyLogin } from "../../services/auth";
import { useAuth } from "../../contexts/AuthContext";

export default function OAuthCallbackPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { login } = useAuth(); // 👈 usamos el contexto
  const hasRun = useRef(false);

  const role = (searchParams.get("role") || "client").toLowerCase() as
    | "client"
    | "provider";

  useEffect(() => {
    if (hasRun.current) return; // evitar doble ejecución en dev
    hasRun.current = true;

    const run = async () => {
      try {
        console.log("🟢 [OAuth] Callback montado. URL:", window.location.href);

        // 1) Leer el hash: #access_token=...
        const rawHash = window.location.hash.startsWith("#")
          ? window.location.hash.slice(1)
          : window.location.hash;

        const params = new URLSearchParams(rawHash);
        const accessToken = params.get("access_token");

        console.log("🟢 [OAuth] hash params:", Object.fromEntries(params));

        if (!accessToken) {
          console.error("❌ No se encontró access_token en el hash");
          navigate("/login");
          return;
        }

        // Limpiar el hash de la URL
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname + window.location.search
        );

        // 2) Llamar a tu backend
        const response = await thirdPartyLogin({
          role,
          accessToken,
        });

        console.log("🟢 [OAuth] Respuesta del back:", response);

        // 3) Usar SIEMPRE el mismo login del contexto
        login(response.user, response.accessToken);

        // 4) Redirigir según el rol de la DB
        const userRole = (response.user.role || "").toLowerCase();

        if (userRole === "client") navigate("/");
        else if (userRole === "provider") navigate("/dashboard/provider");
        else navigate("/");
      } catch (err) {
        console.error("❌ [OAuth] Error inesperado en callback:", err);
        navigate("/login");
      }
    };

    run();
  }, [navigate, role, login]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-700">
      <div className="bg-white shadow-md rounded-xl p-6 text-center w-80">
        <h2 className="text-lg font-semibold mb-2">Conectando con Google...</h2>
        <p className="text-sm text-gray-500">Por favor espera unos segundos.</p>
      </div>
    </div>
  );
}
