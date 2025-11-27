import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "CleenGo",
  description: "Plataforma de servicio de limpieza y mantenimiento",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
