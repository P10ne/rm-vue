import Checkbox from '../components/UI/Checkbox.vue';

export default {
  title: 'UI/Checkbox',
  component: Checkbox,
  argTypes: {

  }
};

const Template = (args) => ({
  components: { Checkbox },
  setup () {
    return { args }
  },
  template: '<Checkbox v-bind="args" />'
});

export const checkbox = Template.bind({});
checkbox.args = {
  'v-model:checked': true
};
