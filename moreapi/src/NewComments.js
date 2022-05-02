import React, {useContext, useState} from 'react'
import { AuthContext } from './auth'
import { UsedadabasePush } from './database'
import firebase from './firebase'


const NewComents = () => {
    const [,save] = UsedadabasePush('comments')
    const [comment, setcomment] = useState('')
    const auth = useContext(AuthContext)
    if(auth.users !== null){
      return null
    }  
    console.log(auth.users)

    const {displayname} = auth.users
    const [alterarDisplayname] = auth.users.email.split('@')
    const CreateComments = () => {
        if(comment !== ''){
         save({
             content: comment,
             createAT: firebase.database.ServerValue.TIMESTAMP,
             users:{
                 id: auth.users.uid,
                 name: displayname || alterarDisplayname

             }
         })
         //this serve to controll of state!!
         setcomment('')
        }
    }
    return(
        <div>
            <textarea value={comment} onChange={evt => setcomment(evt.target.value)} /> <br/>
            <button onClick={CreateComments}>Alterar</button>
        </div>
    )
}


export default NewComents