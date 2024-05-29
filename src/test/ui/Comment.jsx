import { useState, useRef, useEffect } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import Button from './buttons/Button';

const Comment = ({comment, nodeI = 1}) => {
    const [input, setinput] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [ showInput, setShowInput ] = useState(false)
    const [isFocused, setIsFocused] = useState(false);
    const [expand, setExpand] = useState(nodeI < 2);
    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef?.current?.focus();
    }, [editMode])

    const newComment = () => {
        setExpand(true);
        setShowInput(true);
    }

    const onAddComment = () => {
        
    }

  return (
    <div>
        {comment.id === 1 ? (
            <form className='input-reply d-flex flex-wrap gap-3'>
                <img src="https://uploads.metropoles.com/wp-content/uploads/2023/07/17124030/F1K-cdbXwAgovdo-1.jpg" alt=""  className='user-image'/>
                <div className='comment-container position-relative'>
                    <textarea
                    className={"input-comment " + (isFocused ? 'focused' : '')} 
                    value={input}
                    onChange={(event) => setinput(event.target.value)}
                    placeholder='Seu comentário...'
                    onFocus={() => setIsFocused(true)}
                    />
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
                            onClick={onAddComment}
                        >Enviar
                        </Button>
                        </div>
                    )}
                </div>
            </form>
        ) : ( <div className='comment-container d-flex my-4'>
            <img src={comment.image} alt=""  className='user-image'/>
            <div className='comment-content ms-3'>
                <div className='d-flex flex-wrap pb-2' style={{alignItems: "center"}}>
                    <h3 className='mb-0'>{comment.title}</h3>
                    <span className='ps-3'>1 semana atrás</span>
                </div>
                <p contentEditable={editMode} suppressContentEditableWarning={editMode} ref={inputRef}>
                    {comment.content}
                </p>
                <div className='comment-actions'>
                    {editMode || showInput ? ( !showInput &&
                        <>
                            <Button
                                type='save'
                                handleClick={onAddComment}
                            >Salvar
                            </Button>
                            <Button
                                type='cancel'
                                handleClick={()=>{setEditMode(false)}}
                            >Cancelar
                            </Button>
                        </>
                    ) : (
                        <>
                        { (comment?.childs[0]?.id && !showInput) && <Button
                            type='icon'
                            handleClick={()=>{setExpand(!expand)}}
                        >{
                            expand ? (<IoIosArrowUp /> ) : (<IoIosArrowDown />)
                        }
                        </Button>}
                        <Button
                            type='icon'
                            handleClick={()=>{newComment()}}
                        >Responder
                        </Button>
                        <Button
                            type='icon'
                            handleClick={()=>{setEditMode(true)}}
                        >Editar
                        </Button>
                        <Button
                            type='icon'
                            onClick={()=>{}}
                        >Deletar
                        </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
        )}
        <ul className={'comment-list '+ (nodeI >= 2 ? "ps-5":"p-0")} style={{ display: expand ? "block" : 'none'}}>
            {showInput && (
                <div className='ps-5'>
                    <textarea className="input-comment" autoFocus onChange={(e) => setinput(e.target.value)}/>
                    <Button
                        type='save'
                        onClick={()=>{}}
                    >Responder</Button>
                    <Button
                        type='cancel'
                        handleClick={()=>{setShowInput(false)}}
                    >Cancelar</Button>
                </div>
            )}
            {comment?.childs?.map((cmt) => {
                return <li key={cmt.id}>
                    <Comment comment={cmt} nodeI={nodeI+1}/>
                </li>
            })}
        </ul>
    </div>
  )
}

export default Comment