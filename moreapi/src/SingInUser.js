import React,{useContext, useState} from 'react'
import { AuthContext } from './auth'

//theorical when created of part of autenticatoin i need reuse some part of Createuser!!!
const SingInUser = () => {
    const auth  = useContext(AuthContext)
    const [form, setform] = useState({
        email:'',
        password:''
    })

    const Onchange = campo => evt =>{
        setform({
            ...form,
            [campo]:evt.target.value
        })
    }

    if(auth.users !== null){
        return null
    }
    return( <>
       <h2>Entrar na sua Conta:</h2>
       {
           auth.SingInUser.SingInUserState.error !== '' && 
           <p>{ auth.SingInUser.SingInUserState.error}</p>
       }
       <input type='text'  placeholder='Email:' value={form.email} onChange={Onchange('email') }  />
       <input type='password' placeholder='Senha:' value={form.password} onChange={Onchange('password')} />
     
        <button onClick={()=> {auth.SingInUser.SingInUser(form.email,form.password)}} >Entrar!</button>
       
     </>)
}

export default SingInUser