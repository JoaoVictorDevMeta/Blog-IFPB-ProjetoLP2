import axios from 'axios';

export const fetchComments = async (userId) => {
  const response = await axios.get(`/api/follow/youfl/${userId}/all`);
  return response.data;
};