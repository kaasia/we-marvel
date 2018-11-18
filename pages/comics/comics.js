// pages/comic/comic.js

import {  
  queryCharacterComics,
} from '../../apis/index'

let offset = 0
let comics = []

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    isLoading: false,
  },

  /**
   * 查询漫画数据
   * 
   * @param {number} id 
   */
  queryCharacterComicsWithParams(id) {
    queryCharacterComics(id, {
      offset: offset,
    }).then(data => {
      console.log('queryCharacterComicsWithParams: data =', data)
      const newComics = [...data.results]
      comics = [...comics, ...newComics]
      offset = offset + 20

      const newItems = []
      for(const nc of newComics) {
        newItems.push({
          id: nc.id, 
          thumbnail: nc.thumbnail,
          name: nc.title, 
          description: nc.description, 
          modified: nc.modified,
        })
      }
      this.setData({
        items: [...this.data.items, ...newItems],
        isLoading: false,
      })
    }).catch(e => {
      console.log('queryCharacterComicsWithParams: e =', e)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const { id, name } = options

    // 设置标题
    wx.setNavigationBarTitle({
      title: name,
    })

    // 查询漫画数据
    this.queryCharacterComicsWithParams(id)
  },

})