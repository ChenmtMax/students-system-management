<template>
  <div class="student-list content" id="student-list">
    <search-student />
    <student-table />
    <turn-page />
    <transition name="modal">
      <modal v-if="showModal" />
    </transition>
  </div>
</template>

<script>
import searchStudent from '@/components/studentList/searchStudent.vue'
import studentTable from '@/components/studentList/studentTable.vue'
import turnPage from '@/components/studentList/turnPage.vue'
import modal from '@/components/studentList/modal.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    searchStudent,
    studentTable,
    turnPage,
    modal
  },
  created () {
    // 调用 action 中获取列表数据的方法。
    // 页数可以传 1 也可以不传，因为 state 中的 nowPage 默认值有设为 1
    this.getStudentList()
  },
  computed: {
    ...mapState(['showModal'])
  },
  methods: {
    ...mapActions(['getStudentList'])
  }
}
</script>

<style lang="scss">
  // transition 原始状态的操作有 v-enter, v-leave, v-enter-to, v-leave-to
  // 过渡状态 v-enter-avtive, v-leave-active
  .modal-enter, .modal-leave-to {
    height: 0;
    top: -100%;
  }
  .modal-enter-to, .modal-leave {
    height: 100%;
    top: 0;
  }
  .modal-enter-active, .modal-leave-active {
    transition: all .7s linear;
  }
</style>
