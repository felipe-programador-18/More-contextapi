import react, {useContext} from 'react'
import Time from './Time' 
import { AuthContext } from './auth'

const Comment = ({comment}) => {
    const auth = useContext(AuthContext)
   return(<div>
     {comment.content} por : {comment.users.name} em:  <Time TIMESTAMP={comment.createAT} />
   </div>)
}

export default Comment