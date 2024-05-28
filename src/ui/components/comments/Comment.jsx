import React, { useState, useEffect, useContext, useRef } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import Button from '../buttons/Button';
import CommentsContext from '../../../data/hooks/comment/CommentContext';

// Create a Comment component that uses the context
const Comment = ({ commentId = null }) => {
  const { comments, fetchComments } = useContext(CommentsContext);
  const [openCommentId, setOpenCommentId] = useState(null);

  useEffect(() => {
    if (!comments[commentId || 'top']) {
      fetchComments(commentId);
    }
  }, [commentId, comments, fetchComments]);

  const commentList = comments[commentId || 'top'] || [];
  const [editModeId, setEditModeId] = useState(null);
  const [activeInputId, setActiveInputId] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null)

  useEffect(() => {
      if (editModeId && inputRef.current) {
        inputRef.current.focus();
      }
    }, [editModeId]);

  return (
    <ul className='comment-list ms-4'>
        {commentList.map((comment) => (
        <div key={comment.id}>
            <div className='comment-container d-flex my-4'>
                <img src={comment.user.imageUrl} alt="" className='user-image' />
                <div className='comment-content ms-3'>
                    <div className='d-flex flex-wrap pb-2' style={{alignItems: "center"}}>
                        <h3 className='mb-0'>{comment.user.name}</h3>
                        <span className='ps-3'>1 semana atrás</span>
                    </div>
                    <p contentEditable={editModeId === comment.id} suppressContentEditableWarning={true} ref={inputRef}>
                        {comment.content}
                    </p>
                    <div className='comment-actions'>
                        {editModeId == comment.id ? ( !showInput &&
                            <>
                                <Button
                                    type='save'
                                    handleClick={()=>{}}
                                >Salvar
                                </Button>
                                <Button
                                    type='cancel'
                                    handleClick={()=>{setEditModeId(null)}}
                                >Cancelar
                                </Button>
                            </>
                        ) : ( <>
                        {comment.isParent && (
                            <Button
                            type='icon'
                            handleClick={() => { //this open the replies, notice that it just fetch one time
                                setOpenCommentId(openCommentId === comment.id ? null : comment.id);
                                if (!comments[comment.id]) {
                                fetchComments(comment.id);
                                }
                            }}
                            >{openCommentId === comment.id ? (<IoIosArrowUp />) : (<IoIosArrowDown />)}
                            </Button>
                        )}
                        <Button
                            type='icon'
                            handleClick={() => setActiveInputId(activeInputId === comment.id ? null : comment.id)}
                        >Responder
                        </Button>
                        <Button
                            type='icon'
                            handleClick={() => {
                                setEditModeId(editModeId === comment.id ? null : comment.id);
                                if (editModeId !== comment.id) {
                                  setTimeout(() => inputRef.current && inputRef.current.focus(), 0);
                                }
                            }}
                        >Editar
                        </Button>
                        <Button
                            type='icon'
                            onClick={()=>{}}
                        >Deletar
                        </Button>
                        </> )}
                    </div>
                </div>      
            </div>
            {activeInputId === comment.id && (
                <div className='ps-5'>
                    <textarea className="input-comment" autoFocus/>
                    <Button
                        type='save'
                        onClick={()=>{}}
                    >Responder</Button>
                    <Button
                        type='cancel'
                        handleClick={()=>{setActiveInputId(null)}}
                    >Cancelar</Button>
                </div>
            )}

            {/* the replies goes here*/}
            {openCommentId === comment.id && comment.isParent && (
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Comment commentId={comment.id} />
                </React.Suspense>
            )}
            
        </div>
      ))}
    </ul>
  );
};

export default Comment;