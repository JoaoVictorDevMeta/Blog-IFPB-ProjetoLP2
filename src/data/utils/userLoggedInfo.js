import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../reducers/auth/authSlice';

export const UserLoggedInfo = () => {
  const currentUser = useSelector(selectCurrentUser);
  return currentUser;
};
