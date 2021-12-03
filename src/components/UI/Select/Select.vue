<template>
  <span :class="classes" @click="onClick">
    <span class="Select__control">

      <span class="Select__label">
        <span class="Select__value" v-if="selectedValue">
          {{ selectedValue }}
        </span>
        <span class="Select__placeholder" v-else>
          {{ placeholder }}
        </span>
      </span>

      <Icon name="arrow-down" class="Select__arrow" />
    </span>

    <div class="Select__options" v-if="isActive" @click.stop>
      <slot></slot>
    </div>

  </span>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import Icon from '../Icon.vue'
import useFormControl from '@/modules/Form/hooks/useFormControl'

export default defineComponent({
  components: {
    Icon
  },
  props: {
    placeholder: {
      type: String,
      default: 'Выберите значение'
    },
    modelValue: Object,
    mapSelectedValue: {
      type: Function as PropType<(modelValue: unknown) => string>,
      default: (modelValue: unknown) => modelValue
    },
    disabled: Boolean
  },
  data () {
    return {
      isActive: false
    }
  },
  computed: {
    classes (): Record<string, boolean> {
      return {
        Select: true,
        'Select--active': this.isActive,
        'Select--disabled': this.isDisabled,
        'Select--error': this.hasError
      }
    },
    selectedValue (): string {
      return this.controlValue
        ? this.mapSelectedValue(this.controlValue)
        : this.modelValue
          ? this.mapSelectedValue(this.modelValue)
          : ''
    },
    isDisabled (): boolean {
      return this.isControlDisabled || this.disabled
    },
    hasError (): boolean {
      return this.controlHasError
    }
  },
  methods: {
    onClick () {
      if (!this.isDisabled) {
        this.isActive = !this.isActive
        if (!this.isActive) {
          this.setControlTouched(true)
        }
      }
    },
    setOption (value: any) {
      this.setControlValue(value)
      this.$emit('update:modelValue', value)
      this.isActive = false
    }
  },
  setup () {
    return useFormControl<any>()
  }
})
</script>

<style lang='scss' scoped>
  $side-padding: 20rem;
  $control-class: '.Select__control';
  $arrow-class: '.Select__arrow';
  $active-class: '.Select--active';
  $error-class: '.Select--error';
  .Select {
    position: relative;
    display: inline-block;
    cursor: pointer;
    &:hover:not(#{$active-class}):not(#{$error-class}) {
      #{$control-class} {
        border: 1px solid rgba(0, 0, 0, 0.45);
      }
    }
    &--disabled {
      opacity: 0.4;
      cursor: default;
      pointer-events: none;
    }
    &--error {
      #{$control-class} {
        &, &:hover {
          border: 1px solid #DF0000;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          pointer-events: none;
        }
      }
    }
    &__options {
      position: absolute;
      top: 110%;
      right: 0;
      display: inline-block;
      min-width: 150rem;
      background: #F7F7F7;
      border: 1px solid rgba(0, 0, 0, 0.15);
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
      border-radius: 5px;
    }
    &__label {
      font-weight: 500;
    }
    &__placeholder {
      color: rgba(0, 0, 0, 0.4);
    }
  }
  #{$control-class} {
      position: relative;
      display: flex;
      align-items: center;
      min-width: 150rem;
      font-size: 12rem;
      padding: 10rem $side-padding + 14rem 10rem $side-padding;
      background: rgba(162, 162, 162, 0.1);
      border: 1px solid rgba(162, 162, 162, 0.6);
      border-radius: 5px;
  }
  #{$arrow-class} {
    position: absolute;
    top: 50%;
    right: 14rem;
    transform: translateY(-50%);
    color: #00A3FF;
  }
  #{$active-class}:not(#{$error-class}) {
    #{$control-class} {
        border: 1px solid #00A3FF;
    }
    #{$arrow-class} {
      transform: translateY(-50%) rotate(180deg);
    }
  }
</style>
