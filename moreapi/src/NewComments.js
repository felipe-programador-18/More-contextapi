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
}