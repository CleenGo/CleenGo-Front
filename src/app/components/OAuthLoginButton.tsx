"use client";

import { supabase } from "../services/supabaseClient";

interface OAuthLoginButtonProps {
  role: "client" | "provider";
}

export default function OAuthLoginButton({ role }: OAuthLoginButtonProps) {
  const googleLogo = "https://www.svgrepo.com/show/475656/google-color.svg";

  const handleGoogleLogin = async () => {
    // 🔥 window SOLO se usa dentro del handler (client-safe)
    const redirectURL = `${window.location.origin}/oauth/callback?role=${role}`;

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectURL,
      },
    });

    if (error) alert("Error al iniciar con Google");
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full border px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
    >
      <img src={googleLogo} className="w-5 h-5" />
      Continuar con Google
    </button>
  );
}
