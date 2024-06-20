import axios from 'axios';

//parentId can be null, meaning that the comment is a top-level comment
export const fetchComment = async (blogId, parentId) => {
  const response = await axios.get(`/api/blog/${blogId}/comments/${parentId}`);
  return response.data;
};
