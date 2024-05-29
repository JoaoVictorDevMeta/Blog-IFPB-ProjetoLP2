import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/buttons/Button';
import { UserLoggedInfo } from '../../../data/utils/userLoggedInfo';
import useAddComment from '../../../data/hooks/comment/useAddComment';

import Comment from '../../components/comments/Comment';
import CommentsProvider from '../../../data/hooks/comment/CommentProvider';

const CommentSection = ({children}) => {
    const currentUser = UserLoggedInfo();
    const [input, setinput] = useState("")
    const [isFocused, setIsFocused] = useState(false);

    const { isLoading, error, data, execute } = useAddComment();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await execute({content: input}, null);
        setIsFocused(false);
        setinput('');
    };

  return (
    <section className='comment-section container-xxl'>
        <h1>
            Comentários
        </h1>
        { currentUser ? (
        <form className='input-reply d-flex flex-wrap gap-3' onSubmit={handleSubmit}>
            <img src={currentUser?.imageUrl} alt=""  className='user-image'/>
            <div className='comment-container position-relative'>
                
                <textarea
                className={"input-comment " + (isFocused ? 'focused' : '')} 
                value={input}
                onChange={(event) => setinput(event.target.value)}
                placeholder='Seu comentário...'
                onFocus={() => setIsFocused(true)}/>

                {isFocused && (
                    <div className='position-absolute end-0 bottom-0 m-2'>
                    <Button
                        type='cancel'
                        handleClick={() => {
                            setIsFocused(false);
                            setinput('');
                        }}
                    >Cancelar
                    </Button>
                    <Button
                        type='save'
                        onClick={handleSubmit}
                    >Enviar
                    </Button>
                    </div>
                )}
            </div>

        </form>
        ) : (
            <div className='input-reply'>
                <Link to='/login' className='fs-4'>Faça Login para postar um comentário</Link>
            </div>
        )}

        {   isLoading ? (
            <p>Enviando comentário...</p>
        ) : error ? (
            <p>Erro ao enviar comentário: {error}</p>
        ) : (
            <CommentsProvider>
                <Comment/>
            </CommentsProvider>
        )}
        
    </section>
  )
}

export default CommentSection