import { useState } from 'react';
import { removeComment } from '../../services/removeComment';
import { UserLoggedInfo } from '../../utils/userLoggedInfo';

import Swal from 'sweetalert2';

const useRemoveComment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const userId = UserLoggedInfo()?.id;

  const execute = async (commentId) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1C6758',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
  
    if (result.isConfirmed) {
      setIsLoading(true);
      setError(null);
      try {
        const response = await removeComment(userId, commentId);
        setData(response);
        Swal.fire(
          'Deleted!',
          'Your comment has been deleted.',
          'success'
        )
      } catch (err) {
        setError(err);
        Swal.fire(
          'Error!',
          'There was an error deleting your comment.',
          'error'
        )
      } finally {
        setIsLoading(false);
      }
    }
  };

  return { isLoading, error, data, execute };
};

export default useRemoveComment;