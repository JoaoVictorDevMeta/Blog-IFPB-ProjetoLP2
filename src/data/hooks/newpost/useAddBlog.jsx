import { useState } from 'react';
import { addBlog } from '../../services/addBlog';
import { UserLoggedInfo } from '../../utils/userLoggedInfo';

import { sleep } from '../../utils/sleep';

const useAddBlog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const userId = UserLoggedInfo()?.id;

  const execute = async (blogData) => {
    setIsLoading(true);
    setError(null);

    await sleep(2000); 
    try {
      /*const response = await addBlog(blogData, userId);
      setData(response);*/
      setData("OK")
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, data, execute };
};

export default useAddBlog;
