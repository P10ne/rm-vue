import Tab from '../components/UI/Tab.vue';

export default {
  title: 'UI/Tab',
  component: Tab
};

const Template = (args) => ({
  components: { Tab },
  setup () {
    return { args }
  },
  template: '<Tab v-bind="args">Tab</Tab>'
});

export const tab = Template.bind({});
tab.args = {};
