<template>
  <span class="Select" :class="classes" @click="onClick">
    <span class="Select__control">
      <span class="Select__value">
        {{ selectValue }}
      </span>
      <Icon name="arrow-down" class="Select__arrow" />
    </span>
  </span>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import Icon from '../Icon.vue';

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
    mapSelectValue: {
      type: Function as PropType<(modelValue: unknown) => string>,
      default: (modelValue: unknown) => modelValue
    }
  },
  data () {
    return {
      isActive: true
    }
  },
  computed: {
    classes (): Record<string, boolean> {
      return {
        'Select--active': this.isActive
      }
    },
    selectValue (): string {
      return this.modelValue
        ? this.mapSelectValue(this.modelValue)
        : this.placeholder
    }
  },
  watch: {
    isActive (isActive) {
      console.log(isActive);
    }
  },
  methods: {
    onClick () {
      this.isActive = !this.isActive;
    }
  }
})
</script>

<style lang='scss' scoped>
  $side-padding: 20rem;
  $control-class: '.Select__control';
  $arrow-class: '.Select__arrow';
  .Select {
    display: inline-block;
    cursor: pointer;
    &:hover {
      #{$control-class} {
        border: 1px solid rgba(0, 0, 0, 0.45);
      }
    }
    &--active {
      #{$control-class} {
        border: 1px solid #00A3FF;
      }
      #{$arrow-class} {
        transform: translateY(-50%) rotate(180deg);
      }
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
</style>
