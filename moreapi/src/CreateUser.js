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

    return ( <>
        <h2>Por favor crie uma nova conta!</h2>
        {  auth.CreateUser.CreateUser.error !== '' &&
        <p> {auth.CreateUser.CreateUser.error}</p>
        } 
         <input type='text' placeholder="Digite seu email:"   onChange={onChange('email')} value={form.email}  />
         <input type='password' placeholder="Digite sua senha:" onChange={onChange('password')}  value={form.password}  />

         <button onClick={() =>{auth.CreateUser.CreateUser(form.email, form.password)}} >Criar conta!</button>
    </>)
}