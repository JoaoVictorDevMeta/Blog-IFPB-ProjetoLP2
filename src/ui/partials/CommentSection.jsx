import { useState } from 'react'
import Comment from '../components/Comment'

const comments = {
    id: 1,
    childs: [
        {
            id: 231312,
            title: 'AdrianaCarla',
            content: 'Not at all surprising. Kenya and Ethiopia are basically the only place in the world that have really high elevations that also have a warm climate. The adaptations that have helped people survive in that environment also make for really good long distance runners.',
            childs: [
                {
                    id: 3124423,
                    title: 'FabioLDM',
                    content: "What are they running from and shouldn't we join them?",
                    childs: [
                        {
                            id: 4642264,
                            title: 'LeadroS',
                            content: 'So not Dublin then?',
                            childs: []
                        }
                    ]
                },
                {
                    id: 3128423,
                    title: 'FabioLDM',
                    content: "What are they running from and shouldn't we join them?",
                    childs: []
                }
            ]
        },
        {
            id: 31455442,
            title: 'VanessaWeli',
            content: 'Not at all surprising. Kenya and Ethiopia are basically the only place in the world that have really high elevations that also have a warm climate. The adaptations that have helped people survive in that environment also make for really good long distance runners.',
            childs: []
        },
        {
            id: 31242442,
            title: 'VanessaWeli',
            content: 'Testing',
            childs: []
        }
    ]
}

const CommentSection = () => {
    const [commentsData, setCommentsData] = useState(comments)

  return (
    <section className='comment-section container-xxl p-5'>
        <h1>
            Comentários
        </h1>
        <div className='comment-input'>

        </div>
        <ul className='comment-list'>
            <li id='comment1'>
                <Comment comment={commentsData}/>
            </li>
        </ul>
    </section>
  )
}

export default CommentSection