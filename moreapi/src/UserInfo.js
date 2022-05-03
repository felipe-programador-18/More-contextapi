import React,{useContext, useState} from 'react'
import { AuthContext } from './auth'


const FormUsers = ({displayname,users}) => {
    const auth = useContext(AuthContext)
    const [newdisplayuser, setdisplayname] = useState(displayname)
    
    const onChange = evt => {
        setdisplayname(evt.target.value)
    }
    //create functions to save newuser and new display new
    //I am save user and create structure to making autentication
    const save = () => {
        if(newdisplayuser !== ''){
            users.updateProfile({displayname : newdisplayuser })
        }
    }    
     return ( <>
       <input type='text' value={newdisplayuser} onChange={onChange} />
       <button onClick={save}>SALVAR NOVO USER!</button>  
       <h4>teste here now {newdisplayuser} </h4>             
     </>
     )
}

const UserInfo = () => {
    const auth = useContext(AuthContext)

    if(auth.users === null){
      return null
    }
    const {displayname} = auth.users
    const [alternativeDisplay] = auth.users.email.split('@')
    const dn = displayname || alternativeDisplay

   //practice quite about that!!
    return(<>
     <p>Eai, tudo bem ? {dn} !!</p>
     <FormUsers displayname={dn} users={auth.users} />
     <button onClick={auth.Singout}>Sair!</button>
    </>)
}

export default UserInfo


