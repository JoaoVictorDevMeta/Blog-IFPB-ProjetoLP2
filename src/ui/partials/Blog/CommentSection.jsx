import { useState } from 'react'
import Button from '../../components/buttons/Button';

const CommentSection = ({children}) => {
    const [input, setinput] = useState("")
    const [isFocused, setIsFocused] = useState(false);

  return (
    <section className='comment-section container-xxl'>
        <h1>
            Comentários
        </h1>
        <div className='comment-input'>

        </div>
        <form className='input-reply d-flex flex-wrap gap-3'>
            <img src="https://uploads.metropoles.com/wp-content/uploads/2023/07/17124030/F1K-cdbXwAgovdo-1.jpg" alt=""  className='user-image'/>
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
                        onClick={()=>{}}
                    >Enviar
                    </Button>
                    </div>
                )}
            </div>
        </form>
        {children}
    </section>
  )
}

export default CommentSection