export interface IMessageBoxOptions {
  [index: string]: string | undefined,
  filed?: string,
  type?: string,
  content?: string,
  confirmButtonText?: string,
  cancelButtonText?: string
}

export interface IMessageBoxExpose {
  setVisible: (flag: boolean) => void
}

export type MessageBoxFun = (options: IMessageBoxOptions) => Promise<unknown>

export type MessageBoxShortcuts = {
  confirm: MessageBoxFun
}
