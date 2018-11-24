
/**
 * 格式化时间
 * 
 * @returns 如 2013/10/25 02:32:08
 */
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 * 格式化时间
 * 
 * @returns 如 2013-10-25
 */
const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    return '...'
  }

  const result = [year, month, day].map(formatNumber).join('-')
  return result === '1970-01-01' ? `before ${result}` : result
}

/**
 * 格式化数字
 */
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export {
  formatTime,
  formatDate,
}
