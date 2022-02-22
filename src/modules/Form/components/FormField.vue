<template>
  <span :class="classes">
    <span class="FormField__content">
      <span class="FormField__control">
        <slot></slot>
      </span>
      <span class="FormField__error" v-if="canShowError">
        <Icon class="FormField__error-icon" name="eye" />
        <span class="FormField__error-text">
          Error text
        </span>
      </span>
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, inject, provide, toRefs } from 'vue'
import { FORM_MODEL } from '@/modules/Form/injection-keys/FormModelInjectionKey'
import { TFormControlValues } from '@/modules/Form/types/TFormControlValues'
import { FORM_CONTROL_NAME } from '@/modules/Form/injection-keys/FormControlNameInjectionKey'
import useFormControl from '@/modules/Form/hooks/useFormControl'
import Icon from '@/components/UI/Icon.vue'

export default defineComponent({
  components: { Icon },
  props: {
    controlName: {
      type: String,
      required: true
    },
    showErrors: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    value (): TFormControlValues {
      return this.controlValue
    },
    hasError (): boolean {
      return this.controlHasError
    },
    isTouched (): boolean {
      return this.isControlTouched
    },
    classes (): Record<string, boolean> {
      return {
        FormField: true,
        'FormField--error': this.controlHasError
      }
    },
    canShowError (): boolean {
      return this.hasError && this.isTouched && this.showErrors
    }
  },
  setup (props) {
    provide(FORM_CONTROL_NAME, props.controlName)
    return useFormControl({ controlName: props.controlName })
  }
})

</script>

<style lang="scss" scoped>
  $base-class: '.FormField';
  $content-class: '#{$base-class}__content';
  $error-block-class: '#{$base-class}__error';
  #{$base-class} {
    display: flex;
    min-height: 56rem;
    & + & {
      margin-top: 15rem;
    }
  }
  #{$content-class} {
    display: flex;
    flex-direction: column;
  }
  #{$error-block-class} {
    display: flex;
    align-items: center;
    background-color: #DF0000;
    color: white;
    font-size: 12rem;
    padding: 3rem 13rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    &-icon {
      margin-right: 5rem;
    }
  }
</style>
