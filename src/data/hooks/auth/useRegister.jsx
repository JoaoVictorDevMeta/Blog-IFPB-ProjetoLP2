import { useState } from 'react';
import { sendUser } from '../../services/register';

const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const execute = async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await sendUser(data);
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, data, execute };
};

export default useRegister;
