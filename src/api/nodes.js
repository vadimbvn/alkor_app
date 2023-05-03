import axios from '@/api/axios';

const getNodes = apiUrl => axios.get(apiUrl);

export default {
  getNodes
};
