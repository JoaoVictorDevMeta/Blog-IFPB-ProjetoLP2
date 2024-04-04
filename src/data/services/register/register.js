export const sendUser = async (data) => {
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    return fetch('http://localhost:3000/auth/sign-in', options)
      .then( async(response) => {
        return response.json().then(data => ({
            status: response.status,
            error: data.message
        }));
    });
}