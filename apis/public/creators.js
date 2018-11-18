
import {
  marRquest,
} from '../marvel'

/**
 * 查询作者列表
 */
function queryCreators(params) {
  return marRquest('/creators', params)
}

/**
 * 查询 - 作者
 */
function queryCreatorById(creatorId, params) {
  return marRquest(`/creators/${creatorId}`, params)
}

/**
 * 查询 - 作者 - 角色列表
 */
function queryCreatorCharacters(creatorId, params) {
  return marRquest(`/creators/${creatorId}/characters`, params)
}

/**
 * 查询 - 作者 - 事件列表
 */
function queryCreatorEvents(creatorId, params) {
  return marRquest(`/creators/${creatorId}/events`, params)
}

/**
 * 查询 - 作者 - 系列列表
 */
function queryCreatorSeries(creatorId, params) {
  return marRquest(`/creators/${creatorId}/series`, params)
}

/**
 * 查询 - 作者 - 故事列表
 */
function queryCreatorStories(creatorId, params) {
  return marRquest(`/creators/${creatorId}/stories`, params)
}


export {
  queryCreators,
  queryCreatorById,
  queryCreatorCharacters,
  queryCreatorEvents,
  queryCreatorSeries,
  queryCreatorStories,
}