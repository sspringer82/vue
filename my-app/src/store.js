import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const ADD_USER = 'add_user';
export const ADD_USER_SUCCESS = 'add_user_success';
export const ADD_USER_FAILURE = 'add_user_failure';

export const GET_USERS = 'get_users';
export const GET_USERS_SUCCESS = 'get_users_success';
export const GET_USERS_FAILURE = 'get_users_failure';

const initialState = {
  users: [
    // { id: 1, name: 'Peter', isAdmin: true },
    // { id: 2, name: 'Paul', isAdmin: true },
    // { id: 3, name: 'Mary', isAdmin: false },
  ],
};

export default new Vuex.Store({
  state: initialState,
  mutations: {
    [GET_USERS_SUCCESS](state, { payload }) {
      state.users = payload.users;
    },
    [ADD_USER_SUCCESS](state, { payload }) {
      state.users.push(payload.user);
    },
  },
  actions: {
    async [GET_USERS](context) {
      const request = await fetch('/users');
      const users = await request.json();
      context.commit({ type: GET_USERS_SUCCESS, payload: { users } });
    },
    async [ADD_USER](context, user) {
      const response = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(user),
      });
      const newUser = await response.json();
      context.commit({
        type: ADD_USER_SUCCESS,
        payload: { user: newUser },
      });
    },
  },
});
