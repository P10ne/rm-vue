<template>
  <span :class="classes" @click="onBlur">
    <input
    ref="inputRef"
    class="Checkbox__checkbox"
    type='checkbox'
    :checked="value"
    @change="onChange"
    :id="id"
    hidden
    :disabled="isDisabled"
  />
  <label class="Checkbox__content" :for="id">
    <span class="Checkbox__rect">
      <Icon class="Checkbox__mark" v-if="value" name='mark' />
    </span>
    <span class="Checkbox__label">{{ label }}</span>
  </label>
  </span>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Icon from './Icon.vue'
import useFormControl from '@/modules/Form/hooks/useFormControl'

export default defineComponent({
  components: {
    Icon
  },
  data () {
    return {
      inputRef: null
    }
  },
  props: {
    id: {
      type: String,
      default: 'checked'
    },
    label: String,
    modelValue: Boolean,
    disabled: Boolean
  },
  computed: {
    value (): boolean {
      return this.controlValue || this.modelValue
    },
    classes (): Record<string, boolean> {
      return {
        Checkbox: true,
        'Checkbox--disabled': this.isDisabled,
        'Checkbox--error': this.hasError
      }
    },
    isDisabled (): boolean {
      return this.isControlDisabled || this.disabled
    },
    hasError (): boolean {
      return this.controlHasError
    }
  },
  methods: {
    onChange (event: any) {
      this.setControlValue(event.target.checked)
      this.$emit('update:modelValue', event.target.checked)
    },
    onBlur () {
      this.setControlTouched(true)
    }
  },
  setup () {
    return useFormControl<boolean>()
  }
})
</script>

<style lang='scss' scoped>
  $base-class: '.Checkbox';
  $rect-class: '#{$base-class}__rect';
  $label-class: '#{$base-class}__label';
  #{$base-class} {
    display: inline-block;
    &:hover {
      cursor: pointer;
    }
    &__content {
      display: flex;
      align-items: center;
    }
    &__mark {
      position: absolute;
      left: 50%;
      top: 50%;
      font-size: 9rem;
      color: #00CA51;
      transform: translate(-50%, -50%);
    }
    &--error {
      #{$rect-class} {
        border: 1px solid #DF0000;
      }
      #{$label-class} {
        color: #DF0000;
      }
    }
    &--disabled {
      opacity: 0.4;
      &:hover {
        cursor: default;
      }
    }
  }
  #{$rect-class} {
    position: relative;
    width: 15rem;
    height: 15rem;
    border: 1px solid rgba(162, 162, 162, 0.6);
    border-radius: 2px;
  }
  #{$label-class} {
    font-size: 14rem;
    margin-left: 10rem;
  }
</style>
