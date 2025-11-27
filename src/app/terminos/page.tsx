"use client";

import Navbar from "../components/Navbar";
import { AuthProvider } from "../contexts/AuthContext";

export default function Terminos() {
  return (
    <AuthProvider>
      <Navbar />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#0A65FF] to-[#3D8AFF] text-white py-20 px-4 pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Términos y Condiciones</h1>
            <p className="text-xl text-white/90">
              Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Bienvenido a CleenGo. Al utilizar nuestros servicios, aceptas los siguientes términos y condiciones. Por favor, léelos detenidamente antes de usar nuestra plataforma.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Definiciones</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Plataforma:</strong> Se refiere al sitio web y aplicaciones móviles de CleenGo.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Usuario:</strong> Cualquier persona que utilice la plataforma, ya sea como cliente o proveedor de servicios.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Cliente:</strong> Usuario que solicita servicios de limpieza a través de la plataforma.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Proveedor:</strong> Profesional independiente que ofrece servicios de limpieza a través de la plataforma.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Uso de la Plataforma</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2.1 Registro</h3>
                <p className="text-gray-700 leading-relaxed">
                  Para utilizar nuestros servicios, debes crear una cuenta proporcionando información veraz, completa y actualizada. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2.2 Elegibilidad</h3>
                <p className="text-gray-700 leading-relaxed">
                  Debes ser mayor de 18 años para usar la plataforma. Al registrarte, confirmas que cumples con este requisito.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2.3 Uso Prohibido</h3>
                <p className="text-gray-700 leading-relaxed">
                  No está permitido usar la plataforma para actividades ilegales, fraudulentas o que violen los derechos de terceros. CleenGo se reserva el derecho de suspender o cancelar cuentas que infrinjan estas normas.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Servicios y Transacciones</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3.1 Rol de CleenGo</h3>
                <p className="text-gray-700 leading-relaxed">
                  CleenGo actúa como intermediario entre clientes y proveedores. No somos proveedores directos de servicios de limpieza. Facilitamos la conexión, pero los servicios son prestados por profesionales independientes.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3.2 Reservas y Pagos</h3>
                <p className="text-gray-700 leading-relaxed">
                  Al reservar un servicio, te comprometes a completar el pago según los términos acordados. Los precios mostrados incluyen impuestos aplicables. Los métodos de pago aceptados se indican en la plataforma.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3.3 Cancelaciones</h3>
                <p className="text-gray-700 leading-relaxed">
                  Las cancelaciones deben realizarse con al menos 24 horas de anticipación para obtener un reembolso completo. Las cancelaciones tardías pueden estar sujetas a cargos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3.4 Garantía de Satisfacción</h3>
                <p className="text-gray-700 leading-relaxed">
                  Si no estás satisfecho con el servicio recibido, contáctanos dentro de las 24 horas posteriores al servicio. Evaluaremos cada caso y ofreceremos soluciones apropiadas, que pueden incluir reembolsos o servicios adicionales.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Responsabilidades</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4.1 Responsabilidad del Cliente</h3>
                <p className="text-gray-700 leading-relaxed">
                  Los clientes son responsables de proporcionar acceso seguro al lugar donde se prestará el servicio y de informar sobre cualquier condición especial o riesgo potencial.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4.2 Responsabilidad del Proveedor</h3>
                <p className="text-gray-700 leading-relaxed">
                  Los proveedores deben cumplir con los estándares de calidad acordados, respetar la propiedad del cliente y mantener un comportamiento profesional en todo momento.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4.3 Limitación de Responsabilidad</h3>
                <p className="text-gray-700 leading-relaxed">
                  CleenGo no se hace responsable por daños directos, indirectos o consecuentes derivados del uso de la plataforma o de los servicios prestados por los proveedores, excepto en los casos previstos por la ley.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Propiedad Intelectual</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                Todos los contenidos de la plataforma, incluyendo textos, gráficos, logos, imágenes y software, son propiedad de CleenGo o sus licenciantes y están protegidos por las leyes de propiedad intelectual.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No está permitido copiar, modificar, distribuir o usar estos contenidos sin autorización expresa por escrito.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Modificaciones</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                CleenGo se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Los cambios serán efectivos inmediatamente después de su publicación en la plataforma. El uso continuado de nuestros servicios después de cualquier modificación constituye tu aceptación de los nuevos términos.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Ley Aplicable y Jurisdicción</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                Estos términos se rigen por las leyes del país donde se preste el servicio.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Cualquier controversia derivada de estos términos será sometida a la jurisdicción de los tribunales competentes de la jurisdicción correspondiente, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Contacto</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> cleengo65@gmail.com

                </p>
                <p className="text-gray-700">
                  <strong>Teléfono:</strong> +52 55 1234 5678
                </p>
              </div>
            </div>
          </section>

          {/* Acceptance */}
          <div className="bg-gradient-to-br from-[#0A65FF] to-[#3D8AFF] rounded-2xl p-8 text-white text-center">
            <p className="text-lg">
              Al utilizar CleenGo, confirmas que has leído, entendido y aceptado estos términos y condiciones.
            </p>
          </div>
        </div>
      </div>

    </AuthProvider>
  );
}