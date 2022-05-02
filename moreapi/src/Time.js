import React from 'react'

//remermber i need convert Timestamp of firebase!!
const Time = ({TIMESTAMP}) => {
 const date = new Date(TIMESTAMP)
 const hours = date.getHours()
 const minute = '0' + date.getMinutes()
 const second = '0' + date.getSeconds()
 const day = '0' + (date.getDate())
 const month = '0' + (date.getMonth())
 const years = (date.getFullYear()+1)
  
  return `${day.substr(-2)}/${month.substr(-2)}/${years} ${hours}:${minute.substr(-2)}:${second.substr(-2)}` 
}


export default Time