<template>
  <span class="Input" :class="classes">
    <input
      class="Input__input"
      :type="type"
      :value="modelValue"
      @input="onChange"
    />
    <span class="Input__suffics">
      <slot></slot>
    </span>
  </span>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    type: {
      type: String,
      default: 'text'
    },
    modelValue: String
  },
  computed: {
    hasSuffix (): boolean {
      return !!this.$slots.default;
    },
    classes (): Record<string, boolean> {
      return {
        'Input--has-suffix': this.hasSuffix
      }
    }
  },
  methods: {
    onChange (event: any) {
      this.$emit('update:modelValue', event.target.value);
    }
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
