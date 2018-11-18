
import {
  marRquest,
} from '../marvel'

/**
 * 查询漫画列表
 */
function queryComics(params) {
  return marRquest('/comics', params)
}

/**
 * 查询 - 漫画
 */
function queryComicById(comicId, params) {
  return marRquest(`/comics/${comicId}`, params)
}

/**
 * 查询 - 漫画 - 角色列表
 */
function queryComicCharacters(comicId, params) {
  return marRquest(`/comics/${comicId}/characters`, params)
}

/**
 * 查询 - 漫画 - 作者列表
 */
function queryComicCreators(comicId, params) {
  return marRquest(`/comics/${comicId}/creators`, params)
}

/**
 * 查询 - 漫画 - 事件列表
 */
function queryComicEvents(comicId, params) {
  return marRquest(`/comics/${comicId}/events`, params)
}

/**
 * 查询 - 漫画 - 事件列表
 */
function queryComicEvents(comicId, params) {
  return marRquest(`/comics/${comicId}/events`, params)
}

/**
 * 查询 - 漫画 - 系列列表
 */
function queryComicSeries(comicId, params) {
  return marRquest(`/comics/${comicId}/series`, params)
}

/**
 * 查询 - 漫画 - 故事列表
 */
function queryComicStories(comicId, params) {
  return marRquest(`/comics/${comicId}/stories`, params)
}


export {
  queryComics,
  queryComicById,
  queryComicCharacters,
  queryComicCreators,
  queryComicEvents,
  queryComicSeries,
  queryComicStories,
}