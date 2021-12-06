import Icon from '../components/UI/Icon.vue';

export default {
  title: 'UI/Icon',
  component: Icon,
  argTypes: {

  }
}

const Template = (args) => ({
  components: { Icon },
  setup () {
    return { args }
  },
  template: '<icon v-bind="args" />'
});

export const eye = Template.bind({});
eye.args = {
  name: 'eye'
};

export const eyeHidden = Template.bind({});
eyeHidden.args = {
  name: 'eye-hidden'
};

export const arrowLeftFilled = Template.bind({});
arrowLeftFilled.args = {
  name: 'arrow-left-filled'
};

export const arrowUp = Template.bind({});
arrowUp.args = {
  name: 'arrow-up'
};

export const mark = Template.bind({});
mark.args = {
  name: 'mark'
};

export const ellipse = Template.bind({});
ellipse.args = {
  name: 'ellipse'
};

export const arrowLeftUnfilled = Template.bind({});
arrowLeftUnfilled.args = {
  name: 'arrow-left-unfilled'
};

export const arrowRightFilled = Template.bind({});
arrowRightFilled.args = {
  name: 'arrow-right-filled'
};

export const blocks = Template.bind({});
blocks.args = {
  name: 'blocks'
};

export const menu = Template.bind({});
menu.args = {
  name: 'menu'
};
