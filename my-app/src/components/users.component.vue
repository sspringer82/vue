<template>
  <ul>  
    <User v-for="user in users" :key="user.id" :user="user" @toggleAdmin="toggleAdmin"/>
  </ul>
</template>

<script>
import User from './user.component';

export default {
  name: 'users',
  components: {
    User,
  },
  props: ['usersname'],
  data() {
    return {
      users: [
        { id: 1, name: 'Peter', isAdmin: false },
        { id: 2, name: 'Paul', isAdmin: false },
        { id: 3, name: 'Mary', isAdmin: true },
      ],
    };
  },
  methods: {
    toggleAdmin(user) {
      const toggleUser = this.users.find(item => item.id === user.id);
      toggleUser.isAdmin = !toggleUser.isAdmin;
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>


