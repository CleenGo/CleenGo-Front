import RegisterFormClient from "../../../components/RegisterFormClient";

export default function RegisterClientPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FAFC] px-4">
      <img
        src="/CleenGo_Logo_Pack/cleengo-logo-light.svg"
        className="h-20 mb-6"
      />
      <RegisterFormClient />
    </div>
  );
}
