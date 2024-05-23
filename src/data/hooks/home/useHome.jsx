import { useState, useEffect } from 'react';
import { fetchRecentBlogs } from '../../services/recentBlogs';
import { fetchTrendingBlog } from '../../services/trendingBlog';

const useFetchHome = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recent = await fetchRecentBlogs();
        const trending = await fetchTrendingBlog();
        const response = { 
            recent: recent.data, 
            trending: trending.data
        }
        setData(response);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useFetchHome;