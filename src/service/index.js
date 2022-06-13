import axios from 'axios';

const config = {
  baseURL: 'https://api.isevenapi.xyz/api/iseven'
}
const isEvenAPI = axios.create(config);

export const isEven = async(count) => {
  try {
    const response = await isEvenAPI.get(`/${count}`);
    return response.data.iseven;
  } catch (err) {
    return err
  }
}
