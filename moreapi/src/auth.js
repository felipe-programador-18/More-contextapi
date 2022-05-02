import React,{useEffect, useState} from 'react'
import firebase  from './firebase'

export const AuthContext =  React.createContext()
//here i have create useget to get allusers
const UseGetUser = () => {
    const [users, setusers] = useState(null)
    useEffect(() => {
      firebase.auth().onAuthStateChanged(atualusuario => {
          if(atualusuario){
              setusers(atualusuario)
          }else{
              setusers(null)
          }
      })
    },[])
    return users
}

// now create function to create user and adding email and password!!
const CreateUserGet = () => {
    const [state, setstate] = useState({
        error:'' ,
        success: ''
    })
    const CreateUser = (email, password) => {
        firebase
        .auth()
        .createUserWithEmailAndPassword()
        .then( users =>{
            if(users){
             setstate({
                 ...state,
                 success:'OK'
             })
            }
        })
        .catch(err => {
            setstate({
              ...state,
              error: err.message
            })
        })
    }
    return [state, CreateUser]
}

