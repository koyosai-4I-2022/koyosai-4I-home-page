import axios from 'axios';

export const fetcher = async (url: string) => {
  return await axios
    .get(process.env.NEXT_PUBLIC_API_ORIGIN + url)
    .then(response => response.data);
};
