<template>
  <button :class="classes">
    <span class="Button__container">
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type TSize = 'small' | 'middle' | 'large';

export default defineComponent({
  props: {
    size: {
      type: String as PropType<TSize>,
      default: 'large'
    }
  },
  computed: {
    classes (): Record<string, boolean> {
      return {
        Button: true,
        [`Button--size-${this.size}`]: true
      }
    }
  }
})
</script>

<style lang="scss" scoped>
/* font-size | height | side-padding */
$sizes:
  'large' 18rem 49rem 30rem,
  'middle' 15rem 41rem 13rem,
  'small' 12rem 32rem 10rem;

.Button {
  display: inline-block;
  background-color: #00A3FF;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  @each $size, $font-size, $height, $side-padding in $sizes {
    &--size-#{$size} {
      font-size: $font-size;
      height: $height;
      padding: 0 $side-padding;
    }
  }
  &__container {

  }
}
</style>
