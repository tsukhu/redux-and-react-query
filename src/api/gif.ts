export default {
  random() {
    return fetch(`${process.env.REACT_APP_GIF_API_URL}`).then(response => response.json());
  }
}
