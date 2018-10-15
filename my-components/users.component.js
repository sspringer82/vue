Vue.component('users', {
  data() {
    return {
      name: 'Basti',
      users: [
        { id: 1, name: 'Peter' },
        { id: 2, name: 'Paul' },
        { id: 3, name: 'Mary' },
      ],
    };
  },
  methods: {
    handleClick(user, event) {
      alert(user.name);
    },
  },
  template: `
    <ul>
      <li v-for="user in users" v-on:click="handleClick(user, $event)">
        ({{user.id}})
        {{user.name}}
      </li>
    </ul>
    `,
});

// https://github.com/sspringer82/vue
