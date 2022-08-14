<template>
  <transition name="message-box-tran">
    <div
      class="messageBoxContainer"
      v-if="visible">
    </div>
  </transition>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{
  visible: boolean
}>(), {
  visible: false
})
</script>

<style scoped lang="scss">
@import '../style/messageBox.scss';
</style>