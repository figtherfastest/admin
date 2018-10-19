import axios from 'axios'

export function getRequest (url, data) {
  return axios.get(url, data).then((res) => {
    return Promise.resolve(res)
  })
}

export function getParamsRequest (url,data) {
  return axios.get(url, {
    params:data
  }).then((res) => {
    return Promise.resolve(res)
  })
}

export function postRequest (url, data) {
  return axios.post(url, data).then((res) => {
    return Promise.resolve(res)
  })
}


