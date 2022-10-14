import axios from 'axios';

const baseURL: string = 'http://localhost:8000/';

export const fetcher = async (url: string) => {
  return await axios.get(baseURL + url).then(response => response.data);
};
