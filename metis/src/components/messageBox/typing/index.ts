import { reactive } from 'vue'

export interface IMessageBoxOptions {
  [index: string]: string | undefined,
  field?: string,
  type?: string,
  title?: string,
  content?: string,
  confirmButtonText?: string,
  cancelButtonText?: string
}

export interface IMessageBoxExpose {
  setVisible: (flag: boolean) => void,
  state: IMessageBoxReactive
}

export interface IMessageBoxReactive {
  visible: boolean,
  promptValue: string,
  action: 'cancel' | 'confirm' | 'unknown'
}

export const fields = ['confirm', 'prompt'] as const

export type MessageBoxShortcuts<T extends readonly string[]> = {
  [V in T[number]]: MessageBoxFun
}

export type MessageBoxFun = (options: IMessageBoxOptions) => Promise<unknown>
