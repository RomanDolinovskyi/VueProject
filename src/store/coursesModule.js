import axios from "axios";

const coursesModule = {
  namespaced: true,

  state: {
    courses: [],
    coursesIsLoading: false,
    isCreatingCourses: false
  },

  mutations: {
    addCourses(state, res) {
      state.courses = [...res];
    },
    addCreatedCourses(state, res) {
      state.courses = [res, ...state.courses];
    },
    saveEditCourses(state, courses) {
      state.courses = state.courses.map(i =>
        +i.id === +courses.id ? courses : i
      );
    },
    deleteCourses(state, id) {
      state.courses = state.courses.filter(i => (+id === +i.id ? null : i));
    },
    setCoursesLoadingStatus(state, bool) {
      state.coursesIsLoading = bool;
    },
    setIsCreatingCourses(state, bool) {
      state.isCreatingCourses = bool;
    },
    setIsUpdatingCourses(state, { bool, id }) {
      state.courses = state.courses.map(i =>
        +i.id === +id ? { ...i, isUpdating: bool } : i
      );
    },
    setIsDeletingCourses(state, { bool, id }) {
      state.courses = state.courses.map(i =>
        +i.id === +id ? { ...i, isDeleting: bool } : i
      );
    }
  },

  getters: {
    getCoursesLength(state) {
      return state.courses.length;
    },
    getTwentyCourses(state) {
      return state.courses;
    },
    getCoursesLoadingStatus(state) {
      return state.coursesIsLoading;
    },
    getIsCreatingCourses(state) {
      return state.isCreatingCourses;
    },
    getIsUpdatingCourses(state) {
      return id =>
        state.courses.filter(i => i.id === id)[0]
          ? state.courses.filter(i => i.id === id)[0].isUpdating
          : false;
    },
    getIsDeletingCourses(state) {
      return id =>
        state.courses.filter(i => i.id === id)[0]
          ? state.courses.filter(i => i.id === id)[0].isDeleting
          : false;
    }
  },

  actions: {
    fetchCourses: async function({ commit }) {
      try {
        commit("setCoursesLoadingStatus", true);
        const res = await axios.get("/api/courses/");
        commit("addCourses", res.data);
        commit("setCoursesLoadingStatus", false);
      } catch {
        commit("setCoursesLoadingStatus", false);
      }
    },
    createCourses: async function({ commit }, courses) {
      try {
        commit("setIsCreatingCourses", true);
        const res = await axios.post(`/api/courses/`, courses);
        commit("addCreatedCourses", res.data);
        commit("setIsCreatingCourses", false);
      } catch {
        commit("setIsCreatingCourses", false);
        throw new Error();
      }
    },
    editCourses: async function({ commit }, courses) {
      try {
        commit("setIsUpdatingCourses", { bool: true, id: courses.get("id") });
        const res = await axios.put(
          `/api/courses/${courses.get("id")}/`,
          courses
        );
        commit("saveEditCourses", res.data);
        commit("setIsUpdatingCourses", { bool: false, id: courses.get("id") });
      } catch {
        commit("setIsUpdatingCourses", { bool: false, id: courses.get("id") });
        throw new Error();
      }
    },
    deleteCourses: async function({ commit }, id) {
      try {
        commit("setIsDeletingCourses", { bool: true, id });
        await axios.delete(`/api/courses/${id}/`);
        commit("setIsDeletingCourses", { bool: false, id });
        commit("deleteCourses", id);
      } catch {
        commit("setIsDeletingCourses", { bool: false, id });
        throw new Error();
      }
    }
  }
};

export default coursesModule;
