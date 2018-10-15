<template>
  <ul>  
    <User v-for="user in users" :key="user.id" :user="user" @toggleAdmin="toggleAdmin"/>
    <Form @onSave="handleSave" />
  </ul>
</template>

<script>
import User from './user.component';
import Form from './form.component';

import { mapState, mapMutations, mapActions } from 'vuex';

import { ADD_USER, GET_USERS } from '../store.js';

export default {
  name: 'users',
  components: {
    User,
    Form,
  },
  props: ['usersname'],
  async mounted() {
    // this.users = await Promise.resolve([
    //   { id: 1, name: 'Peter', isAdmin: false },
    //   { id: 2, name: 'Paul', isAdmin: false },
    //   { id: 3, name: 'Mary', isAdmin: true },
    // ]);
    // const response = await fetch('/users');
    // this.users = await response.json();

    this[GET_USERS]();
  },
  computed: {
    ...mapState(['users']),
  },
  data() {
    return {
      // users: [],
    };
  },
  methods: {
    toggleAdmin(user) {
      const toggleUser = this.users.find(item => item.id === user.id);
      toggleUser.isAdmin = !toggleUser.isAdmin;
    },
    async handleSave(user) {
      //   const response = await fetch('/users', {
      //     method: 'POST',
      //     headers: {
      //       'Content-Type': 'application/json; charset=utf-8',
      //     },
      //     body: JSON.stringify(user),
      //   });
      //   const data = await response.json();
      //   this.users.push(data);
      this[ADD_USER](user);
    },
    ...mapMutations([ADD_USER]),
    ...mapActions([GET_USERS]),
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>


