import axios from '../../axios.js'
import urls from '@/utils/URLs.js'

const size = 10
const api = {
  findByPage (page = 1) {
    return axios.get(urls.findByPage, {
      params: {
        page,
        size
      }
    })
  },
  updateStudent (data) {
    return axios.get(urls.updateStudent, {
      params: {
        ...data
      }
    })
  },
  delBySno (sNo) {
    return axios.get(urls.delBySno, {
      params: {
        sNo
      }
    })
  },
  studentSearch (search, page) {
    return axios.get(urls.searchStudent, {
      params: {
        sex: -1,
        search,
        page,
        size
      }
    })
  },
  addStudent (data) {
    return axios.get(urls.addStudent, {
      params: {
        ...data
      }
    })
  }
}
export default api

// import Axios from 'axios'
// import urls from './../utils/URLs.js'

// const size = 10
// const appKey = {
//   appkey: 'chenmanting_1556115839245'
// }

// const myAjax = Axios.create({
//   params: {
//     ...appKey
//   },
//   method: 'get',
//   baseURL: urls.baseURL
// })

// export default {
//   findByPage (page = 1) {
//     // 返回一个请求 请求路径在 urls 中已配置好
//     return myAjax.get(urls.findByPage, {
//       params: {
//         page,
//         size
//       }
//     })
//   }
// }

// baseURL: 'http://open.duyiedu.com',
//   findByPage : '/api/student/findByPage',
//   delBySno : '/api/student/delBySno',
//   updateStudent : '/api/student/updateStudent',
//   addStudent : '/api/student/addStudent',
//   studentSearch : '/api/student/searchStudent'
