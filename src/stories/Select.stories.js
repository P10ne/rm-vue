import { Select, SelectOption } from '../components/UI';

export default {
  title: 'UI/Select',
  component: Select,
  argTypes: {

  }
};

const Template = (args) => ({
  components: { Select, SelectOption },
  setup() {
    return { args }
  },
  template: '<Select v-bind="args"> <SelectOption>Option 1</SelectOption> <SelectOption>Option 2</SelectOption> </Select>'
});

export const select = Template.bind({});
Select.args = {

};
