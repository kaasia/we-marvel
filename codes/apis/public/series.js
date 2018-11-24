
import {
  marRquest,
} from '../../marvel/index'

/**
 * 查询系列列表
 */
function querySeries(params) {
  return marRquest('/series', params)
}

/**
 * 查询 - 系列
 */
function querySeriesById(seriesId, params) {
  return marRquest(`/series/${seriesId}`, params)
}

/**
 * 查询 - 系列 - 角色列表
 */
function querySeriesCharacters(seriesId, params) {
  return marRquest(`/series/${seriesId}/characters`, params)
}

/**
 * 查询 - 系列 - 漫画列表
 */
function querySeriesComics(seriesId, params) {
  return marRquest(`/series/${seriesId}/comics`, params)
}

/**
 * 查询 - 系列 - 作者列表
 */
function querySeriesCreators(seriesId, params) {
  return marRquest(`/series/${seriesId}/creators`, params)
}

/**
 * 查询 - 系列 - 系列列表
 */
function querySeriesEvents(seriesId, params) {
  return marRquest(`/series/${seriesId}/events`, params)
}

/**
 * 查询 - 系列 - 故事列表
 */
function querySeriesStories(seriesId, params) {
  return marRquest(`/series/${seriesId}/stories`, params)
}


export {
  querySeries,
  querySeriesById,
  querySeriesCharacters,
  querySeriesComics,
  querySeriesCreators,
  querySeriesEvents,
  querySeriesStories,
}