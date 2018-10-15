<template>
  <li >
    ({{user.id}})
    {{user.name}}
    {{user.isAdmin}}
    <button @click="handleClick(user)">toggleAdmin</button>
  </li>
</template>

<script>
export default {
  name: 'User',
  props: ['user'],
  methods: {
    handleClick(user) {
      this.$emit('toggleAdmin', user);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  margin: 10px 0;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
  text-align: left;
}
</style>
