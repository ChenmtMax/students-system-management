<template>
  <div id="app" class="wrapper">
    <system-header />
    <system-left-menu />
    <div class="right-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import systemHeader from '@/components/systemHeader.vue'
import systemLeftMenu from '@/components/systemLeftMenu.vue'

export default {
  components: {
    systemHeader,
    systemLeftMenu
  }
}
</script>

<style lang="scss">
@import 'assets/css/index.css'
</style>
