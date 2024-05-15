import axios from 'axios';

export const fetchComments = async (userId) => {
  const response = await axios.get(`/api/follow/flyou/${userId}/all`);
  return response.data;
};