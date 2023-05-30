import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3001/item',
  headers: {
    post: {
      'Access-Control-Allow-Origin': true,
    },
  },
});
