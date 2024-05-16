import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlog } from '../../services/blogContent';

const useFetchBlog = () => {
  const { blogId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchBlog(blogId);
        setData(response);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [blogId]);

  return { data, loading, error };
};

export default useFetchBlog;