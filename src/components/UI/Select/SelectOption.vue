<template>
  <span class="SelectOption" @click="onClick">
    <slot></slot>
  </span>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: null
  },
  methods: {
    onClick () {
      // todo fix any
      (this.$parent as any).setOption(this.value);
    }
  }
})
</script>

<style lang='scss' scoped>
  .SelectOption {
    display: block;
    font-size: 14rem;
    padding: 10rem 13rem;
    &:hover {
      background: rgba(0, 163, 255, 0.1);
      cursor: pointer;
    }
    & + & {
      border-top: 1px solid rgba(0, 0, 0, 0.15);
    }
  }
</style>
