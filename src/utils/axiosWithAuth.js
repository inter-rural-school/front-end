import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://internationalrsr.herokuapp.com/auth/',
    headers: {
      authorization: token
    }
  });
};
