"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function OAuthCallbackPage() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const role = searchParams.get("role");

    if (token) {
      localStorage.setItem("token", token);
    }

    if (role) {
      localStorage.setItem("role", role);
    }

    // Redirige donde necesites (usando window.location)
    window.location.href = "/";
  }, [searchParams]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      Procesando autenticación...
    </div>
  );
}
