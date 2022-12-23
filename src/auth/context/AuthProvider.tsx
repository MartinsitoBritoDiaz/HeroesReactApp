import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"

const initialState = {
    logged: false,
}

const init = () => {
    const user = JSON.parse( localStorage.getItem('user') as string );
    return {
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({ children } : any) => {
    const [ authState , dispatch] = useReducer( authReducer, initialState, init);
    const login = (name: string) => {
        const user = { id: 'ABC', name }

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify( user ) );

        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem('user');
        const action = {
            type: types.logout,
            payload: null
        }
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,

            //Methods
            login,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    );
}
