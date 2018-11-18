
import {
  marRquest,
} from '../marvel'

/**
 * 查询角色
 */
function queryCharacters() {
  return marRquest('/characters')
}

/**
 * 查询漫画
 */
function queryComic(comicId) {
  return marRquest(`/characters/${comicId}/series`)
}


export {
  queryCharacters,
  queryComic,
}