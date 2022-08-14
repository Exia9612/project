<template>
  <button
    :class="{
      small: size === 'small',
      medium: size === 'medium',
      large: size === 'large'
    }">
    <slot name="default">Click</slot>
  </button>
</template>

<script lang="ts" setup>
defineOptions({
  name: 'my-button'
})

const props = withDefaults(defineProps<{
  size: 'small' | 'medium' | 'large'
}>(), {
  size: 'medium'
})
</script>

<style lang="scss">
@import '../style/button.scss';
</style>

