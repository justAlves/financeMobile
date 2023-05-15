import react, { createContext, useState, useEffect } from "react";
import api from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({})

function AuthProvider({ children }){

    const [newUser, setNewUser] = useState(false)
    const [authLoading, setAuthLoading] = useState(false)
    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState(null)

    useEffect(() => {
        async function loadToken(){
            const token = await AsyncStorage.getItem('token')

            if(token){
                const response = await api.get('/me', {
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
                })
                .catch(() => {
                    setUser(null)
                })

                api.defaults.headers.common['Authorization'] = `Bearer ${token}`
                setUser(response.data)
                setLoading(false)
            }

            setLoading(false)
        }

        loadToken()
    }, [])

    async function signIn(email, password){
        setAuthLoading(true)

            try {
                const response = await api.post('/login', {
                    email: email,
                    password: password
                })

                const {id, name, token} = response.data

                const data = {
                    id,
                    name,
                    token,
                    email
                }

                await AsyncStorage.setItem('token', token)
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`

                setUser({
                    id,
                    name,
                    email
                })

                setAuthLoading(false)
                
            } catch (error) {
                console.log(error)
                setAuthLoading(false)
            }
    }

    async function signUp(name, email, password){
        try {
            const response = api.post('/users', {
                name,
                email,
                password
            })

            setNewUser(false)
            setAuthLoading(false)

        } catch (error) {
            setAuthLoading(false)
        }
    }

    async function signOut(){
        await AsyncStorage.clear()
        .then(() => {
            setUser(null)
        })
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, newUser, setNewUser, signIn, authLoading, signUp, loading, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider