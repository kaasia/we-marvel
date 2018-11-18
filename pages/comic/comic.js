// pages/comic/comic.js

import {  
  queryComic,
} from '../../apis/index'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    comics: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const { id, name } = options

    // 设置标题
    wx.setNavigationBarTitle({
      title: name
    })

    // 查询漫画数据
    queryComic(id).then(data => {
      console.log('queryComic: data =', data)
      this.setData({
        comics: [...this.data.comics, ...data.results]
      })
    }).catch(e => {
      console.log('queryComic: e =', e)
    })
  },

})