import { createContext } from "react";

interface UserContext {
    login: (name: string) => void;
    authState?: {type: string, payload: {}};
    user?: {id: string, name: string};
}

export const  AuthContext = createContext<UserContext | undefined>(undefined);