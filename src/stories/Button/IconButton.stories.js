import IconButton from '../../components/UI/Button/IconButton.vue'

export default {
  title: 'UI/Button/IconButton',
  component: IconButton,
  argTypes: {

  }
}

const Template = (args) => ({
  components: { IconButton },
  setup () {
    return { args }
  },
  template: '<IconButton v-bind="args" />'
})

export const iconButton = Template.bind({})
iconButton.args = {
  icon: 'eye'
}
