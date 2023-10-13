import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://172.20.10.11:8080/',
  withCredentials: false,
});
