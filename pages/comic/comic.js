// pages/comic/comic.js

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      comic: comic,
    })
  },

  
})