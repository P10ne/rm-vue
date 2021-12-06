<template>
<button class="IconButton">
  <span class="IconButton__content">
    <Icon :name="icon" />
  </span>
</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Icon from '../Icon.vue'

export default defineComponent({
  components: { Icon },
  props: {
    icon: String
  }
})
</script>

<style lang="scss" scoped>
.IconButton {
  border-radius: 50%;
  overflow: hidden;
  background-color: #00A3FF;
  cursor: pointer;
  &__content {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
    padding: 0.5em;
  }
}
</style>
