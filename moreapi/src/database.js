import {useEffect, useState} from 'react'
import firebase from './firebase'

//here i have create one inject dependence to caught date with firebase
export const UsedadabasePush =  endpoints => {
  const [status, setstatus] = useState('') 
  //inject dependence to verify data and error
  const save = data => {
    const ref = firebase.database().ref(endpoints)
    ref.push(data, err => {
        if(err){
         setstatus('Success aplication!!')
        }else{
            setstatus('error in aplication!!')
        }
    })
  }
  return [status, save]
}

// this serve to caught all database and
export const Usedatabase = endpoints => {
    const [data, setdate] = useState({})
    // here i am need reusing new date!!!
   useEffect(() =>{
    const ref = firebase.database().ref(endpoints)
    ref.on('value', snapshoot => {
        setdate(snapshoot.val())
    })
     return () => {
         ref.off()
     }
   },[endpoints])
   return data
}