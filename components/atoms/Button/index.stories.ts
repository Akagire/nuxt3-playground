import { Story } from '@storybook/vue3';
import MyButton from './MyButton.vue';

export default {
  component: MyButton,
};

export const Demo: Story = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  setup() {
    return { args };
  },
  template: `
    <my-button v-bind="$props">
      <template v-if="${'default' in args}" v-slot>${args.default}</template>
    </my-button>
  `,
});
Demo.args = {
  default: '<strong>test</strong>',
};
