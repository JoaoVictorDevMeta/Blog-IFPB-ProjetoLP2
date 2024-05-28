import axios from 'axios';

export const fetchFollow = async (userId) => {
  const response = await axios.get(`/api/follow/flyou/${userId}/all`);
  return response.data;
};