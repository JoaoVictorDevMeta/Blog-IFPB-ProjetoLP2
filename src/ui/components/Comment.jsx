import { useState, useRef, useEffect } from 'react'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

import Action from './Action';

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
                        <Action
                            className='btn-sample btn-cancel'
                            handleClick={() => {
                                setIsFocused(false);
                                setinput('');
                            }}
                        >Cancelar
                        </Action>
                        <Action
                            className='btn-sample btn-save'
                            onClick={onAddComment}
                        >Enviar
                        </Action>
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
                    {editMode ? (
                        <>
                            <Action
                                className='btn-sample btn-save'
                                handleClick={onAddComment}
                            >Salvar
                            </Action>
                            <Action
                                className='btn-sample'
                                handleClick={()=>{setEditMode(false)}}
                            >Cancelar
                            </Action>
                        </>
                    ) : (
                        <>
                        { (comment?.childs[0]?.id && !showInput) && <Action
                            className='btn-icon'
                            handleClick={()=>{setExpand(!expand)}}
                        >{
                            expand ? (<IoIosArrowUp /> ) : (<IoIosArrowDown />)
                        }
                        </Action>}
                        <Action
                            className='btn-icon'
                            handleClick={()=>{newComment()}}
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
        </div>
        )}
        <ul className={'comment-list '+ (nodeI >= 2 ? "ps-5":"p-0")} style={{ display: expand ? "block" : 'none'}}>
            {showInput && (
                <div className='ps-5'>
                    <textarea className="input-comment" autoFocus onChange={(e) => setinput(e.target.value)}/>
                    <Action
                        className='btn-sample'
                        onClick={()=>{}}
                    >Responder</Action>
                    <Action
                        className='btn-sample'
                        handleClick={()=>{setShowInput(false)}}
                    >Cancelar</Action>
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