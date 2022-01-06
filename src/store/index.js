import { createStore } from "vuex";
import GithubService from "../services/index";
import { User } from "../models/User";

export default createStore({
  namespaced: true,
  state: {
    user: {},
  },
  mutations: {
    set(state, user) {
      state.user = user;
    },
  },
  actions: {
    async getUser(context, username) {
      const { data } = await GithubService.getUser(username);
      context.commit("set", new User(data));

      return new User(data);
    },
  },
  modules: {},
});
