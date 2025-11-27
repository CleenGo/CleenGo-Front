"use client";

import Navbar from "../components/Navbar";
import { AuthProvider } from "../contexts/AuthContext";

export default function Privacidad() {
  return (
    <AuthProvider>
      <Navbar />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#0A65FF] to-[#3D8AFF] text-white py-20 px-4 pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Política de Privacidad</h1>
            <p className="text-xl text-white/90">
              Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              En CleenGo, nos comprometemos a proteger tu privacidad y tus datos personales. Esta política describe cómo recopilamos, usamos, almacenamos y protegemos tu información cuando utilizas nuestra plataforma.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Información que Recopilamos</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1.1 Información Personal</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Recopilamos información que nos proporcionas directamente, incluyendo:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Nombre completo</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Número de teléfono</li>
                  <li>Dirección física (para servicios a domicilio)</li>
                  <li>Información de pago</li>
                  <li>Fotografía de perfil (opcional)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1.2 Información de Uso</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Recopilamos automáticamente información sobre cómo interactúas con nuestra plataforma:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Dirección IP</li>
                  <li>Tipo de navegador y dispositivo</li>
                  <li>Páginas visitadas y tiempo de navegación</li>
                  <li>Historial de búsquedas y reservas</li>
                  <li>Cookies y tecnologías similares</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1.3 Información de Terceros</h3>
                <p className="text-gray-700 leading-relaxed">
                  Podemos recibir información sobre ti de terceros, como redes sociales si decides vincular tu cuenta, o de proveedores de servicios de pago.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Cómo Usamos tu Información</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos la información recopilada para los siguientes propósitos:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#0A65FF] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Proporcionar, mantener y mejorar nuestros servicios</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#0A65FF] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Procesar transacciones y enviar confirmaciones de reserva</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#0A65FF] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Facilitar la comunicación entre clientes y proveedores</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#0A65FF] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enviar notificaciones importantes sobre tu cuenta y servicios</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#0A65FF] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personalizar tu experiencia y ofrecer recomendaciones</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#0A65FF] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Realizar análisis y estudios de mercado</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#0A65FF] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Prevenir fraudes y garantizar la seguridad de la plataforma</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[#0A65FF] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cumplir con obligaciones legales y regulatorias</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Compartir tu Información</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3.1 Con Proveedores de Servicios</h3>
                <p className="text-gray-700 leading-relaxed">
                  Compartimos información necesaria con los proveedores de limpieza para que puedan realizar el servicio (nombre, dirección, número de contacto).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3.2 Con Terceros de Confianza</h3>
                <p className="text-gray-700 leading-relaxed">
                  Podemos compartir información con proveedores de servicios externos que nos ayudan a operar la plataforma (procesadores de pago, servicios de alojamiento, herramientas de análisis).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3.3 Por Requerimiento Legal</h3>
                <p className="text-gray-700 leading-relaxed">
                  Podemos divulgar tu información si es requerido por ley, orden judicial, o para proteger los derechos, propiedad o seguridad de CleenGo, nuestros usuarios u otros.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3.4 Con tu Consentimiento</h3>
                <p className="text-gray-700 leading-relaxed">
                  Podemos compartir información con terceros cuando nos hayas dado tu consentimiento explícito.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Seguridad de tu Información</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                Implementamos medidas de seguridad técnicas, administrativas y físicas para proteger tu información personal contra acceso no autorizado, pérdida, alteración o destrucción.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#0A65FF] p-4 rounded">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Importante:</strong> Ningún sistema de seguridad es completamente infalible. Aunque tomamos todas las precauciones razonables, no podemos garantizar la seguridad absoluta de tu información.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">5. Cookies y Tecnologías Similares</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia, recordar tus preferencias y analizar el uso de nuestra plataforma.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades de la plataforma.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">6. Tus Derechos sobre tus Datos</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                De acuerdo con las leyes de protección de datos personales aplicables, tienes derecho a:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#0A65FF] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Acceso</h4>
                    <p className="text-gray-600 text-sm">Conocer qué datos tenemos sobre ti</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#2CC9C9] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">R</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Rectificación</h4>
                    <p className="text-gray-600 text-sm">Corregir datos inexactos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#0A65FF] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">C</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cancelación</h4>
                    <p className="text-gray-600 text-sm">Solicitar la eliminación</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-[#2CC9C9] rounded-lg w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">O</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Oposición</h4>
                    <p className="text-gray-600 text-sm">Oponerte al tratamiento</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mt-6">
                Para ejercer estos derechos, contáctanos en: <strong>privacidad@cleengo.com</strong>
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">7. Retención de Datos</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                Conservamos tu información personal durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera o permita un período de retención más largo. Al eliminar tu cuenta, procederemos a eliminar o anonimizar tu información, salvo que debamos conservarla por obligaciones legales.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">8. Menores de Edad</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información de menores. Si descubrimos que hemos recopilado información de un menor, la eliminaremos de inmediato.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Cambios a esta Política</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed">
                Podemos actualizar esta política de privacidad periódicamente. Te notificaremos sobre cambios significativos publicando la nueva política en esta página y actualizando la fecha de "Última actualización". Te recomendamos revisar esta política regularmente.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">10. Contacto</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-700 leading-relaxed mb-4">
                Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos tu información personal, contáctanos:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Responsable:</strong> CleenGo S.A. de C.V.
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> privacidad@cleengo.com
                </p>
                <p className="text-gray-700">
                  <strong>Teléfono:</strong> +52 55 1234 5678
                </p>
              </div>
            </div>
          </section>

          {/* Acceptance */}
          <div className="bg-gradient-to-br from-[#0A65FF] to-[#3D8AFF] rounded-2xl p-8 text-white">
            <div className="flex items-start gap-4">
              <svg className="w-12 h-12 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold mb-3">Tu privacidad es nuestra prioridad</h3>
                <p className="text-white/90 leading-relaxed">
                  En CleenGo, nos comprometemos a proteger tu información personal y a ser transparentes sobre cómo la utilizamos. Al usar nuestros servicios, confías en nosotros tu información, y tomamos esa responsabilidad muy en serio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </AuthProvider>
  );
}