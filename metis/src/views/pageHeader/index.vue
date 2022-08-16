<template>
  <header>
    <my-button @click="test">
      click
    </my-button>
    <i
      class="iconfont icon-toggle-right"
      @click="handleLogout">
    </i>
  </header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { MessageBox } from '@/components/messageBox';

const router = useRouter()

defineOptions({
  name: 'page-header'
})

const handleLogout = () => {
  MessageBox.prompt!({}).then((value) => console.log(value))
  // localStorage.removeItem('token')
  // router.push('/login')
}

const test = () => {
  console.log('hello')
}
</script>

<style lang="scss" scoped>
@import '../../style/header/header.scss';
</style>