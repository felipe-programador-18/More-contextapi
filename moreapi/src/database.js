import {useEffect, useState} from 'react'
import firebase from './firebase'


//here i have create one inject dependence to caught date with firebase
export const UsedadabasePush =  endpoints => {
  const [status, setstatus] = useState('')
   
  const save = data => {
    const ref = firebase.database().ref(endpoints)

  }

  return [status, save]
}