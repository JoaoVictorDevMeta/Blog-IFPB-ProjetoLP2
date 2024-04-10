export const loginUser = async (data) => {
    const options = {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    return fetch('http://localhost:3000/auth/log-in', options)
    .then( async (response) => {
        if (!response.ok) {
            return response.json().then(data => ({
                status: response.status,
                error: data.message
            }));
        }
        return response.json().then(data => {
            localStorage.setItem('user', JSON.stringify({ user: data }));
            return {
                status: response.status,
                error: data.message
            };
        });
    })
}