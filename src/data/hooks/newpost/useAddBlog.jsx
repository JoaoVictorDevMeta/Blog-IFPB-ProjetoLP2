import { useState } from 'react';
import { addBlog } from '../../services/addBlog';
import { UserLoggedInfo } from '../../utils/userLoggedInfo';

const useAddBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const userId = UserLoggedInfo()?.id;

  const execute = async (blogData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await addBlog(blogData, userId);
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, data, execute };
};

export default useAddBlog;
