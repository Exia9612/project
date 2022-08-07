export interface loginReactive {
  username: string,
  password: string,
  email?: string,
  nickname?: string,
  headImg?: string,
}

export interface IRegisterParams {
  username: string,
  password: string,
}

export interface IRegisterReactive extends IRegisterParams {
  accountPlaceholder: string,
  pwdPlaceholder: string,
  accountTip: string,
  pwdTip: string
}

export interface ILogin {
  username: string,
  password: string,
}