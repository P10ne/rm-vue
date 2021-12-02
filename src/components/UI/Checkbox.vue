<template>
  <span class="Checkbox">
    <input
    ref="inputRef"
    class="Checkbox__checkbox"
    type='checkbox'
    :checked="modelValue"
    @change="changeHandler"
    :id="id"
    hidden
  />
  <label class="Checkbox__content" :for="id">
    <span class="Checkbox__rect">
      <Icon class="Checkbox__mark" v-if="modelValue" name='mark' />
    </span>
    <span class="Checkbox__label">{{ label }}</span>
  </label>
  </span>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Icon from './Icon.vue';

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
    modelValue: Boolean
  },
  methods: {
    changeHandler (event: any) {
      console.log('changed');
      this.$emit('update:modelValue', event.target.checked);
    }
  }
})
</script>

<style lang='scss' scoped>
  .Checkbox {
    display: inline-block;
    &:hover {
      cursor: pointer;
    }
    &__content {
      display: flex;
      align-items: center;
      cursor: pointer;
    }
    &__rect {
      position: relative;
      width: 15rem;
      height: 15rem;
      border: 1px solid rgba(162, 162, 162, 0.6);
      border-radius: 2px;
    }
    &__mark {
      position: absolute;
      left: 50%;
      top: 50%;
      font-size: 9rem;
      color: #00CA51;
      transform: translate(-50%, -50%);
    }
    &__label {
      font-size: 14rem;
      margin-left: 10rem;
    }
  }
</style>
