import { createContext } from "react";

type UserContext = {
    login?: (name: string) => void;
    logout?: () => void;
    authState?: any;
    logged?: boolean;
    user?: {id: string, name: string};
}

export const AuthContext = createContext<UserContext | undefined>(undefined);