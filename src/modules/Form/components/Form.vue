<template>
  <form @submit.prevent>
    <slot></slot>
  </form>
</template>

<script lang="ts">

import { computed, defineComponent, PropType, provide, reactive, ref, toRefs } from 'vue'
import { IFormControlModel } from '@/modules/Form/types/IFormControlModel'
import { TFormControlValues } from '@/modules/Form/types/TFormControlValues'
import { FormModel } from '@/modules/Form/types/FormModel'
import { FORM_MODEL } from '@/modules/Form/injection-keys/FormModelInjectionKey'

export default defineComponent({
  props: {
    formModel: Object as PropType<FormModel>
  },
  // provide () {
  //   return {
  //     formModel: computed(() => this.formModel)
  //   }
  // },
  watch: {
    formModel (nv) {
      console.log('updated: Form.vue: ', nv)
    }
  },
  setup (props) {
    provide(FORM_MODEL, reactive(props.formModel!))
  }
})
</script>

<style lang="scss" scoped>

</style>
