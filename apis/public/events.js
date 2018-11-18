
import {
  marRquest,
} from '../marvel'

/**
 * 查询事件列表
 */
function queryEvents(params) {
  return marRquest('/events', params)
}

/**
 * 查询 - 事件
 */
function queryEventById(eventId, params) {
  return marRquest(`/events/${eventId}`, params)
}

/**
 * 查询 - 事件 - 角色列表
 */
function queryEventCharacters(eventId, params) {
  return marRquest(`/events/${eventId}/characters`, params)
}

/**
 * 查询 - 事件 - 漫画列表
 */
function queryEventComics(eventId, params) {
  return marRquest(`/events/${eventId}/comics`, params)
}

/**
 * 查询 - 事件 - 作者列表
 */
function queryEventCreators(eventId, params) {
  return marRquest(`/events/${eventId}/creators`, params)
}

/**
 * 查询 - 事件 - 系列列表
 */
function queryEventSeries(eventId, params) {
  return marRquest(`/events/${eventId}/series`, params)
}

/**
 * 查询 - 事件 - 故事列表
 */
function queryEventStories(eventId, params) {
  return marRquest(`/events/${eventId}/stories`, params)
}


export {
  queryEvents,
  queryEventById,
  queryEventCharacters,
  queryEventComics,
  queryEventCreators,
  queryEventSeries,
  queryEventStories,
}