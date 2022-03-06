import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    items: [
      {
        price: 333,
        url: "https://imgcinemas.it/wp-content/uploads/2021/04/IMG-sfondoNero.png",
        description: "description",
        name: "Title",
      },
    ],
    select: "all",
  },
  mutations: {
    SET_ITEM: (state, item) => {
      state.items.push(item);
    },
    SET_SELECT: (state, select) => {
      state.select = select;
    },
    DELETE_ITEM: (state, index) => {
      state.items.splice(index, 1);
    },
    initialiseStore(state) {
      if (localStorage.getItem("store")) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem("store")))
        );
      }
    },
  },
  actions: {
    ADD_TO_ITEMS({ commit }, item) {
      commit("SET_ITEM", item);
    },
    DELETE_FROM_ITEMS({ commit }, index) {
      commit("DELETE_ITEM", index);
    },
    GET_SELECT({ commit }, select) {
      commit("SET_SELECT", select);
    },
  },
  getters: {
    ITEMS(state) {
      return state.items;
    },
    SELECT(state) {
      return state.select;
    },
  },
});

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
