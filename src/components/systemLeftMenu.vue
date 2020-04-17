<template>
  <div class="left-menu">
    <dl id="menu">
      <dt>学生管理</dt>
      <router-link data-id="student-list" tag="dd" to="/student_list">学生列表</router-link>
      <router-link data-id="add-student" tag="dd" to="/add_student">新增学生</router-link>
    </dl>
  </div>
</template>

<script>
export default {
}
</script>

<style>
</style>
