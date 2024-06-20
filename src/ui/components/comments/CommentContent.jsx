import React, { useState, useContext, useEffect, useRef } from 'react';
import CommentsContext from '../../../data/hooks/comment/CommentContext';
import useAddComment from '../../../data/hooks/comment/useAddComment';
import useRemoveComment from '../../../data/hooks/comment/useRemoveComment';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import Button from '../buttons/Button';
import Comment from './Comment';

import { formatTimeAgo } from '../../../data/utils/formatTimeAgo';

const CommentContent = ({ comment, nodeId, user }) => {
  const { comments, fetchComments } = useContext(CommentsContext);
  const [isCommentVisible, setIsCommentVisible] = useState(true);
  const [mode, setMode] = useState('view'); // 'view', 'edit', or 'reply'
  const [areRepliesVisible, setAreRepliesVisible] = useState(false);
  const inputRef = useRef(null);
  const [input, setinput] = useState('');

  //setup of hooks configuration
  const {
    isLoading: isAdding,
    error: addError,
    data: addData,
    execute: addComment,
  } = useAddComment();
  const {
    isLoading: isRemoving,
    error: removeError,
    data: removeData,
    execute: removeComment,
  } = useRemoveComment();

  // this function will handle the reply button click
  // it helps dealing with denecessary requests
  const handleReplyButtonClick = async () => {
    if (comment.isParent && !comments[comment.id]) {
      await fetchComments(comment.id);
    }
    setAreRepliesVisible(!areRepliesVisible);
  };

  const handleAddComment = () => {
    if (input.length < 2) return;
    addComment({ content: input }, comment.id);
    setinput('');
    setMode('view');
  };

  useEffect(() => {
    if (addData) {
      console.log('A new comment has been added. Fetching comments again...');
      fetchComments(comment.id);
      console.log('Comments after fetching:', comments);
      setAreRepliesVisible(true);
    }
    if (removeData) {
      setIsCommentVisible(false);
    }
  }, [addData, removeData]);

  // this useEffect will focus the input when the mode is 'edit'
  useEffect(() => {
    inputRef?.current?.focus();
  }, [mode === 'edit']);

  return (
    <div key={comment.id} className={isCommentVisible ? '' : 'hidden'}>
      <div className="comment-container d-flex my-4">
        <img src={comment.user.imageUrl} alt="" className="user-image" />
        <div className="comment-content ms-3">
          <div
            className="d-flex flex-wrap pb-2"
            style={{ alignItems: 'center' }}
          >
            <h3 className="mb-0">{comment.user.name}</h3>
            <span className="ps-3">{formatTimeAgo(comment.createdAt)}</span>
          </div>
          <p
            contentEditable={mode === 'edit'}
            suppressContentEditableWarning={true}
            ref={inputRef}
          >
            {comment.content}
          </p>
          <div className="comment-actions">
            {mode === 'edit' ? ( // edit Button part
              <>
                <Button type="save" handleClick={() => {}}>
                  Salvar
                </Button>
                <Button
                  type="cancel"
                  handleClick={() => {
                    setMode('view');
                  }}
                >
                  Cancelar
                </Button>
              </>
            ) : (
              // comment Buttons part
              <>
                {comment.isParent && (
                  <Button type="icon" handleClick={handleReplyButtonClick}>
                    {areRepliesVisible ? (
                      <span>
                        <IoIosArrowUp /> fechar
                      </span>
                    ) : (
                      <span>
                        <IoIosArrowDown /> ver mais
                      </span>
                    )}
                  </Button>
                )}
                {user?.id && (
                  <Button type="icon" handleClick={() => setMode('reply')}>
                    Responder
                  </Button>
                )}
                {comment.userId === user?.id && (
                  <>
                    <Button type="icon" handleClick={() => setMode('edit')}>
                      Editar
                    </Button>
                    <Button
                      type="icon"
                      handleClick={() => removeComment(comment.id)}
                    >
                      Deletar
                    </Button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      {mode === 'reply' && (
        <div className="ps-5">
          <textarea
            className="input-comment"
            autoFocus
            onChange={(event) => setinput(event.target.value)}
          />
          <Button type="save" handleClick={handleAddComment}>
            Responder
          </Button>
          <Button
            type="cancel"
            handleClick={() => {
              setMode('view');
            }}
          >
            Cancelar
          </Button>
        </div>
      )}
      {/* the replies goes here
      DO NOT TOUCH THIS PART
      */}
      {comment.id && comment.isParent && areRepliesVisible && (
        <React.Suspense fallback={<div>Loading...</div>}>
          <Comment commentId={comment.id} nodeId={nodeId + 1} />
        </React.Suspense>
      )}
    </div>
  );
};

export default CommentContent;
