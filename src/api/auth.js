import axios from '@/api/axios';

const register = credentials => axios.post('/users', { user: credentials });

export default {
  register
};
