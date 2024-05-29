import React, { useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import CommentsContext from '../../../data/hooks/comment/CommentContext';
import CommentContent from './CommentContent';
import { selectCurrentUser } from '../../../data/reducers/auth/authSlice';

const Comment = ({ commentId = null, nodeId = 1 }) => {
  const { comments, fetchComments } = useContext(CommentsContext);
  const currentUser = useSelector(selectCurrentUser);
  console.log(nodeId)

  useEffect(() => {
    if (!comments[commentId || 'top']) {
      fetchComments(commentId);
    }
  }, [commentId, comments, fetchComments]);

  const commentList = comments[commentId || 'top'] || [];

  return (
    <ul className={'comment-list ms-0' + (nodeId === 1 || nodeId === 4 ? ' p-0' : '')}>
      {commentList.map((comment) => (
        <CommentContent 
            key={comment.id} 
            comment={comment} 
            fetchComments={fetchComments} 
            nodeId={nodeId} 
            user={currentUser}
        />
      ))}
    </ul>
  );
};

export default Comment;