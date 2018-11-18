
/**
 * 封装了微信的网络请求
 * 
 * @param {string} url - 完整请求地址
 * @returns {Promise}
 */
function wxRequest(url) {
  console.log(`wx.request: url = ${url}`)
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      success: (res) => {
        // res: the response of wx.request
        if (res.statusCode == 200) {
          resolve(res.data)
          return
        }
        reject(new Error(`statusCode = ${res.statusCode}.`))
      },
      fail: (e) => {
        reject(e)
      }
    })
  })
}

/**
 * 获取微信缓存
 * 
 * @param {string} key - 本地缓存中指定的 key	
 * @returns {Promise<object|string>} 
 */
function wxGetStorage(key) {
  console.log(`wx.getStorage: key = ${key}`)
  return new Promise((resolve, reject) => {
    wx.getStorage({
      key: key,
      success: (res) => {
        if (res.data) {
          resolve(res.data)
          return
        }
        reject(new Error(`no storage for key = ${key}.`))
      },
      fail: (e) => {
        reject(e)
      }
    })
  })
}

/**
 * 设置微信缓存
 * 
 * @param {string} key - 本地缓存中指定的 key	
 * @param {object} data - key对应的内容
 * @returns {Promise<object|string>}
 */
function wxSetStorage(key, data) {
  console.log(`wx.setStorage: key = ${key}, data = `, data)
  return new Promise((resolve, reject) => {
    wx.setStorage({
      key: key,
      data: data,
      success: () => {
        resolve(data)
      },
      fail: (e) => {
        reject(e)
      }
    })
  })
}

/**
 * 发起微信请求(请求结果可能来自缓存)
 * 
 * - 有缓存的话就使用缓存
 * - 没缓存的话请求成功后将数据进行缓存
 * 
 * @param {string} url - 完整请求地址
 * @returns {Promise}
 */
function wxRequestIfStorage(url) {
  console.log(`wxRequestIfStorage: url = ${url}`)
  const key = url.substring(0, url.indexOf('&ts='))
  return wxGetStorage(key).then(data => {
    console.log(`有缓存：key = ${key}`)

    return Promise.resolve(data)
  }).catch(e => {
    console.log(`没有缓存：key = ${key}, e = `, e)

    return wxRequest(url).then(data => {
      console.log(`微信请求成功：url = ${url}`)
      wxSetStorage(key, data).then(data => {
        console.log(`设置缓存成功：key = ${key}`)
      }).catch(e => {
        console.log(`设置缓存失败：key = ${key}, e = `, e)
      })
      return Promise.resolve(data)
    })   
  })
}

export {
  wxRequest,
  wxGetStorage,
  wxSetStorage,
  wxRequestIfStorage,
}