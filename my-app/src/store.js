import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initialState = {
  users: [
    { id: 1, name: 'Peter', isAdmin: true },
    { id: 2, name: 'Paul', isAdmin: true },
    { id: 3, name: 'Mary', isAdmin: false },
  ],
};

export default new Vuex.Store({
  state: initialState,
});
