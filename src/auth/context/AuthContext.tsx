import { createContext } from "react";

interface UserContext {
    login: (name: string) => void;
    logout: () => void;
    authState?: any;
    logged?: boolean;
    user?: {id: string, name: string};
}

export const  AuthContext = createContext<UserContext | undefined>(undefined);