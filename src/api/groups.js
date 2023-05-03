import axios from '@/api/axios';

const getGroups = apiUrl => axios.get(apiUrl);

export default {
  getGroups
};
