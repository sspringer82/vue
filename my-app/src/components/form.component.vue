<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Name:</label>
      <input ref="name" @input="checkForm" :class="{error: !!errors.name}" id="name" v-model="name">
      <div class="errorMessage" v-if="errors.name">{{errors.name}}</div>
    </div>
    <div>
      <label for="isAdmin">Is Admin:</label>
      <input type="checkbox" v-model="isAdmin"> 
    </div>
    <div>
      <button type="submit">submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      errors: { name: null },
      name: '',
      isAdmin: false,
    };
  },
  methods: {
    checkForm() {
      if (this.name.length === 0) {
        this.errors.name = 'Name is a required field';
        this.$refs.name.focus();
      } else {
        this.errors.name = null;
      }
    },
    handleSubmit() {
      this.checkForm();
      if (!this.errors.name) {
        this.$emit('onSave', { name: this.name, isAdmin: this.isAdmin });
        this.name = '';
        this.isAdmin = false;
      }
    },
  },
};
</script>

<style scoped>
.error {
  border: 1px solid red;
}
.errorMessage {
  color: red;
  font-weight: bold;
}
</style>
