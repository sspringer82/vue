<template>
  <ul>  
    <li>{{usersname}}</li>
    <User v-for="user in users" :key="user.id" :user="user"/>
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
};
</script>
