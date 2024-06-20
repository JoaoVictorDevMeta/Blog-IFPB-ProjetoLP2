import axios from 'axios';

export const fetchAuth = async (userId) => {
  const response = await axios.get(`/api/auth/verify/${userId}`, {
    withCredentials: true,
  });

  return response.data;
};
