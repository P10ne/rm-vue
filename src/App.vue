<template>
  <router-view></router-view>
  <ul>
    <li>asdf</li>
    <li>asdf</li>
  </ul>
  <Form :formModel="model">
    <FormField controlName="isDisabled">
      <Checkbox label="isDisabled" />
    </FormField>
  </Form>
  <Button @click="onSubmit">Submit</Button>
  <Button @click="disable">Disable</Button>
</template>

<script lang="ts">
import Form from '@/modules/Form/components/Form.vue'
import { computed, defineComponent } from 'vue'
import useFormModel from '@/modules/Form/hooks/useFormModel'
import TestControl from '@/modules/Form/components/TestControl.vue'
import { required } from '@/modules/Form/validators/required'
import FormField from '@/modules/Form/components/FormField.vue'
import Input from '@/components/UI/Input.vue'
import Checkbox from '@/components/UI/Checkbox.vue'
import Button from '@/components/UI/Button/Button.vue'
import Select from '@/components/UI/Select/Select.vue'
import SelectOption from '@/components/UI/Select/SelectOption.vue'

type TMyForm = {
  name: { label: string };
  isDisabled: boolean;
}

export default defineComponent({
  components: { Checkbox, Button, FormField, Form },
  data () {
    return {
      vvm: '',
      disabled: false
    }
  },
  watch: {
    vvm (newValue) {
      console.log('update vvm: ', newValue)
    }
  },
  setup () {
    const model = computed(() => useFormModel<TMyForm>({
      controls: {
        name: { defaultValue: null, validators: [[required], []] },
        isDisabled: { defaultValue: true, validators: [[required], []] }
      }
    }))
    return {
      model
    }
  },
  computed: {
    mapSelectedFn (): (item: any) => string {
      return item => item.label
    }
  },
  methods: {
    onSubmit () {
      console.log(this.model.controls)
      console.log(this.model.value)
    },
    disable () {
      this.disabled = true
    }
  }
})

</script>

<style lang="scss" scoped>

</style>
