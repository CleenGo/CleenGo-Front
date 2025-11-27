import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./components/Navbar"; // 👈 IMPORTA LA NAVBAR

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
      <body className="bg-[#F7FAFC] text-[#0C2340]">
        <Providers>
          <Navbar /> 
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
