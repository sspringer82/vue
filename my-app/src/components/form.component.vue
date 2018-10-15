<template>
  <form @submit="handleSubmit">
    Name: <input type="text" v-model="name" /><br />
    is Admin:   <input type="checkbox" v-model="isAdmin"> <br />
    <button type="submit">submit</button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      name: '',
      isAdmin: false,
    };
  },
  methods: {
    handleSubmit() {
      this.emit('onSave', { name: this.name, isAdmin: this.isAdmin });
    },
  },
};
</script>