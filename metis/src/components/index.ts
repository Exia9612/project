import { App } from 'vue'
import MyButton from './button'
import MyMessageBox from './messageBox'

const components = [
  MyButton,
  MyMessageBox
]

const install = (app: App) => {
  components.forEach(component => {
    console.log(component.name, component)
    app.component(component.name, component)
  })
  app.config.globalProperties.$messageBox = MyMessageBox
}

export default install