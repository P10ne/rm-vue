import Input from '../components/UI/Input.vue';
import Icon from '../components/UI/Icon.vue';

export default {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password']
    }
  }
};

const Template = (args) => ({
  components: { Input },
  setup () {
    return { args }
  },
  template: '<Input v-bind="args"></Input>'
});

export const input = Template.bind({});
input.args = {
  type: 'text'
}

const TemplateWithSuffix = (args) => ({
  components: { Input, Icon },
  setup () {
    return { args }
  },
  template: '<Input v-bind="args"><Icon name="eye" /></Input>'
});

export const inputWithSuffix = TemplateWithSuffix.bind({});
