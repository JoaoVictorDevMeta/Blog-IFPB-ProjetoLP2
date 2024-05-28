import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CommentsContext from './CommentContext';

const CommentsProvider = ({ children }) => {
  const { blogId } = useParams();
  const [comments, setComments] = useState({});

  const fetchComments = async (commentId = null) => {
    try {
      const response = await axios.get(`/api/blog/${blogId}/comments/${commentId}`);
      setComments(prevComments => ({
        ...prevComments,
        [commentId || 'top']: response.data,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CommentsContext.Provider value={{ comments, fetchComments }}>
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;