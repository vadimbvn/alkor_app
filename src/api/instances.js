import axios from '@/api/axios';

const getInstances = apiUrl => axios.get(apiUrl);

const deleteInstances = (apiUrl, instanceName) => axios.delete(
  `${apiUrl}/delete/${instanceName}`,
  { data: instanceName }
);

export default {
  getInstances,
  deleteInstances
};
