import axios from 'axios';

export const fetchProfile = async (userId) => {
  const response = await axios.get(`/api/profile/`, {
    params: {
      id: userId
    }
  });
  return response.data;
};