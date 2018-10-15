<template>
  <ul>  
    <User v-for="user in users" :key="user.id" :user="user" @toggleAdmin="toggleAdmin"/>
    <Form @onSave="handleSave" />
  </ul>
</template>

<script>
import User from './user.component';
import Form from './form.component';

export default {
  name: 'users',
  components: {
    User,
    Form,
  },
  props: ['usersname'],
  async mounted() {
    this.users = await Promise.resolve([
      { id: 1, name: 'Peter', isAdmin: false },
      { id: 2, name: 'Paul', isAdmin: false },
      { id: 3, name: 'Mary', isAdmin: true },
    ]);
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    toggleAdmin(user) {
      const toggleUser = this.users.find(item => item.id === user.id);
      toggleUser.isAdmin = !toggleUser.isAdmin;
    },
    handleSave(user) {
      const id = Math.max.apply(null, this.users.map(user => user.id)) + 1;
      this.users.push({ ...user, id });
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


