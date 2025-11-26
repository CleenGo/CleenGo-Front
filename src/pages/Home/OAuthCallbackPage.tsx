import { useEffect } from "react";
import { supabase } from "../../services/supabaseClient";
import { useNavigate, useSearchParams } from "react-router-dom";
import { login } from "../../services/auth";


export default function OAuthCallbackPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // role viene desde el botón de OAuth
  const role = searchParams.get("role") || "client";

  useEffect(() => {
    const processOAuthLogin = async () => {
      // Obtener sesión devuelta por Google → Supabase
      const { data, error } = await supabase.auth.getSession();

      if (error || !data.session) {
        console.error("No session from OAuth", error);
        return navigate("/login");
      }

      const user = data.session.user;

      // Datos que nos da Google
      const googlePayload = {
        email: user.email!,
        name: user.user_metadata.full_name,
        profileImgUrl: user.user_metadata.avatar_url,
        role,
      };

      try {
        // 👇 Aquí DEBES crear un endpoint como: POST /auth/oauth
        const response = await login({
          email: googlePayload.email,
          password: googlePayload.email, // TEMPORAL → para cumplir tu backend
        });

        localStorage.setItem("token", response.accessToken);
        localStorage.setItem("user", JSON.stringify(response.user));

        if (role === "client") navigate("/");
        else navigate("/dashboard/provider");

      } catch (err) {
        console.error(err);
        navigate("/login");
      }
    };

    processOAuthLogin();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-700">
      <div className="bg-white shadow-md rounded-xl p-6 text-center w-80">
        <h2 className="text-lg font-semibold mb-2">Conectando con Google…</h2>
        <p className="text-sm text-gray-500">
          Por favor espera unos segundos.
        </p>
      </div>
    </div>
  );
}
