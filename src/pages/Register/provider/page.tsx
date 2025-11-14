import RegisterFormProvider from "../../../components/RegisterFormProvider";

export default function RegisterProviderPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F7FAFC] px-4">
      <img
        src="/CleenGo_Logo_Pack/cleengo-logo-light.svg"
        className="h-20 mb-6"
      />
      <RegisterFormProvider />
    </div>
  );
}
