import Vue from 'vue';
import Vuex from 'vuex';

import auth from '@/store/modules/auth';
import dashboard from '@/store/modules/dashboard';
import instances from '@/store/modules/instances';
import nodes from '@/store/modules/nodes';
import groups from '@/store/modules/groups';
import jobs from '@/store/modules/jobs';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    dashboard,
    instances,
    nodes,
    groups,
    jobs
  }
});
