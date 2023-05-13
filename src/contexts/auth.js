import react, { createContext, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({ children }){

    const [newUser, setNewUser] = useState(false)
    const [authLoading, setAuthLoading] = useState(false)

    async function signIn(name, email, password){
        setAuthLoading(true)
        if(newUser){
            try {
                const response = api.post('/users', {
                    name: name,
                    password: password,
                    email: email
                })
    
                setNewUser(false)
                setAuthLoading(false)
                console.log('Registrou')

            } catch (error) {
                setAuthLoading(false)
            }
        }else{
            console.log('Logou')
            setAuthLoading(false)
        }
    }

    return(
        <AuthContext.Provider value={{newUser, setNewUser, signIn, authLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider