import axios from 'axios'

const instance = axios.create({
  baseURL: window.api.url,
  timeout: 5000
})

// status < 500 不会抛错误
instance.defaults.validateStatus = status => {
  return status < 500
}
//  http request 拦截器
instance.interceptors.request.use(
  config => {
    // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
    config.data = JSON.stringify(config.data)
    config.headers = {
      'Content-Type': 'application/json'
      // 'Content-Type':'application/x-www-form-urlencoded'
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// http response 拦截器
instance.interceptors.response.use(
  response => {
    if (response.data.code !== 'OK') {
      /*  router.push({
        path:"/login",
        querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
      })  */
      console.log(response.data.msg)
    }
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data)
      .then(response => {
        return resolve(response.data)
      }, err => {
        return reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function del (url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.delete(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.put(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export default instance
