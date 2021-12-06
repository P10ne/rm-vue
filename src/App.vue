<template>
  <router-view></router-view>
  <ul>
    <li>asdf</li>
    <li>asdf</li>
  </ul>
  <IconButton icon="eye" />
  <Button>Click</Button>
</template>

<script>
import IconButton from '@/components/UI/Button/IconButton'
import Button from '@/components/UI/Button/Button'
export default {
  components: { Button, IconButton }
}
</script>

<style lang="scss" scoped>

</style>
