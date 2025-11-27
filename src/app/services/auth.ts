// src/app/services/auth.ts

import { http } from "./http";

// --------- Tipos para registro normal ---------
export interface RegisterClientRequest {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  profileImgUrl?: string;
  phone: string;
}

export interface RegisterClientResponse {
  message: string;
  user: any;
  token?: string; // por si el backend devuelve token al registrar
}

// --------- Tipos para login normal ---------
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  accessToken: string;
  user: any;
}

// --------- Tipos para login por terceros (OAuth) ---------
export interface ThirdPartyLoginRequest {
  accessToken: string;
  name: string | null;
  surname: string | null;
  phone: string | null;
  profileImgUrl: string | null;
}

export interface ThirdPartyLoginResponse {
  message: string;
  accessToken: string;
  user: any;
}

// --------- Servicios ---------
export async function registerClient(data: RegisterClientRequest) {
  const response = await http.post<RegisterClientResponse>(
    "/auth/register/client",
    data
  );
  return response.data;
}

export async function login(data: LoginRequest) {
  const response = await http.post<LoginResponse>("/auth/login", data);
  return response.data;
}

// Login / registro con Google (Supabase OAuth)
export async function thirdPartyLogin(
  role: "client" | "provider",
  data: ThirdPartyLoginRequest
) {
  const response = await http.post<ThirdPartyLoginResponse>(
    `/auth/third-party/${role}`,
    data
  );
  return response.data;
}
