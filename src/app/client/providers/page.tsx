"use client";

import { useState } from "react";
import { AuthProvider } from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/navigation";
import { useAuth } from "../../contexts/AuthContext";
import Swal from "sweetalert2";

// Tipos de datos
interface Provider {
  id: number;
  name: string;
  rating: number;
  photo: string;
  services: string[];
  workDays: string[];
  workHours: string[];
  verified: boolean;
}

// Opciones para los selectores
const DAYS_OPTIONS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const HOURS_OPTIONS = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];
const SERVICES_OPTIONS = ["Barrer", "Trapear", "Sacudir muebles", "Tender camas", "Lavandería"];

export default function ProvidersPage() {
  const router = useRouter();
  const { user } = useAuth();

  // Estados para los filtros
  const [filters, setFilters] = useState({
    date: "",
    days: [] as string[],
    hours: [] as string[],
    services: [] as string[],
    rating: 0
  });

  // Estados para los resultados
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  // Estados para errores de validación
  const [errors, setErrors] = useState({
    days: false,
    hours: false,
    services: false
  });

  // Función para buscar proveedores
  const handleSearch = async () => {
    // Limpiar errores previos
    setErrors({ days: false, hours: false, services: false });

    // Validar campos requeridos
    const newErrors = {
      days: filters.days.length === 0,
      hours: filters.hours.length === 0,
      services: filters.services.length === 0
    };

    setErrors(newErrors);

    // Si hay errores, mostrar alerta y no continuar
    if (newErrors.days || newErrors.hours || newErrors.services) {
      Swal.fire({
        icon: "error",
        title: "Campos requeridos",
        html: `
          <div style="text-align: left;">
            <p style="margin-bottom: 10px;">Por favor completa los siguientes campos:</p>
            <ul style="list-style: none; padding-left: 0;">
              ${newErrors.days ? '<li style="color: #dc2626; margin-bottom: 5px;">• Selecciona al menos un día</li>' : ''}
              ${newErrors.hours ? '<li style="color: #dc2626; margin-bottom: 5px;">• Selecciona al menos un horario</li>' : ''}
              ${newErrors.services ? '<li style="color: #dc2626; margin-bottom: 5px;">• Selecciona al menos un servicio</li>' : ''}
            </ul>
          </div>
        `,
        confirmButtonColor: "#22C55E",
      });
      return;
    }

    setLoading(true);
    setSearched(true);

    try {
      // Construir los query params
      const params = new URLSearchParams();

      if (filters.date) params.append("date", filters.date);
      filters.days.forEach(day => params.append("days", day));
      filters.hours.forEach(hour => params.append("hours", hour));
      filters.services.forEach(service => params.append("services", service));
      if (filters.rating > 0) params.append("rating", filters.rating.toString());

      // URL del backend
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";
      const response = await fetch(`${backendUrl}/provider/filters?${params.toString()}`);

      if (!response.ok) {
        throw new Error("Error al buscar proveedores");
      }

      const data = await response.json();
      setProviders(data);

      // Mostrar alerta de éxito
      if (data.length > 0) {
        Swal.fire({
          icon: "success",
          title: "¡Proveedores encontrados!",
          text: `Se encontraron ${data.length} proveedor${data.length !== 1 ? 'es' : ''} disponible${data.length !== 1 ? 's' : ''}`,
          timer: 5000,
          showConfirmButton: false,
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un error al buscar proveedores. Intenta nuevamente.",
        confirmButtonColor: "#22C55E",
      });
    } finally {
      setLoading(false);
    }
  };

  // Función para manejar checkbox de días
  const toggleDay = (day: string) => {
    setFilters(prev => ({
      ...prev,
      days: prev.days.includes(day)
        ? prev.days.filter(d => d !== day)
        : [...prev.days, day]
    }));
    if (errors.days) {
      setErrors(prev => ({ ...prev, days: false }));
    }
  };

  // Función para manejar checkbox de horarios
  const toggleHour = (hour: string) => {
    setFilters(prev => ({
      ...prev,
      hours: prev.hours.includes(hour)
        ? prev.hours.filter(h => h !== hour)
        : [...prev.hours, hour]
    }));
    if (errors.hours) {
      setErrors(prev => ({ ...prev, hours: false }));
    }
  };

  // Función para manejar checkbox de servicios
  const toggleService = (service: string) => {
    setFilters(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
    if (errors.services) {
      setErrors(prev => ({ ...prev, services: false }));
    }
  };

  // Función para limpiar filtros
  const clearFilters = () => {
    setFilters({
      date: "",
      days: [],
      hours: [],
      services: [],
      rating: 0
    });
    setProviders([]);
    setSearched(false);
    setErrors({ days: false, hours: false, services: false });

    Swal.fire({
      icon: "info",
      title: "Filtros limpios",
      text: "Todos los filtros han sido reseteados",
      showConfirmButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Aceptar",
      confirmButtonColor: "#22C55E",
    });
  };

  // Función para agendar cita
  const handleBookAppointment = (providerId: number, providerName: string) => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Inicia sesión",
        text: "Debes iniciar sesión para agendar una cita",
        showCancelButton: true,
        confirmButtonText: "Iniciar sesión",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#22C55E",
        cancelButtonColor: "#6B7280",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push("/login");
        }
      });
    } else {
      Swal.fire({
        icon: "question",
        title: `¿Agendar cita con ${providerName}?`,
        text: "Serás redirigido para completar tu reserva",
        showCancelButton: true,
        confirmButtonText: "Continuar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#22C55E",
        cancelButtonColor: "#6B7280",
      }).then((result) => {
        if (result.isConfirmed) {
          router.push(`/client/appointments/create?providerId=${providerId}`);
        }
      });
    }
  };

  return (
    <AuthProvider>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-[#0A65FF] via-[#1E73FF] to-[#3D8AFF] pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-3">
              Buscar Proveedores
            </h1>
            <p className="text-lg text-white/90">
              Filtra por disponibilidad y encuentra el proveedor perfecto
            </p>
          </div>

          {/* NUEVO: "Configura tus filtros" centrado - Solo se muestra si no se ha buscado */}
          {!searched && (
            <div className="text-center mb-8">
              <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <svg className="w-20 h-20 text-white/50 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">Configura tus filtros</h3>
                <p className="text-white/80">
                  Selecciona días, horarios y servicios para encontrar proveedores disponibles
                </p>
              </div>
            </div>
          )}

          {/* NUEVO: Formulario centrado - Solo se muestra si no se ha buscado */}
          {!searched && (
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-xl w-full max-w-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Filtros</h3>

                {/* Fecha - Año actual y siguiente */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    📅 Fecha (opcional)
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#22C55E] focus:border-transparent"
                    value={filters.date}
                    min={new Date().toISOString().split('T')[0]}
                    max={`${new Date().getFullYear() + 1}-12-31`}
                    onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Disponible desde hoy hasta diciembre {new Date().getFullYear() + 1}
                  </p>
                </div>

                {/* Días - REQUERIDO con validación en rojo */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    📆 Días <span className="text-red-500">*</span>
                  </label>
                  <div className={`space-y-2 max-h-48 overflow-y-auto border rounded-lg p-3 ${
                    errors.days ? 'border-red-500 bg-red-50' : 'border-gray-200'
                  }`}>
                    {DAYS_OPTIONS.map((day) => (
                      <label key={day} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-[#22C55E] rounded focus:ring-[#22C55E]"
                          checked={filters.days.includes(day)}
                          onChange={() => toggleDay(day)}
                        />
                        <span className="text-sm text-gray-700">{day}</span>
                      </label>
                    ))}
                  </div>
                  <p className={`text-xs mt-1 ${
                    errors.days ? 'text-red-600 font-semibold' : 'text-gray-500'
                  }`}>
                    {errors.days
                      ? '⚠️ Debes seleccionar al menos un día'
                      : `${filters.days.length} día${filters.days.length !== 1 ? 's' : ''} seleccionado${filters.days.length !== 1 ? 's' : ''}`
                    }
                  </p>
                </div>

                {/* Horarios - REQUERIDO con validación en rojo */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    🕐 Horarios <span className="text-red-500">*</span>
                  </label>
                  <div className={`space-y-2 max-h-48 overflow-y-auto border rounded-lg p-3 ${
                    errors.hours ? 'border-red-500 bg-red-50' : 'border-gray-200'
                  }`}>
                    {HOURS_OPTIONS.map((hour) => (
                      <label key={hour} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-[#22C55E] rounded focus:ring-[#22C55E]"
                          checked={filters.hours.includes(hour)}
                          onChange={() => toggleHour(hour)}
                        />
                        <span className="text-sm text-gray-700">{hour}</span>
                      </label>
                    ))}
                  </div>
                  <p className={`text-xs mt-1 ${
                    errors.hours ? 'text-red-600 font-semibold' : 'text-gray-500'
                  }`}>
                    {errors.hours
                      ? '⚠️ Debes seleccionar al menos un horario'
                      : `${filters.hours.length} horario${filters.hours.length !== 1 ? 's' : ''} seleccionado${filters.hours.length !== 1 ? 's' : ''}`
                    }
                  </p>
                </div>

                {/* Servicios - REQUERIDO con validación en rojo */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    🧹 Servicios <span className="text-red-500">*</span>
                  </label>
                  <div className={`space-y-2 border rounded-lg p-3 ${
                    errors.services ? 'border-red-500 bg-red-50' : 'border-gray-200'
                  }`}>
                    {SERVICES_OPTIONS.map((service) => (
                      <label key={service} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-[#22C55E] rounded focus:ring-[#22C55E]"
                          checked={filters.services.includes(service)}
                          onChange={() => toggleService(service)}
                        />
                        <span className="text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                  <p className={`text-xs mt-1 ${
                    errors.services ? 'text-red-600 font-semibold' : 'text-gray-500'
                  }`}>
                    {errors.services
                      ? '⚠️ Debes seleccionar al menos un servicio'
                      : `${filters.services.length} servicio${filters.services.length !== 1 ? 's' : ''} seleccionado${filters.services.length !== 1 ? 's' : ''}`
                    }
                  </p>
                </div>

                {/* Rating */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ⭐ Rating mínimo: {filters.rating}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    className="w-full accent-[#22C55E]"
                    value={filters.rating}
                    onChange={(e) => setFilters({ ...filters, rating: parseInt(e.target.value) })}
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0★</span>
                    <span>5★</span>
                  </div>
                </div>

                {/* Botones */}
                <div className="space-y-3">
                  <button
                    onClick={handleSearch}
                    disabled={loading}
                    className="w-full bg-[#22C55E] text-white py-3 rounded-lg font-semibold hover:bg-[#16A34A] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {loading ? "Buscando..." : "Buscar Proveedores"}
                  </button>

                  <button
                    onClick={clearFilters}
                    className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Limpiar filtros
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* RESULTADOS - Solo se muestran después de buscar */}
          {searched && (
            <div>
              {/* Estado: Loading */}
              {loading && (
                <div className="bg-white rounded-2xl p-12 text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#22C55E] mx-auto mb-4"></div>
                  <p className="text-gray-600">Buscando proveedores...</p>
                </div>
              )}

              {/* Estado: Sin resultados */}
              {!loading && providers.length === 0 && (
                <div className="bg-white rounded-2xl p-12 text-center shadow-xl">
                  <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">No encontramos proveedores</h3>
                  <p className="text-gray-500 mb-4">Intenta cambiar los filtros de búsqueda</p>
                  <button
                    onClick={clearFilters}
                    className="bg-[#22C55E] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#16A34A] transition-colors"
                  >
                    Limpiar filtros
                  </button>
                </div>
              )}

              {/* Estado: Con resultados */}
              {!loading && providers.length > 0 && (
                <>
                  {/* Contador */}
                  <div className="bg-white rounded-lg px-6 py-3 mb-6 shadow-md">
                    <p className="text-gray-700 font-medium">
                      Encontramos <span className="text-[#22C55E] font-bold">{providers.length}</span> proveedor{providers.length !== 1 ? 'es' : ''}
                    </p>
                  </div>

                  {/* Grid de proveedores */}
                  <div className="grid gap-5">
                    {providers.map((provider) => (
                      <div
                        key={provider.id}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                      >
                        <div className="grid md:grid-cols-[240px_1fr] gap-0">
                          {/* Imagen */}
                          <div className="relative bg-gradient-to-br from-gray-100 to-gray-200">
                            <img
                              src={provider.photo}
                              alt={provider.name}
                              className="w-full h-full object-cover"
                            />

                            {/* Rating Badge */}
                            <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 shadow-lg flex items-center gap-1">
                              <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                              <span className="font-bold text-sm text-gray-900">{provider.rating}</span>
                            </div>

                            {/* Verified Badge */}
                            {provider.verified && (
                              <div className="absolute bottom-3 left-3 bg-[#22C55E] text-white rounded-lg px-3 py-1 shadow-lg flex items-center gap-1.5">
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="font-semibold text-xs">Verificado</span>
                              </div>
                            )}
                          </div>

                          {/* Info */}
                          <div className="p-5">
                            <h2 className="text-2xl font-bold text-gray-900 mb-3">{provider.name}</h2>

                            {/* Rating con estrellas */}
                            <div className="flex items-center gap-1 mb-4">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  className={`w-5 h-5 ${i < provider.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>

                            {/* Días */}
                            <div className="mb-4 pb-4 border-b border-gray-200">
                              <h3 className="text-xs font-semibold text-gray-700 mb-2 uppercase">Disponible</h3>
                              <div className="flex flex-wrap gap-1.5">
                                {provider.workDays.map((day) => (
                                  <span key={day} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                                    {day}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Servicios */}
                            <div className="mb-4">
                              <h3 className="text-xs font-semibold text-gray-700 mb-2 uppercase">Servicios</h3>
                              <div className="flex flex-wrap gap-1.5">
                                {provider.services.map((service) => (
                                  <span key={service} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
                                    {service}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Botón */}
                            <button
                              onClick={() => handleBookAppointment(provider.id, provider.name)}
                              className="w-full bg-[#22C55E] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#16A34A] transition-colors"
                            >
                              Agendar Cita
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </AuthProvider>
  );
}