import studentListApi from '@/api/studentListApi.js'

const state = {
  studentList: [],
  editStudent: null,
  showModal: false,
  count: 0,
  nowPage: 1,
  keyWord: ''
}
const mutations = {
  setShowModal (state, bool) {
    state.showModal = bool
  },
  setCount (state, count) {
    state.count = count
  },
  setNowPage (state, page) {
    if (page === -1) {
      if (state.nowPage > 1) {
        state.nowPage--
      }
    } else if (page === 0) {
      if (state.nowPage < Math.ceil(state.count / 10)) {
        state.nowPage++
      }
    } else {
      state.nowPage = page
    }
  },
  setStudentList (state, list) {
    state.studentList = list
  },
  setEditStudent (state, student = {}) {
    // 针对的是某个学生的信息编辑
    state.editStudent = student
  },
  setKeyWord (state, keyWord) {
    state.keyWord = keyWord
  }
}
const actions = {
  // 当前请求数据页数默认为 1，根据页数获取对应页数列表数据
  getStudentList ({
    commit,
    state
  }, page) {
    if (page) {
      commit('setNowPage', page)
    }
    if (state.keyWord) {
      // state.nowPage
      studentListApi.studentSearch(state.keyWord, page).then(data => {
        commit('setStudentList', data.data.data.searchList)
        commit('setCount', data.data.data.cont)
      })
    } else {
      // 没传页数，直接用 state 中的页数
      studentListApi.findByPage(state.nowPage)
        .then(data => {
          commit('setStudentList', data.data.data.findByPage)
          commit('setCount', data.data.data.cont)
        })
        .catch(err => console.log(err))
    }
  },
  // 将修改信息提交
  updateStudent ({
    commit,
    state
  }, options) {
    // 结果返回 需要做非空提示
    return studentListApi.updateStudent(options)
      .then(msg => {
        if (msg.data.status === 'fail') {
          return Promise.reject(msg.data.msg)
        } else {
          commit('setShowModal', false)
          Object.assign(state.editStudent, options)
          return msg.data.msg
        }
      })
  },
  delBySno ({
    dispatch,
    commit,
    state
  }, sNo) {
    return studentListApi.delBySno(sNo).then(data => {
      // 判断下 删除当前数据后，页数是否刚好会少一页，是则不让请求原有页数的数据
      // 例如当前删除的是第五页仅有的那一条数据，那么总页数只剩4页，这时候要限制不让请求第五页数据。
      if (state.nowPage > Math.ceil(state.count - 1) / 10) {
        dispatch('getStudentList', state.nowPage - 1)
      } else {
        dispatch('getStudentList')
      }
      return data
    })
  }
}

export default {
  state,
  mutations,
  actions
}
