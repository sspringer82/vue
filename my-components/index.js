const app = new Vue({
  el: '#myApp',
  data: {
    name: 'Basti',
    users: [
      { id: 1, name: 'Peter' },
      { id: 2, name: 'Paul' },
      { id: 3, name: 'Mary' },
    ],
  },
  methods: {
    handleClick(user, event) {
      alert(user.name);
    },
  },
});
