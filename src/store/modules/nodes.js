import nodesApi from '@/api/nodes';

const state = {
  data: null,
  isLoading: false,
  error: false
};

export const mutationTypes = {
  getNodesStart: '[nodes] Get nodes start',
  getNodesSuccess: '[nodes] Get nodes success',
  getNodesFailure: '[nodes] Get nodes failure'
};

export const actionTypes = {
  getNodes: '[nodes] Get nodes'
};

const mutations = {
  [mutationTypes.getNodesStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getNodesSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getNodesFailure](state) {
    state.isLoading = false;
  }
};

const actions = {
  [actionTypes.getNodes](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getNodesStart);
      nodesApi.getNodes(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.getNodesSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.getNodesFailure);
        });
    });
  }
};

export default {
  state,
  actions,
  mutations
};
