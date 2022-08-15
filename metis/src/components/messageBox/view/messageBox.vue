<template>
  <transition name="message-box-tran">
    <div
      class="message-box-container"
      v-if="state.visible"
      @click="cancelButtonClick(false)">
      <div
        class="message-box-wrapper"
        @click.stop>
        <div class="message-box-title">
          <span>title</span>
          <i
            class="iconfont icon-close"
            @click="cancelButtonClick(false)">
          </i>
        </div>
        <p class="content">
          {{ content }}
        </p>
        <div
          class="button-groups"
          v-if="confirmButtonText || cancelButtonText">
          button
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

defineOptions({
  name: 'my-messagebox'
})

const props = defineProps({
  title: {
    type: String,
    default: '标题'
  },
  content: {
    type: String,
    default: '内容'
  },
  confirmButtonText: {
    type: String,
    default: ''
  },
  cancelButtonText: {
    type: String,
    default: ''
  }
})

const state = reactive({
  visible: false
})

const confirmButtonClick = (flag: boolean) => {
  state.visible = flag
}

const cancelButtonClick = (flag: boolean) => {
  state.visible = flag
}

const setVisible = (flag: boolean) => {
  state.visible = flag
}

defineExpose({
  setVisible
})
</script>

<style scoped lang="scss">
@import '../style/messageBox.scss';
</style>