import Vue from "vue";
import Vuex from "vuex";
import newsModule from "./newsModule";
import coursesModule from "./coursesModule";
import aboutModule from "./aboutModule";
import authModule from "./authModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    news: newsModule,
    courses: coursesModule,
    about: aboutModule,
    auth: authModule
  }
});
