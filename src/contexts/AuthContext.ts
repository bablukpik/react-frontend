import { createContext } from 'react';

export interface IAuthContext {
  token: string,
  onLogin: (loginAccessToken?: string) => void,
  onLogout: () => void,
}

export const AuthContext = createContext<IAuthContext>({
  token: '',
  onLogin: () => {},
  onLogout: () => {},
});
