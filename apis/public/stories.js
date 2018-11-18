
import {
  marRquest,
} from '../marvel'

/**
 * 查询故事列表
 */
function queryStories(params) {
  return marRquest('/stories', params)
}

/**
 * 查询 - 故事
 */
function queryStoryById(storyId, params) {
  return marRquest(`/stories/${storyId}`, params)
}

/**
 * 查询 - 故事 - 角色列表
 */
function queryStoryCharacters(storyId, params) {
  return marRquest(`/stories/${storyId}/characters`, params)
}

/**
 * 查询 - 故事 - 漫画列表
 */
function queryStoryComics(storyId, params) {
  return marRquest(`/stories/${storyId}/comics`, params)
}

/**
 * 查询 - 故事 - 作者列表
 */
function queryStoryCreators(storyId, params) {
  return marRquest(`/stories/${storyId}/creators`, params)
}

/**
 * 查询 - 故事 - 故事列表
 */
function queryStoryEvents(storyId, params) {
  return marRquest(`/stories/${storyId}/events`, params)
}

/**
 * 查询 - 故事 - 系列列表
 */
function queryStorySeries(storyId, params) {
  return marRquest(`/stories/${storyId}/series`, params)
}


export {
  queryStories,
  queryStoryById,
  queryStoryCharacters,
  queryStoryComics,
  queryStoryCreators,
  queryStoryEvents,
  queryStorySeries,
}