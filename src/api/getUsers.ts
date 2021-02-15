
export const getUsers = () => {
  return fetch(`${process.env.REACT_APP_USERS_API_URL}`)
    .then((response) => response.json())
    .catch((error) => ({ error }));
};
