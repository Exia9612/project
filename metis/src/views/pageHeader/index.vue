<template>
  <header>
    <my-button>Click</my-button>
    <i
      class="iconfont icon-toggle-right"
      @click="handleLogout">
    </i>
  </header>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter()

defineOptions({
  name: 'page-header'
})

const handleLogout = () => {
  localStorage.removeItem('token')
  router.push('/login')
}
</script>

<style lang="scss" scoped>
@import '../../style/header/header.scss';
</style>