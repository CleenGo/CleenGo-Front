import { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
  name: string;
  surname?: string;
  profileImgUrl?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (user: any, token: string) => void; // acepta user raw
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // mantener sesión al recargar
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
    }
  }, []);

  const login = (rawUser: any, token: string) => {

    // 🔵 NORMALIZAR EL USUARIO AQUÍ
    const normalizedUser: User = {
      id: rawUser.id,
      email: rawUser.email,
      name: rawUser.name || rawUser.full_name || "",
      surname: rawUser.surname || "",
      profileImgUrl: rawUser.profileImgUrl || rawUser.avatar_url || "",
    };

    setUser(normalizedUser);
    setToken(token);

    localStorage.setItem("user", JSON.stringify(normalizedUser));
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
