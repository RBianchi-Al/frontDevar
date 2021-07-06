import {createContext, useState} from "react";
import history from "../history";
import api from "../services/api";


const ContextClasses = createContext()

function AuthProvider({children}){
    const [classes, setClasses] = useState(false);


    async function handlePostClasses(){
        const {data} = await api.get('/api/classes')
        history.push('/classes')
        setClasses(true)
        
   
    }


    return(
        <ContextClasses.Provider value={{classes, handlePostClasses}}>
            {children}
        </ContextClasses.Provider>
    )

}

export {Context, AuthProvider};