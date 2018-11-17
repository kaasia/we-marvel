
import {
  marRquest,
} from '../marvel'

/**
 * 查询角色
 */
function queryCharacters() {
  console.log('queryCharacters')
  return marRquest('characters')
}


export {
  queryCharacters,
}