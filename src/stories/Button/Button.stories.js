import Button from '../../components/UI/Button/Button.vue'

export default {
  title: 'UI/Button/Button',
  component: Button,
  argTypes: {

  }
}

const Template = (args) => ({
  components: { Button },
  setup () {
    return { args }
  },
  template: '<Button v-bind="args">Click</Button>'
})

export const button = Template.bind({})
button.args = {
}
