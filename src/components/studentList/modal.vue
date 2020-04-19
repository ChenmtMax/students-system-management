<template>
  <div class="modal" id="modal">
    <div class="mask" @click="hideModal"></div>
    <div class="modal-content">
      <h2>编辑信息</h2>
      <form action="#" id="edit-student-form" class="add-student-form">
        <div>
          <label for="name">姓名</label>
          <input type="text" ref="name" :value="editStudent.name" @input="editStudentInp('name', $event.target.value)" name="name" autocomplete="off">
        </div>
        <div class="sex">
          <label for="sex">性别</label>
          <input type="radio" name="sex" ref="sex" :checked="editStudent.sex == 0" @change="editStudentInp('sex', 0)" value="0">
          <span>男</span>
          <input type="radio" name="sex" :checked="editStudent.sex == 1" @change="editStudentInp('sex', 1)" value="1"><span>女</span>
        </div>
        <div>
          <label for="sNo">学号</label>
          <input type="text" :value="editStudent.sNo" name="sNo" readonly>
        </div>
        <div>
          <label for="email">邮箱</label>
          <input type="text" ref="email" :value="editStudent.email" @input="editStudentInp('email', $event.target.value)" name="email">
        </div>
        <div>
          <label for="birth">出生年</label>
          <input type="text" ref="birth" :value="editStudent.birth" name="birth" @input="editStudentInp('birth', $event.target.value)">
        </div>
        <div>
          <label for="phone">手机号</label>
          <input type="text" ref="phone" :value="editStudent.phone" name="phone" @input="editStudentInp('phone', $event.target.value)">
        </div>
        <div>
          <label for="address">住址</label>
          <input type="text" ref="address" :value="editStudent.address" name="address" @input="editStudentInp('address', $event.target.value)">
        </div>
        <div>
          <label for=""></label>
          <input type="button" value="提交" class="btn" @click="handleSubmit" id="edit-submit">
          <input type="button" value="重置" class="btn" @click="handleReset">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      student: {}
    }
  },
  computed: {
    ...mapState(['editStudent'])
  },
  methods: {
    hideModal () {
      this.$store.commit('setShowModal', false)
    },
    editStudentInp (key, value) {
      this.student[key] = value
    },
    handleSubmit () {
      // 合并对象为一个新对象返回
      const stuData = Object.assign({}, this.editStudent, this.student)
      this.updateStudent(stuData)
        .then(msg => this.$toast({
          type: 'success',
          msg: msg
        }))
        .catch(err => this.$toast({
          type: 'fail',
          msg: err
        }))
    },
    handleReset () {
      // 借助 ref 获取属性 置空，同时，将 this.student 的属性都置空
      for (const prop in this.$refs) {
        this.student[prop] = this.$refs[prop].value = ''
      }
      this.$refs.sex.checked = true
      this.student.sex = 0
    },
    ...mapActions(['updateStudent'])
  }
}
</script>

<style>
</style>
