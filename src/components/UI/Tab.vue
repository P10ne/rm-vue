<template>
  <span class="Tab" :class="classes">
    <button v-bind="$attrs">
      <slot></slot>
    </button>
  </span>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    isActive: Boolean
  },
  computed: {
    classes (): Record<string, boolean> {
      return {
        'Tab--active': this.isActive
      }
    }
  }
})
</script>

<style lang='scss' scoped>
  $active-class-name: 'active';
  .Tab {
    $main: &;
    font-size: 18rem;
    line-height: 1.25;
    position: relative;
    & button {
      height: 30px;
    }
    &:not(#{$main}--#{$active-class-name}) {
      cursor: pointer;
    }
    &:hover {
      color: red;
    }
    &--#{$active-class-name} {
      color: red;
      font-weight: bold;
      &::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -7px;
        border-bottom: 1px solid red;
      }
    }
  }
</style>
