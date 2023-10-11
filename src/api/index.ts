import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://192.168.7.190:8080/',
  withCredentials: false,
});
