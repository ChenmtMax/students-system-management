<template>
  <div class="search">
    <label for="search-word">关键字搜索:</label>
    <input type="text" v-model="keyWord" id="search-word">
    <button id="search-submit" @click="search">搜索</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      keyWord: ''
    }
  },
  methods: {
    search () {
      this.$store.commit('setKeyWord', this.keyWord)
      this.$store.dispatch('getStudentList', 1)
    }
  }
}
</script>

<style>
</style>
