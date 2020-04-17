<template>
  <div class="student-list content" id="student-list">
    <search-student />
    <student-table />
    <turn-page />
    <modal />
  </div>
</template>

<script>
import searchStudent from '@/components/studentList/searchStudent.vue'
import studentTable from '@/components/studentList/studentTable.vue'
import turnPage from '@/components/studentList/turnPage.vue'
import modal from '@/components/studentList/modal.vue'
import studentListApi from '@/api/studentListApi.js'

export default {
  created () {
    studentListApi.findByPage().then(data => {
      console.log(data)
    }).catch(err => console.log(err))
  },
  components: {
    searchStudent,
    studentTable,
    turnPage,
    modal
  }
}
</script>

<style>
</style>
