import axios from 'axios';

export const removeComment = async (userId, commentId) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    }

    return axios.delete(`/api/comment/${userId}/delete/${commentId}`, config)
      .then( async(response) => {
        return response.data;
    });
}