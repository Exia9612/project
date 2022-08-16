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
          <content-view :field="field"></content-view>
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
import { h, reactive } from 'vue';
import { IMessageBoxReactive } from '../typing/index'

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
  },
  field: {
    type: String,
    default: 'confirm'
  }
})

const state = reactive<IMessageBoxReactive>({
  visible: false,
  promptValue: '',
  action: 'unknown'
})

const contentView = ({ field }: { field: string }) => {
  switch (field) {
    case 'prompt':
      return h(
        'input',
        {
          value: state.promptValue,
          onInput: (event: Event) => state.promptValue = (event.target as HTMLInputElement).value,
          class: 'messagebox-input'
        }
      )
    default:
      return h('p', null, props.content)
  }
}

const confirmButtonClick = (flag: boolean) => {
  state.action = 'confirm'
  setVisible(flag)
}

const cancelButtonClick = (flag: boolean) => {
  state.action = 'cancel'
  setVisible(flag)
}

const setVisible = (flag: boolean) => {
  state.visible = flag
}

defineExpose({
  setVisible,
  state
})
</script>

<style scoped lang="scss">
@import '../style/messageBox.scss';
</style>