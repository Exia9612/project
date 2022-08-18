<template>
  <div id="hello">
    <page-header v-if="$route.meta.displayHeader"></page-header>
    <router-view/>
  </div>
</template>

<script setup lang="ts">
import pageHeader from './views/pageHeader/index.vue'

defineOptions({
  name: 'app'
})

</script>

<style lang="scss">
@import './style/common/common.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
