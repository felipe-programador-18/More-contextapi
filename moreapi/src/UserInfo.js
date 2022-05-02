import React,{useContext, useState} from 'react'
import { AuthContext } from './auth'


const UserInfo = ({displayname,users}) => {
    const auth = useContext(AuthContext)
    const [Newdisplayname, setdisplayname] = useState(displayname)

    const Onchange = evt => {
        setdisplayname(evt.target.value)
    }
}