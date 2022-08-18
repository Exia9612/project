<template>
  <header>
    <i
      class="iconfont icon-user"
      @click="handleClickUser">
    </i>
    <i
      class="iconfont icon-toggle-right"
      @click="handleLogout">
    </i>
  </header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { MessageBox } from '@/components/messageBox';
import { useStore } from 'vuex';

const router = useRouter()
const store = useStore()

defineOptions({
  name: 'page-header'
})

const handleLogout = () => {
  MessageBox({
    title: 'confirm',
    content: 'logout!',
    cancelButtonText: 'cancel',
    confirmButtonText: 'confirm'
  }).then(() => {
    localStorage.removeItem('token')
    router.push('/login')
  }).catch(() => {})
}

const handleClickUser = () => {
  router.push('/user')
}
</script>

<style lang="scss" scoped>
@import '../../style/header/header.scss';
</style>