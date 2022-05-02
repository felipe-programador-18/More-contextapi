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

export const Usedabase = endpoints => {
    const [data, setdate] = useState({})
}