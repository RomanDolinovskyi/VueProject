import axios from "axios";

const authModule = {
  namespaced: true,

  state: {
    user: null,
    token: "",
    userIsLoading: false,
    loginIsLoading: false,
    changingPassword: false
  },

  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
      localStorage.setItem("___token", token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    },
    delToken(state) {
      state.token = "";
      localStorage.removeItem("___token");
      axios.defaults.headers.common["Authorization"] = null;
    },
    setUserIsLoading(state, bool) {
      state.userIsLoading = bool;
    },
    setLoginIsLoading(state, bool) {
      state.loginIsLoading = bool;
    },
    setChangingPassword(state, bool) {
      state.changingPassword = bool;
    }
  },

  getters: {
    getUser: function(state) {
      return state.user;
    },
    UserIsLoading: function(state) {
      return state.userIsLoading;
    },
    LoginIsLoading: function(state) {
      return state.loginIsLoading;
    },
    getChangingPassword: function(state) {
      return state.changingPassword;
    }
  },

  actions: {
    initialize: async function({ commit, getters }) {
      try {
        const token = localStorage.getItem("___token");
        if (!token || getters.getUser) return;
        commit("setUserIsLoading", true);
        commit("setToken", token);
        const res = await axios.get("/api/user/init/");
        commit("setUser", res.data);
        commit("setUserIsLoading", false);
      } catch (err) {
        commit("setUserIsLoading", false);
        localStorage.removeItem("___token");
      }
    },
    login: async function({ commit }, auth) {
      try {
        commit("setLoginIsLoading", true);
        const res = await axios
          .post("/api/user/login/", {
            email: auth.email,
            password: auth.password
          })
          .catch(error => {
            throw new Error(error.response.status);
          });
        commit("setToken", res.data.token);
        commit("setUser", res.data.user);
        commit("setLoginIsLoading", false);
      } catch (err) {
        commit("setLoginIsLoading", false);
        throw new Error(err);
      }
    },
    logout: async function({ commit }) {
      commit("delToken");
      commit("setUser", null);
    },
    changePassword: async function({ commit }, changedPass) {
      try {
        commit("setChangingPassword", true);
        await axios.put("/api/user/changepass/", changedPass).catch(error => {
          throw new Error(error.response.status);
        });
        commit("setChangingPassword", false);
      } catch (err) {
        commit("setChangingPassword", false);
        throw new Error(err);
      }
    }
  }
};

export default authModule;
