const aboutModule = {
  namespaced: true,

  state: {
    persons: []
  },

  mutations: {
    setPersons(state, res) {
      state.persons = [...res];
    }
  },

  getters: {
    getPersons: function(state) {
      return state.persons.filter(elem => elem.id > 2 && elem.id <= 5);
    },
    getFirstPerson: function(state) {
      return state.persons[0];
    },
    getSecondPerson: function(state) {
      return state.persons[1];
    },
    isLoading: function(state) {
      return state.isLoading;
    }
  },

  actions: {
    fetchPersons: async function({ commit }) {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => commit("setPersons", json));
    }
  }
};

export default aboutModule;
