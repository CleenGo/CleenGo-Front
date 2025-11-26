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


export async function registerClient(data: RegisterClientRequest) {
  const response = await http.post<RegisterClientResponse>(
    "/auth/register/client",
    data
  );
  return response.data;
}

export async function login(data: LoginRequest) {
  const response = await http.post<LoginResponse>(
    "/auth/login",
    data
  );
  return response.data;
}