const API_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = () => {
  return fetch(API_URL)
    .then((response) => response.json())
    .catch((error) => ({ error }));
};
