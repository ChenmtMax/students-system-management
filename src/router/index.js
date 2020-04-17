import Vue from 'vue'
import VueRouter from 'vue-router'
import addStudent from '../views/systemIndex/addStudent.vue'
import studentList from '../views/systemIndex/studentList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/add_student',
    name: 'addStudent',
    component: addStudent
  }, {
    path: '/student_list',
    name: 'studentList',
    component: studentList
  }, {
    path: '*',
    redirect: '/student_list'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active' // 设置导航栏选中样式名
})

export default router
