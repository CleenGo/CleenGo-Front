'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/contexts/AuthContext';
import ClientDashboard from './ClientDashboard';
import ProviderDashboard from './ProviderDashboard';

const Dashboard = () => {
  const { user, token } = useAuth();
  const router = useRouter();
  const [userType, setUserType] = useState<'cliente' | 'proveedor' | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar autenticación
    if (!user || !token) {
      router.push('/login');
      return;
    }

    // 🔑 Leer userType del localStorage (sin tocar AuthContext)
    const storedUserType = localStorage.getItem('userType') as 'cliente' | 'proveedor';

    if (!storedUserType) {
      // Si no hay userType guardado, redirigir al login
      console.warn('No se encontró userType, redirigiendo al login');
      router.push('/login');
      return;
    }

    setUserType(storedUserType);
    setIsLoading(false);
  }, [user, token, router]);

  // Mostrar loading mientras se verifica
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  // Renderizar el dashboard según el tipo de usuario
  if (userType === 'cliente') {
    return <ClientDashboard />;
  }

  if (userType === 'proveedor') {
    return <ProviderDashboard />;
  }

  // Fallback (no debería llegar aquí)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <p className="text-red-600">Error: Tipo de usuario no válido</p>
        <button
          onClick={() => router.push('/login')}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Volver al login
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
