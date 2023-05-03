import axios from '@/api/axios';

const getJobs = apiUrl => axios.get(apiUrl);

export default {
  getJobs
};
