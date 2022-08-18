<template>
  <transition name="message-box-tran">
    <div
      class="message-box-container"
      v-if="state.visible"
      @click="cancelButtonClick">
      <div
        class="message-box-wrapper"
        @click.stop>
        <div class="message-box-title">
          <span>{{ title }}</span>
          <i
            class="iconfont icon-close"
            @click="cancelButtonClick">
          </i>
        </div>
        <p class="content">
          <content-view :field="field"></content-view>
        </p>
        <div
          class="button-groups"
          v-if="confirmButtonText || cancelButtonText">
          <my-button @click="confirmButtonClick">{{ confirmButtonText }}</my-button>
          <my-button
            type="plain"
            @click="cancelButtonClick">
            {{ cancelButtonText }}
          </my-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { h, reactive } from 'vue';
import { IMessageBoxReactive } from '../typing/index'
import myButton from '../../button/view/button.vue'

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

const confirmButtonClick = () => {
  state.action = 'confirm'
  setVisible(false)
}

const cancelButtonClick = () => {
  state.action = 'cancel'
  setVisible(false)
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