// pages/characters.js

import {  
  queryCharacters,
} from '../../apis/index'

let offset = 0
let characters = []

Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [],
    isLoading: false,
  },

  /**
   * 查询漫威角色，带具体参数
   */
  queryCharactersWithParams() {
    this.setData({
      isLoading: true,
    })

    queryCharacters({
      offset: offset,
    }).then(data => {
      console.log('queryCharacters: data =', data)
      const newCharacters = [...data.results]
      characters = [...characters, ...newCharacters]
      offset = offset + 20

      const newItems = []
      for(const nc of newCharacters) {
        newItems.push({
          id: nc.id, 
          thumbnail: nc.thumbnail,
          name: nc.name, 
          description: nc.description, 
          modified: nc.modified,
        })
      }
      this.setData({
        items: [...this.data.items, ...newItems],
        isLoading: false,
      })
    }).catch(e => {
      console.log('queryCharacters: e =', e)
    })
  },

  /**
   * 列表滚动到底部
   */
  onScrollToLower(e) {
    console.log('onScrollToLower')
    this.queryCharactersWithParams()
  },

  /**
   * 点击列表项时回调
   */
  onItemClick(e) {
    console.log('e = ', e)
    const item = e.currentTarget.dataset.item
    const id = item.id
    const name = item.name
    wx.navigateTo({
      url: `../comics/comics?id=${id}&name=${name}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryCharactersWithParams()
  },

})