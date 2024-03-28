import { useState } from 'react'
import Comment from '../../components/Comment'
import {comments} from './comments'

const CommentSection = () => {
    const [commentsData, setCommentsData] = useState(comments)

  return (
    <section className='comment-section container-xxl'>
        <h1>
            Comentários
        </h1>
        <div className='comment-input'>

        </div>
        <ul className='comment-list p-0'>
            <li id='comment1'>
                <Comment comment={commentsData}/>
            </li>
        </ul>
    </section>
  )
}

export default CommentSection