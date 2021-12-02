<template>
  <span :class="{[className]: true}"></span>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    className () {
      return `icon-${this.name}`;
    }
  }
})
</script>
