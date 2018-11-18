
import {
  marRquest,
} from '../marvel'

/**
 * 查询角色列表
 */
function queryCharacters(params) {
  return marRquest('/characters', params)
}

/**
 * 查询 - 角色
 */
function queryCharacter(characterId, params) {
  return marRquest(`/characters/${characterId}`, params)
}

/**
 * 查询 - 角色 - 漫画
 */
function queryCharacterComics(characterId, params) {
  return marRquest(`/characters/${characterId}/comics`, params)
}

/**
 * 查询 - 角色 - 事件
 */
function queryCharacterEvents(characterId, params) {
  return marRquest(`/characters/${characterId}/events`, params)
}

/**
 * 查询 - 角色 - 系列
 */
function queryCharacterSeries(characterId, params) {
  return marRquest(`/characters/${characterId}/series`, params)
}

/**
 * 查询 - 角色 - 故事
 */
function queryCharactersStories(characterId, params) {
  return marRquest(`/characters/${characterId}/stories`, params)
}


export {
  queryCharacters,
  queryCharacter,
  queryCharacterComics,
  queryCharacterEvents,
  queryCharacterSeries,
  queryCharactersStories,
}