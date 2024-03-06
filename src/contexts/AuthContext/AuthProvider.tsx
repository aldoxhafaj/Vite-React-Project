import { createContext, useState } from "react";
import { AuthContextProps, AuthProviderProps } from "./types";
import { User } from "../../Types/backend";

export const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  const initializeUser = (userData: User) => {
    setLoggedUser(userData);
  };

  const getUserRole = () => {
    return loggedUser ? loggedUser.role : null;
  };

  const userRole = getUserRole();

  return (
    <AuthContext.Provider value={{ initializeUser, getUserRole, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};
