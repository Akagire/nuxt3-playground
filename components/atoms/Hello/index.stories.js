import Hello from './Hello.vue';

export default {
  component: Hello,
};

export const Demo = () => ({
  components: { Hello },
  setup() {
    return {};
  },
  template: `
    <hello />
  `,
});
