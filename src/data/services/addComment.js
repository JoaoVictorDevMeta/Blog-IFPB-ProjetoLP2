import axios from 'axios';

export const addComment = async (data, userId, blogId, parentId) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    }

    return axios.post(`/api/comment/${userId}/${blogId}/new/${parentId}`, data, config)
      .then( async(response) => {
        return response.data;
    });
}