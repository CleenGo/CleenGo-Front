// OAuthCallbackPage.tsx
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "../../services/supabaseClient";
import { thirdPartyLogin } from "../../services/auth";

export default function OAuthCallbackPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = (searchParams.get("role") as "client" | "provider") || "client";

  useEffect(() => {
    const processOAuthLogin = async () => {
      try {
        console.log("➡️ Entró a OAuthCallbackPage");
        console.log("➡️ role =>", role);
        console.log("➡️ location.href =>", window.location.href);
        console.log("➡️ location.hash =>", window.location.hash);

        // 1. Intentar sacar access_token del hash de la URL
        let accessToken: string | null = null;
        if (window.location.hash) {
          const hash = window.location.hash.replace("#", "");
          const hashParams = new URLSearchParams(hash);
          accessToken = hashParams.get("access_token");
        }

        console.log("➡️ accessToken desde hash =>", accessToken);

        // 2. Si no hay token en el hash, usar getSession() como respaldo
        if (!accessToken) {
          const { data, error } = await supabase.auth.getSession();
          console.log("➡️ getSession() data =>", data);
          console.log("➡️ getSession() error =>", error);

          if (!error && data.session) {
            accessToken = data.session.access_token;
          }
        }

        if (!accessToken) {
          console.error(
            "⛔ No se encontró accessToken ni en hash ni en sesión"
          );
          alert("No se pudo obtener el token de Google/Supabase.");
          return navigate("/login");
        }

        // 3. Obtener info básica del usuario desde Supabase
        const { data: userData, error: userError } =
          await supabase.auth.getUser(accessToken);

        if (userError || !userData?.user) {
          console.error("⛔ Error al obtener usuario de Supabase:", userError);
          alert("Error al validar usuario en Supabase.");
          return navigate("/login");
        }

        const supaUser = userData.user;

        const body = {
          accessToken,
          name:
            supaUser.user_metadata?.name ||
            supaUser.user_metadata?.full_name ||
            null,
          surname: supaUser.user_metadata?.surname ?? null,
          phone: supaUser.user_metadata?.phone ?? null,
          profileImgUrl: supaUser.user_metadata?.avatar_url ?? null,
        };

        console.log("➡️ Body enviado al back =>", body);

        // 4. Usar el mismo cliente http que login/register
        const dataBack = await thirdPartyLogin(role, body);
        console.log("✅ Data back =>", dataBack);

        localStorage.setItem("token", dataBack.accessToken);
        localStorage.setItem("user", JSON.stringify(dataBack.user));

        // Limpiar hash de la URL
        window.history.replaceState({}, document.title, "/");

        // 🔥 Forzar recarga para que el header/AuthContext lea el nuevo estado
        if (role === "client") {
          window.location.href = "/";
        } else {
          window.location.href = "/dashboard/provider";
        }
      } catch (err) {
        console.error("⛔ Error en OAuthCallback:", err);
        alert("Error inesperado en autenticación.");
        navigate("/login");
      }
    };

    processOAuthLogin();
  }, [navigate, role]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-700">
      <div className="bg-white shadow-md rounded-xl p-6 text-center w-80">
        <h2 className="text-lg font-semibold mb-2">Conectando con Google…</h2>
        <p className="text-sm text-gray-500">Por favor espera unos segundos.</p>
      </div>
    </div>
  );
}
