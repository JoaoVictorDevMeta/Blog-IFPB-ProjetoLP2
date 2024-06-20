import axios from 'axios';

export const fetchTrendingBlog = async () => {
  const response = await axios.get('/api/blog/trending');
  return response;
};
