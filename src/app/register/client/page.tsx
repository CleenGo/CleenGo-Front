import Image from "next/image";
import RegisterFormClient from "@/app/components/RegisterFormClient";

export default function RegisterClientPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FAFC] text-[#0C2340] px-4">
      {/* Logo (ajusta el src al nombre real en /public) */}
      <Image
        src="/logo-vertical-sin-fondo.png"
        alt="CleenGo Logo"
        width={160}
        height={80}
        className="h-20 mb-6 w-auto"
      />

      <RegisterFormClient />
    </div>
  );
}
