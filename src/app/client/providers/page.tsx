"use client";

import { AuthProvider } from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar";
import Link from "next/link";

// Datos mockeados de proveedores
const mockProviders = [
  {
    id: 1,
    name: "María González",
    rating: 4.9,
    reviews: 127,
    location: "Ciudad de México",
    experience: 8,
    completedJobs: 342,
    pricePerRoom: 25,
    description: "Profesional de limpieza con más de 8 años de experiencia. Me especializo en limpieza profunda de hogares y oficinas. Atención al detalle garantizada.",
    services: ["Limpieza general", "Limpieza profunda", "Ventanas", "Cocina", "Baños"],
    verified: true,
    image: "https://ui-avatars.com/api/?name=Maria+Gonzalez&background=22C55E&color=fff&size=400"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    rating: 4.8,
    reviews: 98,
    location: "Argentina, Buenos Aires",
    experience: 5,
    completedJobs: 256,
    pricePerRoom: 22,
    description: "Experto en limpieza de oficinas y espacios comerciales. Trabajo con productos ecológicos y técnicas modernas de limpieza.",
    services: ["Oficinas", "Alfombras", "Pisos", "Muebles", "Desinfección"],
    verified: true,
    image: "https://ui-avatars.com/api/?name=Carlos+Rodriguez&background=0A65FF&color=fff&size=400"
  },
  {
    id: 3,
    name: "Ana Martínez",
    rating: 5.0,
    reviews: 156,
    location: "Monterrey",
    experience: 10,
    completedJobs: 489,
    pricePerRoom: 30,
    description: "Servicios de limpieza premium para hogares y eventos especiales. Certificada en manejo de productos de limpieza profesionales.",
    services: ["Hogares", "Eventos", "Mudanzas", "Post-construcción", "Cristalería"],
    verified: true,
    image: "https://ui-avatars.com/api/?name=Ana+Martinez&background=8B5CF6&color=fff&size=400"
  },
  {
    id: 4,
    name: "Roberto Sánchez",
    rating: 4.7,
    reviews: 84,
    location: "Chile",
    experience: 6,
    completedJobs: 198,
    pricePerRoom: 20,
    description: "Especialista en limpieza de hogares y departamentos. Servicio rápido y eficiente con atención personalizada.",
    services: ["Hogares", "Departamentos", "Cocina", "Baños", "Limpieza general"],
    verified: true,
    image: "https://ui-avatars.com/api/?name=Roberto+Sanchez&background=F59E0B&color=fff&size=400"
  },
  {
    id: 5,
    name: "Laura Pérez",
    rating: 4.9,
    reviews: 142,
    location: "Argentina, Tucumán",
    experience: 7,
    completedJobs: 315,
    pricePerRoom: 28,
    description: "Limpieza profunda y mantenimiento regular. Especializada en hogares con mascotas y niños. Productos hipoalergénicos.",
    services: ["Hogares", "Mascotas", "Desinfección", "Ventanas", "Alfombras"],
    verified: true,
    image: "https://ui-avatars.com/api/?name=Laura+Perez&background=EC4899&color=fff&size=400"
  },
  {
    id: 6,
    name: "Jorge Ramírez",
    rating: 4.6,
    reviews: 76,
    location: "Perú",
    experience: 4,
    completedJobs: 167,
    pricePerRoom: 24,
    description: "Limpieza comercial y residencial. Experiencia en limpieza post-remodelación y mudanzas.",
    services: ["Comercial", "Post-construcción", "Mudanzas", "Oficinas", "Pisos"],
    verified: true,
    image: "https://ui-avatars.com/api/?name=Jorge+Ramirez&background=06B6D4&color=fff&size=400"
  }
];

export default function ProvidersPage() {
  return (
    <AuthProvider>
      <Navbar />

      {/* FONDO AZUL CON DEGRADÉ */}
      <div className="min-h-screen bg-gradient-to-br from-[#0A65FF] via-[#1E73FF] to-[#3D8AFF] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Nuestros Proveedores
            </h1>
            <p className="text-xl text-white/90">
              Profesionales verificados y calificados por nuestra comunidad
            </p>
          </div>

          {/* Provider Cards Grid */}
          <div className="grid gap-8">
            {mockProviders.map((provider) => (
              <div
                key={provider.id}
                className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 overflow-hidden border border-white/20"
              >
                <div className="grid md:grid-cols-[320px_1fr] gap-6 p-6">
                  {/* Left Side - Image */}
                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                      <img
                        src={provider.image}
                        alt={provider.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-full px-4 py-2 shadow-xl flex items-center gap-1 border border-yellow-200">
                        <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-bold text-gray-900">{provider.rating}</span>
                      </div>
                      {/* Verified Badge */}
                      {provider.verified && (
                        <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white rounded-full px-4 py-2 shadow-xl flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="font-semibold">Verificado</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Side - Info */}
                  <div className="flex flex-col justify-between">
                    {/* Header */}
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">{provider.name}</h2>
                          <div className="flex items-center gap-2">
                            {/* Stars */}
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-5 h-5 ${
                                    i < Math.floor(provider.rating) ? 'text-yellow-400' : 'text-gray-300'
                                  }`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <span className="text-gray-600 font-medium">{provider.rating} ({provider.reviews} reseñas)</span>
                          </div>
                        </div>
                        <div className="text-right bg-gradient-to-br from-green-50 to-emerald-50 px-6 py-4 rounded-2xl border-2 border-[#22C55E]/20 shadow-md">
                          <div className="text-gray-600 text-sm font-medium">Desde</div>
                          <div className="text-3xl font-bold text-[#22C55E]">${provider.pricePerRoom}</div>
                          <div className="text-gray-500 text-sm">por habitación</div>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center border border-green-100 shadow-md">
                          <svg className="w-6 h-6 text-[#22C55E] mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <div className="text-sm text-gray-700 font-medium">{provider.location}</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 text-center border border-blue-100 shadow-md">
                          <svg className="w-6 h-6 text-blue-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                          </svg>
                          <div className="text-sm text-gray-700 font-medium">{provider.experience} años</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-4 text-center border border-purple-100 shadow-md">
                          <svg className="w-6 h-6 text-purple-600 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <div className="text-sm text-gray-700 font-medium">{provider.completedJobs} trabajos</div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 mb-6 leading-relaxed">{provider.description}</p>

                      {/* Services */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          <h3 className="font-bold text-gray-900">Servicios especializados</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {provider.services.map((service, index) => (
                            <span
                              key={index}
                              className={`px-4 py-2 rounded-full text-sm font-medium shadow-sm ${
                                index % 5 === 0
                                  ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200'
                                  : index % 5 === 1
                                  ? 'bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 border border-orange-200'
                                  : index % 5 === 2
                                  ? 'bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800 border border-purple-200'
                                  : index % 5 === 3
                                  ? 'bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-800 border border-cyan-200'
                                  : 'bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border border-yellow-200'
                              }`}
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <button className="flex-1 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white px-8 py-4 rounded-xl font-bold hover:from-[#16A34A] hover:to-[#15803D] transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1">
                        Cotizar Servicio
                      </button>
                      <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold hover:border-[#22C55E] hover:text-[#22C55E] transition-all shadow-md hover:shadow-lg">
                        Ver Perfil
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}