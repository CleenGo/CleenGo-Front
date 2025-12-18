'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/contexts/AuthContext';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Loader2,
} from 'lucide-react';

interface UserProfile {
  name: string;
  surname: string;
  email: string;
  phone?: string;
  birthDate?: string;
  profileImgUrl?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  fullAddress?: string;
}

export default function ClientProfile() {
  const router = useRouter();
  const { user, token } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const backendUrl = process.env.VITE_BACKEND_URL;

  useEffect(() => {
    if (!user || !token) {
      router.push('/login');
      return;
    }

    fetchProfile();
  }, [user, token, router]);

  const fetchProfile = async () => {
    if (!user || !token) return;

    setLoading(true);
    try {
      const response = await fetch(`${backendUrl}/user/profile/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      }
    } catch (error) {
      console.error('Error al cargar el perfil:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50 flex items-center justify-center pt-24">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Cargando perfil...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50 flex items-center justify-center pt-24">
        <p className="text-gray-600">No se pudo cargar el perfil</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50 pt-24 pb-12 px-4">
      {/* Background blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header con foto de perfil */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white/50 overflow-hidden mb-8"
        >
          <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500" />

          <div className="p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 rounded-full blur opacity-40 group-hover:opacity-75 transition-opacity" />
              {profile.profileImgUrl ? (
                <img
                  src={profile.profileImgUrl}
                  alt="Foto de perfil"
                  className="relative w-28 h-28 rounded-full object-cover border-4 border-white"
                />
              ) : (
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-500 flex items-center justify-center border-4 border-white">
                  <span className="text-3xl font-extrabold text-white">
                    {profile.name?.charAt(0)?.toUpperCase() ?? 'U'}
                  </span>
                </div>
              )}
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {profile.name} {profile.surname}
              </h1>
              <p className="text-gray-600 font-medium">{profile.email}</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push('/client/profile/edit')}
              className="px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
            >
              <Edit className="w-5 h-5" />
              Editar Perfil
            </motion.button>
          </div>
        </motion.div>

        {/* Información del perfil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative z-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white/50 p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
              <User className="w-6 h-6 text-white" />
            </div>
            Información Personal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-600 mb-1">Email</p>
                <p className="text-gray-900 font-medium">{profile.email}</p>
              </div>
            </div>

            {/* Teléfono */}
            {profile.phone && (
              <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100">
                <div className="p-3 bg-emerald-100 rounded-xl">
                  <Phone className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">Teléfono</p>
                  <p className="text-gray-900 font-medium">{profile.phone}</p>
                </div>
              </div>
            )}

            {/* Fecha de nacimiento */}
            {profile.birthDate && (
              <div className="flex items-start gap-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Calendar className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-600 mb-1">
                    Fecha de Nacimiento
                  </p>
                  <p className="text-gray-900 font-medium">{profile.birthDate}</p>
                </div>
              </div>
            )}

            {/* Dirección completa */}
            {(profile.address || profile.city) && (
              <div className="md:col-span-2 flex items-start gap-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100">
                <div className="p-3 bg-cyan-100 rounded-xl">
                  <MapPin className="w-5 h-5 text-cyan-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-600 mb-1">Dirección</p>
                  <p className="text-gray-900 font-medium">
                    {profile.address && <span>{profile.address}</span>}
                    {profile.city && (
                      <span>
                        {profile.address && ', '}
                        {profile.city}
                      </span>
                    )}
                    {profile.state && <span>, {profile.state}</span>}
                    {profile.postalCode && <span> C.P. {profile.postalCode}</span>}
                    {profile.country && <span>, {profile.country}</span>}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Si no hay información adicional */}
          {!profile.phone && !profile.birthDate && !profile.address && !profile.city && (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">
                Completa tu perfil para una mejor experiencia
              </p>
              <button
                onClick={() => router.push('/client/profile/edit')}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Completar perfil
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
