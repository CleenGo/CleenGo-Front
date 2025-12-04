import { Suspense } from "react";
import CallbackClient from "./CallbackClient";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

export default function OAuthCallbackPage() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <CallbackClient />
    </Suspense>
  );
}
