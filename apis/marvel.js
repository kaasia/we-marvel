
import {
  getMD5,
} from '../utils/index'

import {
  wxRequestIfStorage,
} from './wx'

const BASE_URL = 'http://gateway.marvel.com/v1/public'
const BASE_URL_S = 'https://gateway.marvel.com/v1/public'

const API_PUBLIC_KEY = '4dc572fd2a705860fabc560e57fa2ba9'
const API_PRIVATE_KEY = '1599c9b56b2d6766c5466371ca404d784310ab69'

/**
 * 生成完整请求地址
 * 
 * @param {string} resourceName - 资源名称，"资源完整地址" 或 "资源地址后缀"
 * @param {object} params - 额外参数
 * @returns {string} 完整请求地址
 */
function genUrl(resourceName, params = {}) {
  const ts = new Date().getTime()
  const hashStr = `${ts}${API_PRIVATE_KEY}${API_PUBLIC_KEY}`
  const hashValue = getMD5(hashStr).toLocaleLowerCase()

  let paramsStr = ''
  for (const key in params) {
    paramsStr += `&${key}=${params[key]}`
  }
  let newResourceName = resourceName.replace(BASE_URL, '').replace(BASE_URL_S, '')
  const url = `${BASE_URL_S}${newResourceName}?${paramsStr}&ts=${ts}&apikey=${API_PUBLIC_KEY}&hash=${hashValue}`
  return url
}

/**
 * 请求 Marvel 资源
 * 
 * - Error Code 
 *   - 409 - Missing API Key
 *   - 409 - Missing Hash 
 *   - 409 - Missing Timestamp 
 *   - 401 - Invalid Referer 
 *   - 401 - Invalid Hash 
 *   - 405 - Method Not Allowed 
 *   - 403 - Forbidden 
 * 
 * @param {string} resourceName - 资源名称，"资源完整地址" 或 "资源地址后缀"
 * @param {object} params - 额外参数
 * @returns {Promise}
 */
function marRquest(resourceName, params = {}) {
  console.log(`marRquest: resourceName = ${resourceName}, params = `, params)
  const url = genUrl(resourceName, params)

  // res: the response of marvel api
  return wxRequestIfStorage(url).then(res => {
    if (res.code == 200) {
      return res.data
    }
    return Promise.reject(e)
  })
}

export {
  marRquest,
}