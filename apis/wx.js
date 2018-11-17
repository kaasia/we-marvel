
/**
 * 封装了微信的网络请求
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
        reject(new Error(`statusCode = ${res.statusCode}`))
      },
      fail: (e) => {
        reject(e)
      }
    })
  })
}

export {
  wxRequest,
}