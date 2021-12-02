<template>
  <span :class="classes">
    <input
      @blur="onBlur"
      class="Input__input"
      :type="type"
      :value="value"
      @input="onChange"
      :disabled="isDisabled"
    />
    <span class="Input__suffics">
      <slot></slot>
    </span>
  </span>
</template>

<script lang='ts'>
import { defineComponent, inject, ref } from 'vue'
import { FORM_CONTROL_NAME } from '@/modules/Form/injection-keys/FormControlNameInjectionKey'
import useFormControl from '@/modules/Form/hooks/useFormControl'
import { ControlModel } from '@/modules/Form/types/ControlModel'

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'text'
    },
    modelValue: String,
    disabled: Boolean
  },
  computed: {
    value (): string {
      return this.controlValue || this.modelValue || ''
    },
    hasSuffix (): boolean {
      return !!this.$slots.default
    },
    classes (): Record<string, boolean> {
      return {
        Input: true,
        'Input--has-suffix': this.hasSuffix,
        'Input--disabled': this.isDisabled,
        'Input--error': this.hasError
      }
    },
    hasError (): boolean {
      return this.controlHasError
    },
    isDisabled (): boolean {
      return this.isControlDisabled || this.disabled
    }
  },
  methods: {
    onChange (event: any) {
      this.setControlValue(event.target.value)
      this.$emit('update:modelValue', event.target.value)
    },
    onBlur () {
      this.setControlTouched(true)
    }
  },
  setup () {
    return useFormControl<string>()
  }
})
</script>

<style lang='scss' scoped>
  $input-class: '.Input__input';
  $input-sides-padding: 13rem;
  $suffix-size: 24rem;

  .Input {
    position: relative;
    display: inline-block;
    &--error {
      #{$input-class} {
        &, &:hover, &:focus {
          border: 1px solid #DF0000;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
      }
    }
    &--disabled {
      opacity: 0.4;
      pointer-events: none;
    }
    &--has-suffix {
      #{$input-class} {
        padding-right: $input-sides-padding + $suffix-size + 5rem
      }
    }
    &__suffics {
      position: absolute;
      top: 50%;
      right: 15rem;
      transform: translateY(-50%);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  #{$input-class} {
    height: 36rem;
    font-size: 12rem;
    padding: 10rem 13rem;
    font-weight: 500;
    border: 1px solid rgba(94, 92, 92, 0.6);
    background: rgba(162, 162, 162, 0.1);
    border-radius: 5px;
    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.45);
    }
    &:focus {
      border: 1px solid #00A3FF;
    }
  }
</style>
