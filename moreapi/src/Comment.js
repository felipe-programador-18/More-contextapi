import react from 'react'
import Time from './Time' 

const Comment = ({comment}) => {
   // const auth = useContext()

   return(<div>
     {comment.content} por : {comment.users.name} em:  <Time TIMESTAMP={comment.createAT} />
   </div>)
}

export default Comment