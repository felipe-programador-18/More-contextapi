import React, {useContext, useState} from "react"
import { AuthContext } from "./auth"

const CreateUser = () => {
    //create form to adding date and caught information
    const auth  = useContext(AuthContext)
    const[form, setform] = useState({email:'', password:''})
    
    const onChange = campo => evt => {
        setform({
            ...form,
            [campo]: evt.target.value
        })
    }

    if(auth.users !== null){
        return null
    }
}