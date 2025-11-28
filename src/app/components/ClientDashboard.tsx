'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/app/contexts/AuthContext';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/app/components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { IService } from '../types/service.interface';
import { motion } from 'framer-motion';

const ClientDashboard = () => {
  const { user, token } = useAuth();
  const [services, setServices] = useState<IService[]>([]);
  const [loading, setLoading] = useState(true);

  // Estadísticas
  const totalSpent = services.reduce((sum, s) => sum + s.cost, 0);
  const completedServices = services.filter((s) => s.status === 'completed').length;
  const upcomingServices = services.filter((s) => s.status === 'scheduled').length;

  // Cargar servicios del cliente
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/services/my-services`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error al cargar servicios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [token]);

  // Función para obtener el color del badge según el estado
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="success">✅ Completado</Badge>;
      case 'scheduled':
        return <Badge variant="info">📅 Programado</Badge>;
      case 'in-progress':
        return <Badge variant="warning">🔄 En Progreso</Badge>;
      case 'cancelled':
        return <Badge variant="danger">❌ Cancelado</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 to-teal-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">¡Hola, {user?.name}! 👋</h1>
          <p className="text-gray-600">Bienvenido a tu panel de cliente</p>
        </motion.div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-emerald-500 text-white">
              <CardContent className="pt-6">
                <div className="text-sm font-semibold mb-1 opacity-90">Total Gastado</div>
                <div className="text-3xl font-bold">${totalSpent.toLocaleString()}</div>
                <div className="text-xs mt-2 opacity-75">En servicios de limpieza</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-blue-500 text-white">
              <CardContent className="pt-6">
                <div className="text-sm font-semibold mb-1 opacity-90">Servicios Completados</div>
                <div className="text-3xl font-bold">{completedServices}</div>
                <div className="text-xs mt-2 opacity-75">Trabajos finalizados</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-purple-500 text-white">
              <CardContent className="pt-6">
                <div className="text-sm font-semibold mb-1 opacity-90">Próximos Servicios</div>
                <div className="text-3xl font-bold">{upcomingServices}</div>
                <div className="text-xs mt-2 opacity-75">Programados</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Lista de Servicios */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          <Card>
            <CardHeader>
              <CardTitle>Mis Servicios de Limpieza 🧹</CardTitle>
              <CardDescription>Historial de servicios contratados</CardDescription>
            </CardHeader>
            <CardContent>
              {services.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <div className="text-6xl mb-4">🧹</div>
                  <p className="text-lg font-semibold mb-2">No tenés servicios aún</p>
                  <p className="text-sm">Contratá tu primer servicio de limpieza</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-2 border-gray-100 rounded-xl p-4 hover:border-emerald-200 hover:shadow-md transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        {/* Info del servicio */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">🏠</span>
                            <div>
                              <h4 className="font-bold text-gray-900">Servicio de Limpieza</h4>
                              <p className="text-sm text-gray-600">Proveedor: {service.provider}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm mt-3">
                            <div>
                              <span className="text-gray-500">📅 Fecha:</span>
                              <p className="font-semibold">
                                {new Date(service.date).toLocaleDateString()}
                              </p>
                            </div>
                            <div>
                              <span className="text-gray-500">📍 Dirección:</span>
                              <p className="font-semibold">
                                {service.address || 'No especificada'}
                              </p>
                            </div>
                            <div>
                              <span className="text-gray-500">⭐ Calificación:</span>
                              <p className="font-semibold">
                                {service.rating ? `${service.rating}/5` : 'Sin calificar'}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Precio y Estado */}
                        <div className="flex md:flex-col items-center md:items-end gap-3">
                          {getStatusBadge(service.status)}
                          <div className="text-right">
                            <div className="text-2xl font-bold text-emerald-600">
                              ${service.cost.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Reseña si existe */}
                      {service.review && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-sm text-gray-600 italic">
                            &quot;{service.review}&quot;
                          </p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Botón de acción */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-center"
        >
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
            ➕ Contratar Nuevo Servicio
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientDashboard;
