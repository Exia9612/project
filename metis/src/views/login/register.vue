<template>
  <div class="background">
    <div class="container">
      <div class="tit">注册</div>
      <input
        type="text"
        :placeholder="state.accountPlaceholder"
        v-model="state.username">
        <span
          class="errorTip"
          v-if="state.accountTip">
          {{state.accountTip}}
        </span>
      <input
        type="text"
        :placeholder="state.pwdPlaceholder"
        v-model="state.password">
        <span
          class="errorTip"
          v-if="state.pwdTip">
          {{state.pwdTip}}
        </span>
      <input
        type="text"
        placeholder="验证码">
      <button @click="register">注册</button>
      <span>
        已有账号?
        <router-link to="/login">去登录 </router-link>
        <a href="#">邮箱登录 </a>
        <a href="#">忘记密码</a>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { IRegisterParams, IRegisterReactive } from '../../type/login/index'
import { registerUser } from '../../api/user'

const state = reactive<IRegisterReactive>({
  username: '',
  password: '',
  accountPlaceholder: '账号',
  pwdPlaceholder: '密码',
  accountTip: '',
  pwdTip: ''
})

const checkRegisterDataValid = (registerData: IRegisterParams) => {
  if (!registerData.username) {
    state.accountTip = '请输入账户'
    return false
  }
  state.accountTip = ''
  if (!registerData.password) {
    state.pwdTip = '请输入密码'
    return false
  }
  state.pwdTip = ''
  return true
}

const register = async () => {
  if (!checkRegisterDataValid) return
  await registerUser({
    username: state.username,
    password: state.password
  })
}


</script>

<style lang="scss" scoped>
@import '../../style/login/login.scss';
</style>