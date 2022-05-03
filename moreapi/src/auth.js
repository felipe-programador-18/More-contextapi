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
        .createUserWithEmailAndPassword(email, password)
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

// now i have create functions to user SingInuser
const UserSingIn = () => {
    //theoriotical i am adding some state of createuserget
    const [state, setstate] = useState({
         error:'',
         success:''
    })

    const SingInUser = (email, password) => {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
            setstate({
                ...state,
                error: err.message
            })
        })
    }
     return [state, SingInUser]
}

const Singout = () =>{
    firebase
    .auth()
    .signOut()
    .then(()=>{
        console.log('SAIU')
    })
}


// here i am create authprovider to manegar all code
export const AuthProvider = ({children}) => {
   const users = UseGetUser()
   const [CreateStateUser, CreateUser] = CreateUserGet()
   const [SingInUserState, SingInUser] =  UserSingIn()
   
   return(
       <AuthContext.Provider value={{users,
           CreateUser:{
               CreateStateUser, CreateUser
           },
           SingInUser:{
              SingInUserState, SingInUser
           },
           Singout
       }}>
           {children}
       </AuthContext.Provider>
   )


}