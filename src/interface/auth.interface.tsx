export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface IAuthContext {
  user: IUser | null;
  token: string | null;
  login: (token: string, user: IUser) => void;
  logout: () => void;
}
