import axios from 'axios';

export const fetchBlogs = async (searchTerm, category, page) => {
  const response = await axios.get(`/api/search`, {
    params: {
      search: searchTerm,
      page: page,
      category: category
    }
  });
  return response.data;
};