<template>
  <button
    :class="{
      small: size === 'small',
      medium: size === 'medium',
      large: size === 'large',
      plain: type === 'plain'
    }"
    @click="handleclick">
    <slot name="default">Click</slot>
  </button>
</template>

<script lang="ts" setup>
import { buttonEmits } from '../typing/index'

defineOptions({
  name: 'my-button'
})

const emit = defineEmits(buttonEmits)

const props = defineProps({
  size: {
    type: String,
    default: 'medium'
  },
  type: {
    type: String,
    default: ''
  }
})

const handleclick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<style lang="scss">
@import '../style/button.scss';
</style>

