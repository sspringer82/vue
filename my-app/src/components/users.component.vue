<template>
  <ul>  
    <User v-for="user in users" :key="user.id" :user="user"/>
    <Form @onSave="handleSave" />
  </ul>
</template>

<script>
import User from './user.component';
import Form from './form.component';

import { mapState, mapActions } from 'vuex';

import { ADD_USER, GET_USERS } from '../store.js';

export default {
  name: 'users',
  components: {
    User,
    Form,
  },
  props: ['usersname'],
  async mounted() {
    this[GET_USERS]();
  },
  computed: {
    ...mapState(['users']),
  },
  methods: {
    async handleSave(user) {
      this[ADD_USER](user);
    },
    ...mapActions([GET_USERS, ADD_USER]),
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>


