<template>
  <li @click="handleClick(user)">
    ({{user.id}})
    {{user.name}}
  </li>
</template>

<script>
export default {
  name: 'User',
  props: ['user'],
  methods: {
    handleClick(user) {
      alert(user.name);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
