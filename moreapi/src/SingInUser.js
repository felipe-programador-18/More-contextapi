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
     
     </>

     )
}