import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addComment } from '../../services/addComment';
import { UserLoggedInfo } from '../../utils/userLoggedInfo';

const useAddComment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const { blogId } = useParams();
  const userId = UserLoggedInfo()?.id;

  const execute = async (commentData, parentId = null) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await addComment(commentData, userId, blogId, parentId);
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, data, execute };
};

export default useAddComment;