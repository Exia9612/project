import { App, ComponentPublicInstance, createApp, watch } from 'vue'
import { IMessageBoxExpose, IMessageBoxOptions, MessageBoxFun, MessageBoxShortcuts, fields, IMessageBoxReactive } from './typing'
import MyMessageBox from './view/messageBox.vue'

export const MessageBox: MessageBoxFun & Partial<MessageBoxShortcuts<typeof fields>> = (options: IMessageBoxOptions) => {
  const messageBoxComp = createApp(MyMessageBox, options)
  console.log(options)
  return new Promise((resolve, reject) => {
    displayMessageBox(messageBoxComp, resolve, reject)
  })
}

fields.forEach(field => {
  MessageBox[field] = (options: IMessageBoxOptions) => {
    options.field = field
    return MessageBox(options)
  }
})

const displayMessageBox = (app: App, resolve: Function, reject: Function) => {
  const oDiv = document.createDocumentFragment()
  const messageBoxInstance = app.mount(oDiv) as ComponentPublicInstance<IMessageBoxExpose>
  document.body.appendChild(oDiv)
  messageBoxInstance.setVisible(true)

  watch(messageBoxInstance.state, (state: IMessageBoxReactive) => {
    if (!state.visible) {
      switch (state.action) {
        case 'confirm':
          resolve(state.promptValue)
          break
        case 'cancel':
          reject(state.promptValue)
          break
        default:
          reject(state.promptValue)
          break
      }

      removeMessageBox(app)
    }
  })
}

const removeMessageBox = (app: App) => {
  app.unmount()
}

export default MyMessageBox