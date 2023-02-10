import Vue from 'vue';
import Vuex from 'vuex';

import auth from '@/store/modules/auth';
import dashboard from '@/store/modules/dashboard';

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
    dashboard
  }
});
