<template>
  <input
    type="text"
    :value="value"
    @input="onChange"
  />
  <span v-if="isPending">pending</span>
  <div v-if="hasErrors">
    <span v-if="hasRequiredError">Required error</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, toRefs } from 'vue'
import { FORM_MODEL } from '@/modules/Form/injection-keys/FormModelInjectionKey'
import { TFormControlValues } from '@/modules/Form/types/TFormControlValues'

export default defineComponent({
  props: {
    controlName: {
      type: String,
      default: ''
    },
    modelValue: {
      type: String
    }
  },
  methods: {
    onChange (e: Event) {
      const newValue = (e.target as any).value
      if (this.control) {
        this.control.setValue(newValue)
      }
      this.$emit('update:modelValue', newValue)
      console.log('onChange: ', this.control)
    }
  },
  computed: {
    value (): TFormControlValues {
      return this.control
        ? this.control.value
        : this.modelValue || null
    },
    isPending (): boolean {
      return this.control?.pending || false
    },
    hasErrors (): boolean {
      console.log('check errors')
      return !!this.control && Object.keys(this.control.errors).length > 0
    },
    hasRequiredError (): boolean {
      return this.hasErrors && !!this.control?.errors.required
    }
  },
  setup (props) {
    const { controlName } = toRefs(props)
    const formModel = inject(FORM_MODEL)
    const control = formModel?.controls[controlName.value]
    return {
      control
    }
  }
})
</script>

<style scoped>

</style>
