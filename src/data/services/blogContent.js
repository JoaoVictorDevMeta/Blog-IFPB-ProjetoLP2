import axios from 'axios';

export const fetchBlog = async (blogId) => {
  const response = await axios.get(`/api/blog/${blogId}`, {});
  return response.data;
};