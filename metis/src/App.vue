<template>
  <page-header v-if="$route.meta.displayHeader"></page-header>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageHeader from './views/pageHeader/index.vue'

console.log(pageHeader)

export default defineComponent({
  name: 'header',
  components: {
    pageHeader: pageHeader
  }
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
