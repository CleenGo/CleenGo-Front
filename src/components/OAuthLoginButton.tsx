import { supabase } from "../supabaseClient";

export default function OAuthLoginButton() {

    const handleGoogleLogin = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${window.location.origin}/oauth/callback`
            }
        });

        if (error) alert("Error al iniciar con Google");
    };

    return (
        <button
            onClick={handleGoogleLogin}
            className="w-full border px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition"
        >
            <img
                src="https://developers.google.com/identity/images/g-logo.png"
                className="w-5 h-5"
            />
            Continuar con Google
        </button>
    );
}
