// pages/characters.js

import {  
  queryCharacters,
} from '../../apis/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    offset: 0,
    characters: [],
    isLoading: false,
  },

  /**
   * 查询漫威角色，带具体参数
   */
  queryCharactersWithParams() {
    this.setData({
      isLoading: true,
    })

    const offset = this.data.offset
    queryCharacters({
      offset: offset,
    }).then(data => {
      console.log('queryCharacters: data =', data)
      this.setData({
        offset: offset + 20,
        characters: [...this.data.characters, ...data.results],
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
    const character = e.currentTarget.dataset.character
    const id = character.id
    const name = character.name
    wx.navigateTo({
      url: `../comic/comic?id=${id}&name=${name}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.queryCharactersWithParams()
  },

})