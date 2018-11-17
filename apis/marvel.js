
import {
  getMD5,
} from '../utils/index'

import {
  wxRequest,
} from './wx'

const BASE_URL = 'https://gateway.marvel.com/v1/public'

const API_PUBLIC_KEY = '4dc572fd2a705860fabc560e57fa2ba9'
const API_PRIVATE_KEY = '1599c9b56b2d6766c5466371ca404d784310ab69'

function genUrl(resourceName, params = {}) {
  const ts = new Date().getTime()
  const hashStr = `${ts}${API_PRIVATE_KEY}${API_PUBLIC_KEY}`
  const hashValue = getMD5(hashStr).toLocaleLowerCase()

  // todo: init patams
  const paramsStr = ''
  const url = `${BASE_URL}/${resourceName}?${paramsStr}&ts=${ts}&apikey=${API_PUBLIC_KEY}&hash=${hashValue}`
  return url
}

/**
 * 请求 Marvel 资源
 */
async function marRquest(resourceName, params = {}) {
  console.log('queryCharacters, params = ', params)
  try {
    const url = genUrl(resourceName, params)
    // res: the response of marvel api
    const res = await wxRequest(url)
    if (res.code == 200) {
      return res.data
    }
    return Promise.reject(e)
  } catch(e) {
    return Promise.reject(e)
  } finally {
    console.log('queryCharacters, finish.')
  }
}

export {
  marRquest,
}