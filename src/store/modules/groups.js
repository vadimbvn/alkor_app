import groupsApi from '@/api/groups';

const state = {
  data: null,
  isLoading: false,
  error: false
};

export const mutationTypes = {
  getGroupsStart: '[nodes] Get groups start',
  getGroupsSuccess: '[nodes] Get groups success',
  getGroupsFailure: '[nodes] Get groups failure'
};

export const actionTypes = {
  getGroups: '[nodes] Get groups'
};

const mutations = {
  [mutationTypes.getGroupsStart](state) {
    state.isLoading = true;
    state.data = null;
  },
  [mutationTypes.getGroupsSuccess](state, payload) {
    state.isLoading = false;
    state.data = payload;
  },
  [mutationTypes.getGroupsFailure](state) {
    state.isLoading = false;
  }
};

const actions = {
  [actionTypes.getGroups](context, { apiUrl }) {
    return new Promise(resolve => {
      context.commit(mutationTypes.getGroupsStart);
      groupsApi.getGroups(apiUrl)
        .then(responce => {
          context.commit(mutationTypes.getGroupsSuccess, responce.data);
          resolve(responce.data);
        })
        .catch(() => {
          context.commit(mutationTypes.getGroupsFailure);
        });
    });
  }
};

export default {
  state,
  actions,
  mutations
};
