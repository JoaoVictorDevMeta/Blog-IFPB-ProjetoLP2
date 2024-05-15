import { useState } from 'react';
import { fetchBlogs } from '../../services/blogs';

export const useSearch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (searchTerm = "", category = null, page = 1) => {
    setLoading(true);
    try {
      const blogs = await fetchBlogs(searchTerm, category, page);
      setData(blogs);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};