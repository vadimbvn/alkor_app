import instancesApi from '@/api/instances';

const state = {
  data: null,
  isLoading: false,
  error: null
};

export const mutationTypes = {
  getInstancesStart: '[instances] Get instances start',
  getInstancesSuccess: '[instances] Get instances success',
  getInstancesFailure: '[instances] Get instances failure',

  deleteInstancesStart: '[instances] Delete instances start',
  deleteInstancesSuccess: '[instances] Delete instances success',
  deleteInstancesFailure: '[instances] Delete instances failure'
};

export const actionTypes = {
  getInstances: '[instances] Get instances',
  deleteInstances: '[instances] Delete instances'
};

const mutations = {
  [mutationTypes.getInstancesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getInstancesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
    state.error = false;
  },
  [mutationTypes.getInstancesFailure](state) {
    state.isLoading = false;
    state.error = true;
  },

  [mutationTypes.deleteInstancesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.deleteInstancesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.deleteInstancesFailure](state) {
    state.isLoading = false;
    state.error = true;
  }
};

const actions = {
  [actionTypes.getInstances](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getInstancesStart);
      instancesApi.getInstances(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.getInstancesSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.getInstancesFailure);
        });
    });
  },
  [actionTypes.deleteInstances](context, { apiUrl }, instanceName) {
    return new Promise(resolve => {
      context.commit(mutationTypes.deleteInstancesStart);
      instancesApi.deleteInstances(apiUrl, instanceName)
        .then(responce => {
          context.commit(mutationTypes.deleteInstancesSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.deleteInstancesFailure);
        });
    });
  }
};

export default {
  state,
  actions,
  mutations
};
