// src/services/auth.ts
import { http } from "./http";

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

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterClientResponse {
  message: string;
  user: any;
  token?: string; // Por si tu backend devuelve token
}

export interface LoginResponse {
  message: string;
  accessToken: string;
  user: any;
}

/* 🔹 NUEVO: tipos para login por terceros */
export interface ThirdPartyLoginRequest {
  role: "client" | "provider";
  accessToken: string;
  name?: string;
  surname?: string;
  phone?: string;
  profileImgUrl?: string;
}

// Tu back devuelve lo mismo que el login normal
export interface ThirdPartyLoginResponse {
  message: string;
  accessToken: string;
  user: any;
}

/* ----------------- FUNCIONES ----------------- */

export async function registerClient(
  data: RegisterClientRequest
): Promise<RegisterClientResponse> {
  const response = await http.post<RegisterClientResponse>(
    "/auth/register/client",
    data
  );
  return response.data;
}

export async function login(data: LoginRequest): Promise<LoginResponse> {
  const response = await http.post<LoginResponse>("/auth/login", data);
  return response.data;
}

/* 🔹 NUEVO: login/registro con Google (OAuth) */
export async function thirdPartyLogin(
  data: ThirdPartyLoginRequest
): Promise<ThirdPartyLoginResponse> {
  const { role, ...body } = data;

  const response = await http.post<ThirdPartyLoginResponse>(
    `/auth/third-party/${role}`,
    body // { accessToken, name, surname, phone, profileImgUrl }
  );

  return response.data;
}
