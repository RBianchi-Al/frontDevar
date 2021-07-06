import {createContext, useState} from "react";
import history from "../history";
import api from "../services/api";


const Context = createContext()

function AuthProvider({children}){
    const [authenticated, setAuthenticated] = useState(false);


    async function handleLogin(){
        const {data: {token}} = await api.post('/login')
        localStorage.setItem('token', JSON.stringify(token))
        api.defaults.headers.Authorization = `Bearer ${token}`;
        history.push('/classes')
        setAuthenticated(true)

    }

   


    return(
        <Context.Provider value={{authenticated, handleLogin}}>
            {children}
        </Context.Provider>
    )

}

export {Context, AuthProvider};