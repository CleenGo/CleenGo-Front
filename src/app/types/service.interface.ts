// Estados posibles de un servicio
export type ServiceStatus = 'completed' | 'scheduled' | 'in-progress' | 'cancelled';

// Interface para un servicio (desde perspectiva del cliente)
export interface IService {
  id: string;
  provider: string; // Nombre del proveedor
  providerId: string; // ID del proveedor
  date: string; // Fecha del servicio
  cost: number; // Costo total
  status: ServiceStatus; // Estado del servicio
  rating?: number; // Calificación (1-5)
  review?: string; // Reseña del cliente
  address?: string; // Dirección donde se realizó
  description?: string; // Descripción del servicio
  createdAt?: string; // Fecha de creación
  completedAt?: string; // Fecha de finalización
}

// Interface para un trabajo (desde perspectiva del proveedor)
export interface IJob {
  id: string;
  client: string; // Nombre del cliente
  clientId: string; // ID del cliente
  date: string; // Fecha del trabajo
  earnings: number; // Ganancia total
  platformFee: number; // Comisión de la plataforma
  netEarnings: number; // Ganancia neta
  status: ServiceStatus; // Estado del trabajo
  address?: string; // Dirección del trabajo
  description?: string; // Descripción del trabajo
  rating?: number; // Calificación recibida
  review?: string; // Reseña recibida
  createdAt?: string; // Fecha de creación
  completedAt?: string; // Fecha de finalización
}
