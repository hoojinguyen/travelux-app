import axios from 'axios';

export default () => {
  return axios.get('https://jsonplaceholder.typicode.com/users');
};
