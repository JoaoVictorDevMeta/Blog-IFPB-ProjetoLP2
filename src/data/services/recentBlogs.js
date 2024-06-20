import axios from 'axios';

export const fetchRecentBlogs = async () => {
  const response = await axios.get('/api/blog/recent');
  return response;
};
