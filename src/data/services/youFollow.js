import axios from 'axios';

export const fetchFollow = async (userId) => {
  const response = await axios.get(`/api/follow/youfl/${userId}/all`);
  return response.data;
};