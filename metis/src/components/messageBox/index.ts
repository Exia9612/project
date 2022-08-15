import { App, ComponentPublicInstance, createApp } from 'vue'
import { IMessageBoxExpose, IMessageBoxOptions, MessageBoxFun, MessageBoxShortcuts } from './typing'
import MyMessageBox from './view/messageBox.vue'

const fields = ['confirm'] as const

export const MessageBox: MessageBoxFun & Partial<MessageBoxShortcuts> = (options: IMessageBoxOptions) => {
  const messageBoxComp = createApp(MyMessageBox, options)
  return new Promise((resolve, reject) => {
    displayMessageBox(messageBoxComp, resolve, reject)
  })
}

fields.forEach(field => {
  MessageBox[field] = (options: IMessageBoxOptions) => {
    options.filed = field
    return MessageBox(options)
  }
})

const displayMessageBox = (app: App, resolve: Function, reject: Function) => {
  const oDiv = document.createElement('div')
  const messageBoxInstance = app.mount(oDiv) as ComponentPublicInstance<IMessageBoxExpose>
  document.body.appendChild(oDiv)
  messageBoxInstance.setVisible(true)
}

export default MyMessageBox