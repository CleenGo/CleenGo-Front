'use client';

import Image from 'next/image';
import { useAuth } from '@/app/contexts/AuthContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { User, Mail, Phone, CheckCircle, Award, DollarSign, Clock, Calendar } from 'lucide-react';

interface Appointment {
  id: string;
  status: string;
  cost: number;
  date?: string;
  [key: string]: unknown;
}

interface UserProfile {
  id: string;
  name: string;
  surname: string;
  email: string;
  profileImgUrl: string;
  phone?: string;
  [key: string]: unknown;
}

export default function ClientDashboard() {
  const { user, token } = useAuth();
  const router = useRouter();

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [stats, setStats] = useState({
    totalSpent: 0,
    completedServices: 0,
    upcomingServices: 0,
  });

  useEffect(() => {
    if (!user || !token) return;

    const fetchProfile = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/client/profile/${user.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await res.json();
        setProfile(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [user, token]);

  useEffect(() => {
    if (!user || !token) return;

    const fetchAppointments = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/appointments/client/${user.id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await res.json();

        const completed = data.filter((a: Appointment) => a.status === 'completed');
        const upcoming = data.filter((a: Appointment) => a.status === 'scheduled');

        const total = completed.reduce((acc: number, curr: Appointment) => acc + curr.cost, 0);

        setStats({
          totalSpent: total,
          completedServices: completed.length,
          upcomingServices: upcoming.length,
        });

        setAppointments(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAppointments();
  }, [user, token]);

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-slate-100 to-emerald-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 mb-10 border border-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            <div className="flex justify-center">
              <div className="relative">
                {profile?.profileImgUrl ? (
                  <Image
                    src={String(profile.profileImgUrl)}
                    alt="Foto de perfil"
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-blue-500"
                  />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-linear-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-lg border-4 border-blue-500">
                    <User className="w-14 h-14 text-white" />
                  </div>
                )}
                <div className="absolute bottom-0 right-0 bg-emerald-500 text-white rounded-full p-1 shadow-lg">
                  <CheckCircle className="w-5 h-5" />
                </div>
              </div>
            </div>

            <div className="text-center md:text-left space-y-3">
              <h1 className="text-3xl font-bold text-gray-900">
                {profile?.name} {profile?.surname}
              </h1>

              <div className="text-gray-600 space-y-1">
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-4 h-4" /> {user?.email}
                </p>

                {profile?.phone && (
                  <p className="flex items-center gap-2 justify-center md:justify-start">
                    <Phone className="w-4 h-4" /> {profile.phone}
                  </p>
                )}
              </div>

              <button
                onClick={() => router.push('/client/profile/edit')}
                className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition-all"
              >
                Editar Perfil
              </button>
            </div>

            <div className="flex justify-center">
              <div className="bg-linear-to-br from-blue-500 to-emerald-600 text-white rounded-2xl p-8 shadow-xl text-center w-full md:w-auto">
                <Award className="w-10 h-10 mx-auto mb-3" />
                <p className="text-4xl font-bold">{stats.completedServices}</p>
                <p className="text-sm opacity-90">Servicios Completados</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="bg-white/90 backdrop-blur-md border border-white shadow-xl rounded-2xl p-6">
            <div className="flex justify-between mb-3">
              <div className="bg-blue-100 p-3 rounded-xl">
                <DollarSign className="text-blue-600 w-6 h-6" />
              </div>
            </div>
            <p className="text-gray-600 text-sm">Total Gastado</p>
            <p className="text-3xl font-bold text-gray-900">${stats.totalSpent || 0}</p>
          </div>

          <div className="bg-white/90 backdrop-blur-md border border-white shadow-xl rounded-2xl p-6">
            <div className="bg-emerald-100 p-3 rounded-xl mb-3">
              <CheckCircle className="text-emerald-600 w-6 h-6" />
            </div>
            <p className="text-gray-600 text-sm">Servicios Completados</p>
            <p className="text-3xl font-bold text-gray-900">{stats.completedServices}</p>
          </div>

          <div className="bg-white/90 backdrop-blur-md border border-white shadow-xl rounded-2xl p-6">
            <div className="bg-amber-100 p-3 rounded-xl mb-3">
              <Clock className="text-amber-600 w-6 h-6" />
            </div>
            <p className="text-gray-600 text-sm">Próximos Servicios</p>
            <p className="text-3xl font-bold text-gray-900">{stats.upcomingServices}</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-md border border-white shadow-2xl rounded-3xl p-10"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Calendar className="w-7 h-7 text-blue-600" /> Mis Servicios
            </h2>

            {appointments.length > 0 && (
              <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                {appointments.length} total
              </span>
            )}
          </div>

          {appointments.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No tienes servicios aún</h3>
              <button
                onClick={() => router.push('/client/providers')}
                className="mt-4 px-6 py-3 bg-linear-to-r from-blue-600 to-emerald-600 text-white rounded-xl shadow-md hover:shadow-xl transition-all"
              >
                Explorar Proveedores
              </button>
            </div>
          )}

          <div className="space-y-6">
            {appointments.map((appointment) => (
              <motion.div
                key={appointment.id}
                whileHover={{ scale: 1.01 }}
                className="bg-white/80 border border-gray-200 shadow-sm hover:shadow-lg transition-all rounded-2xl p-6"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-bold self-start ${
                      appointment.status === 'completed'
                        ? 'bg-emerald-100 text-emerald-700'
                        : appointment.status === 'scheduled'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {appointment.status === 'completed'
                      ? 'Completado'
                      : appointment.status === 'scheduled'
                      ? 'Programado'
                      : 'Cancelado'}
                  </span>

                  <p className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    {appointment.date
                      ? new Date(String(appointment.date)).toLocaleString('es-MX', {
                          dateStyle: 'medium',
                          timeStyle: 'short',
                        })
                      : 'Sin fecha'}
                  </p>

                  <p className="text-2xl font-bold text-gray-900">${appointment.cost}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
