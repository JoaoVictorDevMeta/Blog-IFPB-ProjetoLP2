import axios from 'axios';

export const sendUser = async (data) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await axios.post('/api/auth/sign-in', data, options)
  return response.data;
};