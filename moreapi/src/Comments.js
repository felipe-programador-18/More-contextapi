import React  from 'react'
import { Usedatabase} from './database'
import Comment from './Comment'


const Comments = () => {
   const data = Usedatabase('comments')
   if(!data){
       return <p>Nenhum comentário aqui</p>
   }
   // create function to caught ids
   const ids = Object.keys(data)
   if(ids.length === 0){
     return <p>Carregando....</p>
   }
   return ids.map(id => {
       return <Comment key={id} comment={data[id]} />
   })
}