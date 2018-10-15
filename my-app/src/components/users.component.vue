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
        { id: 1, name: 'Peter' },
        { id: 2, name: 'Paul' },
        { id: 3, name: 'Mary' },
      ],
    };
  },
  methods: {
    toggleAdmin(user) {
      debugger;
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


