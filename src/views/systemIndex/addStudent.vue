<template>
  <div class="add-student content" id="add-student">
    <form action="#" id="add-student-form" class="add-student-form">
      <div>
        <label for="name">姓名</label>
        <input type="text" name="name" v-model="user.name" autocomplete="off">
      </div>
      <div class="sex">
        <label for="sex">性别</label>
        <input type="radio" name="sex" v-model="user.sex" checked value="0">
        <span>男</span>
        <input type="radio" name="sex" v-model="user.sex" value="1"><span>女</span>
      </div>
      <div>
        <label for="sNo">学号</label>
        <input type="text" id="sNo" v-model="user.sNo" name="sNo">
      </div>
      <div>
        <label for="email">邮箱</label>
        <input type="text" id="email" v-model="user.email" name="email">
      </div>
      <div>
        <label for="birth">出生年</label>
        <input type="text" id="birth" v-model="user.birth" name="birth">
      </div>
      <div>
        <label for="phone">手机号</label>
        <input type="text" id="phone" v-model="user.phone" name="phone">
      </div>
      <div>
        <label for="address">住址</label>
        <input type="text" id="address" v-model="user.address" name="address">
      </div>
      <div>
        <label for=""></label>
        <input type="button" value="提交" class="btn" @click="submit" id="add-submit">
        <input type="button" value="重置" class="btn" @click="reset">
      </div>
    </form>
  </div>
</template>

<script>
import studentListApi from '@/api/studentListApi.js'

export default {
  data () {
    return {
      user: {
        sex: 0,
        name: '',
        birth: '',
        phone: '',
        address: '',
        sNo: '',
        email: ''
      }
    }
  },
  methods: {
    submit () {
      studentListApi.addStudent(this.user).then(msg => {
        if (msg.data.status === 'success') {
          this.$toast({
            type: 'success',
            msg: msg.data.msg
          })
          this.$store.dispatch('getStudentList', 1).then(() => {
            this.$router.push('/student_list')
            // 重置表单
            this.reset()
          })
        } else {
          this.$toast({
            type: 'fail',
            msg: msg.data.msg
          })
        }
      })
    },
    reset () {
      this.user = {
        sex: 0,
        name: '',
        birth: '',
        phone: '',
        address: '',
        sNo: '',
        email: ''
      }
    }
  }
}
</script>

<style>
</style>
