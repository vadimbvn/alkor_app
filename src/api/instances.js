import axios from '@/api/axios';

const getInstances = apiUrl => axios.get(apiUrl);

const deleteInstances = (apiUrl, name) => axios.delete(
  `${apiUrl}/delete/${name}`,
  { data: name }
);

export default {
  getInstances,
  deleteInstances
};
