// pages/comic/comic.js

import {
  formatDate,
} from '../../utils/index'

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    modifiedFormatted: '',
    comic: undefined,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const comic = app.globalData.comic
    
    console.log('this.comic = ', comic)
    this.setData({
      modifiedFormatted: formatDate(new Date(comic.modified)),
      comic: comic,
    })
  },

  
})