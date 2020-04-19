import Vue from 'vue'
import toast from './index.vue'

// 声明一个构造函数 根据 vue 的原型进行扩展
const Toast = Vue.extend(toast)

// 把它挂载到全局上，让所有页面都可用
function showToast (options = { type: 'success', msg: 'OK' }, duration = 2000) {
  // 声明一个实例
  const app = new Toast({
    el: document.createElement('div'),
    data () {
      return {
        type: options.type,
        msg: options.msg,
        showWrap: true,
        over: true
      }
    }
  })
  document.body.appendChild(app.$el)
  setTimeout(() => {
    app.showWrap = false
  }, 1000)
  setTimeout(() => {
    app.over = false
  }, 1200)
}
export default showToast
