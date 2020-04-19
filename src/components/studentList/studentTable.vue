<template>
  <table border="0">
    <!-- 表头区域 -->
    <thead>
      <tr>
        <th>学号</th>
        <th>姓名</th>
        <th>性别</th>
        <th>邮箱</th>
        <th>年龄</th>
        <th>手机号</th>
        <th>住址</th>
        <th>操作</th>
      </tr>
    </thead>
    <!-- 表格内容 -->
    <tbody id="student-body">
      <tr v-for="(item, index) in studentList" :key="index">
        <td>{{ item.sNo }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.sex == '0' ? '男' : '女' }}</td>
        <td>{{ item.email }}</td>
        <td>
          {{ new Date().getFullYear() - item.birth }}
        </td>
        <td>{{ item.phone }}</td>
        <td>{{ item.address }}</td>
        <td>
          <button class="btn edit" @click="edit(item)">编辑</button>
          &nbsp;
          <button class="btn del" @click="delStudent(item.sNo)">删除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data () {
    return {
      // studentList: []
    }
  },
  created () {
    // studentListApi.findByPage().then(data => {
    //   this.studentList = data.data.data.findByPage
    //   console.log('---', this.studentList)
    // }).catch(err => console.log(err))
  },
  computed: {
    // 根据页数获取对应列表数据
    ...mapState(['studentList'])
  },
  methods: {
    // 调用 mutations 中的方法 给 state 中的 editStudent 赋值
    ...mapMutations(['setEditStudent', 'setShowModal']),
    ...mapActions(['delBySno']),
    edit (item) {
      this.setEditStudent(item)
      this.setShowModal(true)
    },
    delStudent (sNo) {
      this.delBySno(sNo).then(data => {
        this.$toast({
          type: 'success',
          msg: data.data.msg
        })
      })
    }
  }
}
</script>

<style>
</style>
