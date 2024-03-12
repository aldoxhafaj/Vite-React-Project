import { ReactNode } from "react";
import { Role, User } from "src/Types/backend";

export type AuthContextProps = {
	initializeUser: (user: User) => void;
	getUserRole: () => Role | null;
	userRole: Role | null;
	isAdmin: boolean;
};

export type AuthProviderProps = {
	children: ReactNode;
};
