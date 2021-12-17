import axios from "axios";

const newsModule = {
  namespaced: true,

  state: {
    news: [
    ],
    currentNews: {},
    loadMoreNewsButton: true,
    newsIsLoading: false,
    currentIsLoading: false,
    isCreatingNews: false,
    isLoadingMore: false,
  },

  mutations: {
    addNews(state, res) {
      state.news = [...state.news, ...res.reverse()];
    },
    setCurrentNews(state, res) {
      state.currentNews = res;
    },
    addCreatedNews(state, res) {
      state.news = [res, ...state.news];
    },
    setIsCreatingNews(state, bool) {
      state.isCreatingNews = bool;
    },
    saveEditNews(state, news) {
      state.news = state.news.map((i) => (+i.id === +news.id ? news : i));
    },
    deleteNews(state, id) {
      state.news = state.news.filter((i) => (+id === +i.id ? null : i));
    },
    setIsLoadingMore(state, bool) {
      state.isLoadingMore = bool;
    },
    setNewsIsLoadingStatus(state, bool) {
      state.newsIsLoading = bool;
    },
    showLoadMoreNewsButton(state, total) {
      state.loadMoreNewsButton = total <= state.news.length;
    },
    setIsUpdatingNews(state, { bool, id }) {
      state.news = state.news.map((i) =>
        +i.id === +id ? { ...i, isUpdating: bool } : i
      );
    },
    setIsDeletingNews(state, { bool, id }) {
      state.news = state.news.map((i) =>
        +i.id === +id ? { ...i, isDeleting: bool } : i
      );
    },
  },

  getters: {
    getNewsLength(state) {
      return state.news.length;
    },
    getTwentyNews(state) {
      return state.news;
    },
    getCurrentNews(state) {
      return state.currentNews;
    },
    getNewsLoadingStatus(state) {
      return state.newsIsLoading;
    },
    getNewsMoreLoadingStatus(state) {
      return state.newsIsLoading;
    },
    getCurrentLoadingStatus(state) {
      return state.currentIsLoading;
    },
    getIsCreatingNews(state) {
      return state.isCreatingNews;
    },
    getLoadMoreNewsButton(state) {
      return state.loadMoreNewsButton;
    },
    getIsLoadingMore(state) {
      return state.isLoadingMore;
    },
    getIsUpdatingNews(state) {
      return (id) =>
        state.news.filter((i) => i.id === id)[0]
          ? state.news.filter((i) => i.id === id)[0].isUpdating
          : false;
    },
    getIsDeletingNews(state) {
      return (id) =>
        state.news.filter((i) => i.id === id)[0]
          ? state.news.filter((i) => i.id === id)[0].isDeleting
          : false;
    },
  },

  actions: {
    fetchNews: async function({ commit }) {
      try {
        commit("setNewsIsLoadingStatus", true);
        const res = await axios.get(`/api/news/?limit=20&offset=0`);
        commit("addNews", res.data.results);
        commit("showLoadMoreNewsButton", res.data.count);
        commit("setNewsIsLoadingStatus", false);
      } catch {
        commit("setNewsIsLoadingStatus", false);
      }
    },
    fetchCurrent: async function({ commit }, id) {
      const res = await axios.get(`/api/news/${id}`);
      commit("setCurrentNews", res.data);
    },
    fetchMore: async function({ commit, getters }) {
      try {
        commit("setIsLoadingMore", true);
        const res = await axios.get(
          `/api/news/?limit=20&offset=${getters.getNewsLength}`
        );
        commit("addNews", res.data.results);
        commit("showLoadMoreNewsButton", res.data.count);
        commit("setIsLoadingMore", false);
      } catch {
        commit("setIsLoadingMore", false);
      }
    },
    createNews: async function({ commit }, news) {
      try {
        commit("setIsCreatingNews", true);
        const res = await axios.post(`/api/news/`, news);
        commit("addCreatedNews", res.data);
        commit("setIsCreatingNews", false);
      } catch (err) {
        commit("setIsCreatingNews", false);
        throw new Error();
      }
    },
    editNews: async function({ commit }, news) {
      try {
        commit("setIsUpdatingNews", { bool: true, id: news.get("id") });
        const res = await axios.put(`/api/news/${news.get("id")}/`, news);
        commit("saveEditNews", res.data);
        commit("setIsUpdatingNews", { bool: false, id: news.get("id") });
      } catch (err) {
        commit("setIsUpdatingNews", { bool: false, id: news.get("id") });
        throw new Error();
      }
    },
    deleteNews: async function({ commit }, id) {
      try {
        commit("setIsDeletingNews", { bool: true, id });
        await axios.delete(`/api/news/${id}/`);
        commit("setIsDeletingNews", { bool: false, id });
        commit("deleteNews", id);
      } catch {
        commit("setIsDeletingNews", { bool: false, id });
        throw new Error();
      }
    },
  },
};

export default newsModule;
