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
import { Badge } from '@/app/components/ui/Badge';
import { IJob } from '../types/service.interface';
import { motion } from 'framer-motion';

const ProviderDashboard = () => {
  const { user, token } = useAuth();
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState(true);

  // Estadísticas
  const totalEarnings = jobs.reduce((sum, j) => sum + j.netEarnings, 0);
  const completedJobs = jobs.filter((j) => j.status === 'completed').length;
  const upcomingJobs = jobs.filter((j) => j.status === 'scheduled').length;
  const averageRating =
    jobs.filter((j) => j.rating).reduce((sum, j) => sum + (j.rating || 0), 0) /
      jobs.filter((j) => j.rating).length || 0;

  // Cargar trabajos del proveedor
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs/my-jobs`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error al cargar trabajos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
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
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">¡Hola, {user?.name}! 💼</h1>
          <p className="text-gray-600">Bienvenido a tu panel de proveedor</p>
        </motion.div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="bg-purple-500 text-white">
              <CardContent className="pt-6">
                <div className="text-sm font-semibold mb-1 opacity-90">Ganancias Totales</div>
                <div className="text-3xl font-bold">${totalEarnings.toLocaleString()}</div>
                <div className="text-xs mt-2 opacity-75">Netas (sin comisión)</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-green-500 text-white">
              <CardContent className="pt-6">
                <div className="text-sm font-semibold mb-1 opacity-90">Trabajos Completados</div>
                <div className="text-3xl font-bold">{completedJobs}</div>
                <div className="text-xs mt-2 opacity-75">Finalizados exitosamente</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-blue-500 text-white">
              <CardContent className="pt-6">
                <div className="text-sm font-semibold mb-1 opacity-90">Próximos Trabajos</div>
                <div className="text-3xl font-bold">{upcomingJobs}</div>
                <div className="text-xs mt-2 opacity-75">Programados</div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-yellow-500 text-white">
              <CardContent className="pt-6">
                <div className="text-sm font-semibold mb-1 opacity-90">Calificación</div>
                <div className="text-3xl font-bold">⭐ {averageRating.toFixed(1)}</div>
                <div className="text-xs mt-2 opacity-75">Promedio de clientes</div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Lista de Trabajos */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          <Card>
            <CardHeader>
              <CardTitle>Mis Trabajos 🧹</CardTitle>
              <CardDescription>Historial y trabajos programados</CardDescription>
            </CardHeader>
            <CardContent>
              {jobs.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  <div className="text-6xl mb-4">💼</div>
                  <p className="text-lg font-semibold mb-2">No tenés trabajos asignados aún</p>
                  <p className="text-sm">Los clientes podrán contratarte pronto</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {jobs.map((job, index) => (
                    <motion.div
                      key={job.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-2 border-gray-100 rounded-xl p-4 hover:border-purple-200 hover:shadow-md transition-all"
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        {/* Info del trabajo */}
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">🏢</span>
                            <div>
                              <h4 className="font-bold text-gray-900">Trabajo de Limpieza</h4>
                              <p className="text-sm text-gray-600">Cliente: {job.client}</p>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm mt-3">
                            <div>
                              <span className="text-gray-500">📅 Fecha:</span>
                              <p className="font-semibold">
                                {new Date(job.date).toLocaleDateString()}
                              </p>
                            </div>
                            <div>
                              <span className="text-gray-500">💰 Pago:</span>
                              <p className="font-semibold">${job.earnings.toLocaleString()}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">📍 Dirección:</span>
                              <p className="font-semibold">{job.address || 'No especificada'}</p>
                            </div>
                            <div>
                              <span className="text-gray-500">⭐ Calificación:</span>
                              <p className="font-semibold">
                                {job.rating ? `${job.rating}/5` : 'Sin calificar'}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Ganancias y Estado */}
                        <div className="flex md:flex-col items-center md:items-end gap-3">
                          {getStatusBadge(job.status)}
                          <div className="text-right">
                            <div className="text-xs text-gray-500 mb-1">Ganancia bruta</div>
                            <div className="text-lg text-gray-600 line-through">
                              ${job.earnings.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500 mb-1">Comisión plataforma</div>
                            <div className="text-sm text-red-600">
                              -${job.platformFee.toLocaleString()}
                            </div>
                            <div className="text-xs text-gray-500 mb-1 mt-2">Ganancia neta</div>
                            <div className="text-2xl font-bold text-purple-600">
                              ${job.netEarnings.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Reseña del cliente */}
                      {job.review && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-sm font-semibold text-gray-700 mb-1">
                            📝 Reseña del cliente:
                          </p>
                          <p className="text-sm text-gray-600 italic">&quot;{job.review}&quot;</p>
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
          transition={{ delay: 0.7 }}
          className="mt-6 text-center"
        >
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
            📋 Ver Trabajos Disponibles
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
