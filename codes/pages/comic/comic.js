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
   * 点击了 comic.urls 中的链接
   */
  onUrlClick(e) {
    console.log('onUrlClick, e = ', e)
    const url = e.currentTarget.dataset.url 
    wx.setClipboardData({
      data: url,
      success: () => {
        wx.showToast({
          title: '复制链接成功',
          icon: 'success',
          duration: 2000,
        })
      }
    })
  },

  /**
   * 点击了 resourceList 中的某个项
   */
  onResourceItemClick(e) {
    console.log('onResourceItemClick, e = ', e)
    const resourceURL = e.currentTarget.dataset.resourceuri 
    console.log('onResourceItemClick, resourceURL = ', resourceURL)
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