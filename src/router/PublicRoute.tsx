import { useContext } from "react";
import { AuthContext } from "../auth/context"
import { Navigate } from "react-router-dom";

export const PublicRoute = ({children} : any) => {
    const UserContext = useContext( AuthContext );
    
    return (!UserContext?.logged)
        ? children
        : <Navigate to='/marvel' />
}
