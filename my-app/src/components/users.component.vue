<template>
  <ul>  
    <li v-for="user in users" v-on:click="handleClick(user)" v-bind:key="user.id">
      ({{user.id}})
      {{user.name}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'users',
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
    handleClick(user) {
      alert(user.name);
    },
  },
};
</script>
