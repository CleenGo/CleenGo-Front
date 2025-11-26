// import { useParams, Navigate, useNavigate } from 'react-router-dom';
// import { useAuth } from '@/context/AuthContext';
// import { useState, useEffect, useCallback } from 'react';
// import { HiCheckCircle, HiClock, HiXCircle } from 'react-icons/hi';

// function ProfilePage() {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const { token, user, logout } = useAuth();

//   const [isChecking, setIsChecking] = useState(true);
//   const [activeTab, setActiveTab] = useState('profile');
//   const [orders, setOrders] = useState([]);
//   const [loadingOrders, setLoadingOrders] = useState(false);
//   const [ordersError, setOrdersError] = useState(null);

//   const [editedData, setEditedData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//   });

//   // Validar slug: solo 'client' o 'provider'
//   if (slug !== 'client' && slug !== 'provider') {
//     return <Navigate to="/dashboard" replace />;
//   }

//   // Validar autenticación
//   useEffect(() => {
//     if (!token || !user) {
//       navigate('/login');
//       return;
//     }

//     // Validar que el usuario tenga el rol correcto según el slug
//     if (slug === 'client' && user.role !== 'client') {
//       navigate('/dashboard/provider');
//       return;
//     }

//     if (slug === 'provider' && user.role !== 'provider') {
//       navigate('/dashboard/client');
//       return;
//     }

//     setEditedData({
//       name: user.name || '',
//       email: user.email || '',
//       phone: user.phone || '',
//       address: user.address || '',
//     });

//     setIsChecking(false);
//   }, [token, user, navigate, slug]);

//   const fetchOrders = useCallback(async () => {
//     setLoadingOrders(true);
//     setOrdersError(null);

//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/users/orders`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           ...(token && { Authorization: token }),
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Error al cargar las órdenes');
//       }

//       const data = await response.json();
//       setOrders(data);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//       setOrdersError('No se pudieron cargar tus pedidos. Intenta nuevamente.');
//     } finally {
//       setLoadingOrders(false);
//     }
//   }, [token]);

//   useEffect(() => {
//     if (activeTab === 'orders' && token) {
//       fetchOrders();
//     }
//   }, [activeTab, token, fetchOrders]);

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   const getStatusColor = (status: string) => {
//     switch (status.toLowerCase()) {
//       case 'approved':
//       case 'completado':
//         return 'text-green-600 bg-green-50';
//       case 'pending':
//       case 'pendiente':
//         return 'text-yellow-600 bg-yellow-50';
//       case 'cancelled':
//       case 'cancelado':
//         return 'text-red-600 bg-red-50';
//       default:
//         return 'text-gray-600 bg-gray-50';
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status.toLowerCase()) {
//       case 'approved':
//       case 'completado':
//         return <HiCheckCircle className="text-xl" />;
//       case 'pending':
//       case 'pendiente':
//         return <HiClock className="text-xl" />;
//       case 'cancelled':
//       case 'cancelado':
//         return <HiXCircle className="text-xl" />;
//       default:
//         return <HiClock className="text-xl" />;
//     }
//   };

//   const getStatusText = (status: string) => {
//     switch (status.toLowerCase()) {
//       case 'approved':
//         return 'Aprobado';
//       case 'pending':
//         return 'Pendiente';
//       case 'cancelled':
//         return 'Cancelado';
//       default:
//         return status;
//     }
//   };

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('es-AR', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     });
//   };

//   const calculateOrderTotal = (products: IOrderProduct[]) => {
//     return products.reduce((total, product) => total + product.price, 0);
//   };

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('es-AR', {
//       style: 'currency',
//       currency: 'ARS',
//       minimumFractionDigits: 0,
//     }).format(price);
//   };

//   if (isChecking) {
//     return <div>Cargando...</div>;
//   }

//   // Aquí va tu JSX del perfil
//   return (
//     <div className="container mx-auto p-6">
//       <h1>{slug === 'client' ? 'Perfil de Cliente' : 'Perfil de Proveedor'}</h1>

//       {/* Tu componente de perfil aquí */}
//       {/* Puedes usar {slug} para mostrar/ocultar secciones específicas */}

//       {slug === 'client' && (
//         <div>
//           {/* Sección exclusiva de clientes, como órdenes */}
//         </div>
//       )}

//       {slug === 'provider' && (
//         <div>
//           {/* Sección exclusiva de proveedores, como productos */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProfilePage;import { useParams, Navigate, useNavigate } from 'react-router-dom';
// import { useAuth } from '@/context/AuthContext';
// import { useState, useEffect, useCallback } from 'react';
// import { HiCheckCircle, HiClock, HiXCircle } from 'react-icons/hi';

// function ProfilePage() {
//   const { slug } = useParams();
//   const navigate = useNavigate();
//   const { token, user, logout } = useAuth();

//   const [isChecking, setIsChecking] = useState(true);
//   const [activeTab, setActiveTab] = useState('profile');
//   const [orders, setOrders] = useState([]);
//   const [loadingOrders, setLoadingOrders] = useState(false);
//   const [ordersError, setOrdersError] = useState(null);

//   const [editedData, setEditedData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     address: '',
//   });

//   // Validar slug: solo 'client' o 'provider'
//   if (slug !== 'client' && slug !== 'provider') {
//     return <Navigate to="/dashboard" replace />;
//   }

//   // Validar autenticación
//   useEffect(() => {
//     if (!token || !user) {
//       navigate('/login');
//       return;
//     }

//     // Validar que el usuario tenga el rol correcto según el slug
//     if (slug === 'client' && user.role !== 'client') {
//       navigate('/dashboard/provider');
//       return;
//     }

//     if (slug === 'provider' && user.role !== 'provider') {
//       navigate('/dashboard/client');
//       return;
//     }

//     setEditedData({
//       name: user.name || '',
//       email: user.email || '',
//       phone: user.phone || '',
//       address: user.address || '',
//     });

//     setIsChecking(false);
//   }, [token, user, navigate, slug]);

//   const fetchOrders = useCallback(async () => {
//     setLoadingOrders(true);
//     setOrdersError(null);

//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_URL}/users/orders`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           ...(token && { Authorization: token }),
//         },
//       });

//       if (!response.ok) {
//         throw new Error('Error al cargar las órdenes');
//       }

//       const data = await response.json();
//       setOrders(data);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//       setOrdersError('No se pudieron cargar tus pedidos. Intenta nuevamente.');
//     } finally {
//       setLoadingOrders(false);
//     }
//   }, [token]);

//   useEffect(() => {
//     if (activeTab === 'orders' && token) {
//       fetchOrders();
//     }
//   }, [activeTab, token, fetchOrders]);

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   const getStatusColor = (status: string) => {
//     switch (status.toLowerCase()) {
//       case 'approved':
//       case 'completado':
//         return 'text-green-600 bg-green-50';
//       case 'pending':
//       case 'pendiente':
//         return 'text-yellow-600 bg-yellow-50';
//       case 'cancelled':
//       case 'cancelado':
//         return 'text-red-600 bg-red-50';
//       default:
//         return 'text-gray-600 bg-gray-50';
//     }
//   };

//   const getStatusIcon = (status: string) => {
//     switch (status.toLowerCase()) {
//       case 'approved':
//       case 'completado':
//         return <HiCheckCircle className="text-xl" />;
//       case 'pending':
//       case 'pendiente':
//         return <HiClock className="text-xl" />;
//       case 'cancelled':
//       case 'cancelado':
//         return <HiXCircle className="text-xl" />;
//       default:
//         return <HiClock className="text-xl" />;
//     }
//   };

//   const getStatusText = (status: string) => {
//     switch (status.toLowerCase()) {
//       case 'approved':
//         return 'Aprobado';
//       case 'pending':
//         return 'Pendiente';
//       case 'cancelled':
//         return 'Cancelado';
//       default:
//         return status;
//     }
//   };

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('es-AR', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//     });
//   };

//   const calculateOrderTotal = (products: IOrderProduct[]) => {
//     return products.reduce((total, product) => total + product.price, 0);
//   };

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('es-AR', {
//       style: 'currency',
//       currency: 'ARS',
//       minimumFractionDigits: 0,
//     }).format(price);
//   };

//   if (isChecking) {
//     return <div>Cargando...</div>;
//   }

//   // Aquí va tu JSX del perfil
//   return (
//     <div className="container mx-auto p-6">
//       <h1>{slug === 'client' ? 'Perfil de Cliente' : 'Perfil de Proveedor'}</h1>

//       {/* Tu componente de perfil aquí */}
//       {/* Puedes usar {slug} para mostrar/ocultar secciones específicas */}

//       {slug === 'client' && (
//         <div>
//           {/* Sección exclusiva de clientes, como órdenes */}
//         </div>
//       )}

//       {slug === 'provider' && (
//         <div>
//           {/* Sección exclusiva de proveedores, como productos */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProfilePage;
