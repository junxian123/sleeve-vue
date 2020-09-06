import axios from 'axios'
import { config } from '@/config/config.js'
const _axios = axios.create({
  baseURL: config.api_url,
  headers: {
    appkey: config.appkey
  }
})
async function get (url, params = {}) {
  const res = await _axios({
    method: 'get',
    url,
    params,
  })
  return res.data
}

export {
  get
}
