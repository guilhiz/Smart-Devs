import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_URL
});

export const authConfig = (token: string) => ({
  headers: { Authorization: `Bearer ${token}` }
});
