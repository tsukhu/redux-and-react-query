const API_URL = 'https://ruddy-mail.glitch.me/api/gacha';

export default {
  random() {
    return fetch(API_URL).then(response => response.json());
  }
}
