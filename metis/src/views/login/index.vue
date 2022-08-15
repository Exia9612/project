<template>
  <div class="background">
    <div class="container">
      <div class="tit">登录</div>
      <input
        type="text"
        placeholder="账号"
        v-model="state.username">
      <input
        type="text"
        placeholder="密码"
        v-model="state.password">
      <button @click="handleLogin">登录</button>
      <span>
        没有账号?
        <router-link to="/register">去注册 </router-link>
        <a href="#">邮箱登录 </a>
        <a href="#">忘记密码</a>
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { loginReactive } from '../../type/login/index'
import { login } from '../../api/login'
import { AxiosResponse } from 'axios';
import { useRouter } from 'vue-router'

const router = useRouter()

const state = reactive<loginReactive>({
  username: '',
  password: ''
})

// const handleLogin = async () => {
//   const res = await login({
//     username: state.username,
//     password: state.password
//   })
//   redirectAfterLogin(res)
// }

const handleLogin = async () => {
  router.push({path: '/'})
}

const redirectAfterLogin = (res: AxiosResponse) => {
  if (res.status === 200) {
    localStorage.setItem('token', res.data)
    router.push({path: '/'})
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/common/common.scss';
@import '../../style/login/login.scss';
</style>