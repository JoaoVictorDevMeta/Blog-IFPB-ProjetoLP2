import { useState, useRef, useEffect } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

import Action from './Action';

const Comment = ({comment}) => {
    const [input, setinput] = useState("")
    const [editMode, setEditMode] = useState(false)
    const [ showInput, setShowInput ] = useState(false)
    const [ expand, setExpand ] = useState(true)
    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef?.current?.focus();
    }, [editMode])

    const handleNewComment = () => {
        setExpand(!expand)
        setShowInput(true)
    }

    const onAddComment = () => {

    }

  return (
    <div>
        <div className='comment-container'>
            {comment.id === 1 ? (
                <div className='input-reply'>
                    <input 
                    type="text"
                    className=''
                    autoFocus
                    value={input}
                    onChange={(event) => setinput(event.target.value)}
                    placeholder='Sua Resposta...' 
                    />
                    <Action
                        className='btn btn-outline'
                        onClick={onAddComment}
                    >Enviar
                    </Action>
                </div>
            ) : ( <>
                <img src="" alt=""  className='user-image'/>
                <div className='comment-content'>
                    <div>
                        <h3>{comment.title}</h3>
                        <span>1 semana atrás</span>
                    </div>
                    <p contentEditable={editMode} suppressContentEditableWarning={editMode} ref={inputRef}>
                        {comment.content}
                    </p>
                    <div className='comment-actions'>
                        {editMode ? (
                            <>
                                <Action
                                    className='btn-icon'
                                    handleClick={onAddComment}
                                >Salvar
                                </Action>
                                <Action
                                    className='btn-icon'
                                    handleClick={()=>{setEditMode(false)}}
                                >Cancelar
                                </Action>
                            </>
                        ) : (
                            <>
                            <button className='btn-icon'>
                                <IoIosArrowUp /> 5
                            </button>
                            <button className='btn-icon'>
                                <IoIosArrowDown />
                            </button>
                            <Action
                                className='btn-icon'
                                handleClick={()=>{handleNewComment()}}
                            >Responder
                            </Action>
                            <Action
                                className='btn-icon'
                                handleClick={()=>{setEditMode(true)}}
                            >Editar
                            </Action>
                            <Action
                                className='btn-icon'
                                onClick={()=>{}}
                            >Deletar
                            </Action>
                            </>
                        )}
                    </div>
                </div>
                </>
            )}
        </div>
        <ul className='comment-list' style={{ display: expand ? "block" : 'none'}}>
            {showInput && (
                <div>
                    <input type="text" autoFocus onChange={(e) => setinput(e.target.value)}/>
                    <Action
                        className='btn btn-outline'
                        onClick={()=>{}}
                    >Responder</Action>
                    <Action
                        className='btn btn-outline'
                        handleClick={()=>{setShowInput(false)}}
                    >Cancelar</Action>
                </div>
            )}
            {comment?.childs?.map((cmt) => {
                return <li key={cmt.id}>
                    <Comment comment={cmt}/>
                </li>
            })}
        </ul>
    </div>
  )
}

export default Comment