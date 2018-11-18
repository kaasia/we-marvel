
import {
  getMD5,
} from '../utils/index'

import {
  wxRequest,
} from './wx'

const BASE_URL = 'http://gateway.marvel.com/v1/public'
const BASE_URL_S = 'https://gateway.marvel.com/v1/public'

const API_PUBLIC_KEY = '4dc572fd2a705860fabc560e57fa2ba9'
const API_PRIVATE_KEY = '1599c9b56b2d6766c5466371ca404d784310ab69'

function genUrl(resourceName, params = {}) {
  const ts = new Date().getTime()
  const hashStr = `${ts}${API_PRIVATE_KEY}${API_PUBLIC_KEY}`
  const hashValue = getMD5(hashStr).toLocaleLowerCase()

  // todo: init patams
  const paramsStr = ''
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
 */
function marRquest(resourceName, params = {}) {
  console.log('queryCharacters, params = ', params)
  const url = genUrl(resourceName, params)

  // res: the response of marvel api
  return wxRequest(url).then(res => {
    if (res.code == 200) {
      return res.data
    }
    return Promise.reject(e)
  })
}

export {
  marRquest,
}