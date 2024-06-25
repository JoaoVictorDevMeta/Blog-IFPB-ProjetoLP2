import axios from 'axios';

export const addBlog = async (data, userId) => {
  const config = {
    withCredentials: true,
  };

  return axios
    .post(`/api/user/${userId}/newpost`, data, config)
    .then(async (response) => {
      return response.data;
    })
    .catch((err) => {
        console.error(err);
    });
};
