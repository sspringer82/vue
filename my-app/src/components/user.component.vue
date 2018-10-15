<template>
  <li >
    ({{user.id}})
    {{user.name}}

    {{user.isAdmin ?  '👑' : ''}}
    <span v-if="user.isAdmin">👑</span>
  </li>
</template>

<script>
export default {
  name: 'User',
  props: ['user'],
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
