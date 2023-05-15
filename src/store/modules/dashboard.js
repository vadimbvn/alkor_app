const state = {
  data: null,
  isLoading: false,
  error: null
};

export const mutationTypes = {
  getDashboardStart: '[dashboard] Get dashboard start',
  getDashboardSuccess: '[dashboard] Get dashboard success',
  getDashboardFailure: '[dashboard] Get dashboard failure'
};

export const actionTypes = {
  getDashboard: '[dashboard] Get dashboard'
};

const mutations = {
  [mutationTypes.getDashboardStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getDashboardSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getDashboardFailure](state) {
    state.isLoading = false;
  }

};

export default {
  state,
  mutations
};
