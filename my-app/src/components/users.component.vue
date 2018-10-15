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
    this[GET_USERS]();
  },
  computed: {
    ...mapState(['users']),
  },
  methods: {
    toggleAdmin(user) {
      const toggleUser = this.users.find(item => item.id === user.id);
      toggleUser.isAdmin = !toggleUser.isAdmin;
    },
    async handleSave(user) {
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


