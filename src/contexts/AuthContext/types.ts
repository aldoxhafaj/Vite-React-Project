import { Role, User } from "../../Types/backend";
import { ReactNode } from "react";

export type AuthContextProps = {
  initializeUser: (user: User) => void;
  getUserRole: () => Role | null;
  userRole: Role | null;
};

export type AuthProviderProps = {
  children: ReactNode;
};
