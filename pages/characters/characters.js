// pages/characters.js

import {  
  queryCharacters,
} from '../../apis/index'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    characters: [],
  },

  onItemClick: e => {
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
    queryCharacters().then(data => {
      console.log('queryCharacters: data =', data)
      this.setData({
        characters: [...this.data.characters, ...data.results]
      })
    }).catch(e => {
      console.log('queryCharacters: e =', e)
    })
  },

})