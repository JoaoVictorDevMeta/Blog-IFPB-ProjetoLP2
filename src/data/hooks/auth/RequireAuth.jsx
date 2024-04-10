import { useEffect, useState } from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../reducers/auth/authSlice';

import LoadingSpinner from '../../../ui/components/spinner/Spinner';

const RequireAuth = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const result = await axios({
          method: 'get',
          url: `/api/auth/verify/${currentUser?.id}`,
          withCredentials: true,
        });
        setIsAuthenticated(true);
      } catch (e) {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [currentUser?.id]);

    if (isLoading) {
        return <LoadingSpinner />;
    }

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;