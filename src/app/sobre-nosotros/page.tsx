"use client";

import Navbar from "../components/Navbar";
import { AuthProvider } from "../contexts/AuthContext";

export default function SobreNosotros() {
  return (
    <AuthProvider>
      <Navbar />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#0A65FF] to-[#3D8AFF] text-white py-20 px-4 pt-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-xl text-white/90">
              Conectando hogares con profesionales de limpieza de confianza
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Misión</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              En CleenGo, nuestra misión es transformar la manera en que las personas acceden a servicios de limpieza profesional en Latinoamérica. Creemos que todos merecen un hogar limpio y ordenado sin complicaciones, y trabajamos para hacer realidad esa visión conectando a clientes con los mejores profesionales de limpieza verificados.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nos comprometemos a ofrecer una experiencia transparente, segura y eficiente, donde la calidad del servicio y la satisfacción del cliente son nuestra máxima prioridad.
            </p>
          </section>

          {/* Story */}
          <section className="mb-16 bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              CleenGo nació en 2020 con una visión clara: simplificar la contratación de servicios de limpieza profesional. Nos dimos cuenta de que encontrar personal de limpieza confiable y de calidad era un desafío para muchas familias y empresas en Latinoamérica.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Desde entonces, hemos crecido hasta convertirnos en la plataforma líder de servicios de limpieza, conectando a miles de clientes con profesionales verificados en toda la región. Nuestro compromiso con la excelencia y la innovación nos ha permitido establecer nuevos estándares en la industria.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hoy, más de 10,000 usuarios confían en CleenGo para mantener sus espacios impecables, y seguimos creciendo día a día.
            </p>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Nuestros Valores</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="bg-[#0A65FF] rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Confianza</h3>
                <p className="text-gray-600">
                  Todos nuestros proveedores pasan por un riguroso proceso de verificación para garantizar tu seguridad y tranquilidad.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="bg-[#2CC9C9] rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Calidad</h3>
                <p className="text-gray-600">
                  Nos comprometemos a ofrecer solo los mejores servicios, monitoreando constantemente la satisfacción de nuestros clientes.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="bg-[#0A65FF] rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Rapidez</h3>
                <p className="text-gray-600">
                  Entendemos tu tiempo es valioso. Por eso hacemos que agendar un servicio sea rápido y sencillo.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="bg-[#2CC9C9] rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparencia</h3>
                <p className="text-gray-600">
                  Sin costos ocultos, sin sorpresas. Precios claros y comunicación honesta en cada paso.
                </p>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="mb-16 bg-gradient-to-br from-[#0A65FF] to-[#3D8AFF] rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">CleenGo en Números</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">10,000+</div>
                <div className="text-white/80">Clientes Satisfechos</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-white/80">Proveedores Verificados</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">4.9</div>
                <div className="text-white/80">Calificación Promedio</div>
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestro Compromiso</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              En CleenGo, trabajamos incansablemente para mejorar continuamente nuestra plataforma y servicios. Escuchamos a nuestros clientes y proveedores, y utilizamos sus comentarios para innovar y evolucionar.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestro equipo está disponible 24/7 para asegurarnos de que cada experiencia con CleenGo sea excepcional. Porque tu hogar limpio y tu tranquilidad son nuestra prioridad.
            </p>
          </section>
        </div>
      </div>


    </AuthProvider>
  );
}