// pages/comic/comic.js

import {  
  queryCharacterComics,
} from '../../apis/index'

const app = getApp()

Page({

  /** 请求数据接口入参，偏移量 */
  offset: 0,
  /** 角色对应的漫画列表 */
  comics: [],
  /** 角色对应的漫画总数 */
  totalComicsNumber: Number.MAX_VALUE,
  /** 角色 id */
  id: 0,
  /** 角色名称 */
  name: '',
  
  data: {
    /** 列表数据 */
    items: [],
    /** true 正在加载；false 没有在加载 */
    isLoading: false,
    /** true 已加载全部漫画数据；false 未全部加载 */
    isAllLoaded: false,
  },

  /**
   * 查询漫画数据
   * 
   * @param {number} id 
   */
  queryCharacterComicsWithParams(id) {
    if (this.data.isAllLoaded) {
      console.log('已加载该角色的全部漫画')
      return
    }

    this.setData({
      isLoading: true,
    })
    
    queryCharacterComics(id, {
      offset: this.offset,
    }).then(data => {
      console.log('queryCharacterComicsWithParams: data =', data)
      const newComics = [...data.results]
      this.offset = this.offset + 20
      this.comics = [...this.comics, ...newComics]
      this.totalComicsNumber = data.total

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
        isAllLoaded: this.totalComicsNumber == this.comics.length,
      })
    }).catch(e => {
      console.log('queryCharacterComicsWithParams: e =', e)
    })
  },

  /**
   * 列表滚动到底部
   */
  onScrollToLower: function() {
    console.log('onScrollToLower')
    this.queryCharacterComicsWithParams(this.id)
  },

  /**
   * 点击列表项时回调
   */
  onItemClick(e) {
    console.log('e = ', e)
    const item = e.currentTarget.dataset.item
    let comic = undefined
    for (const c of this.comics) {
      if (c.id == item.id) {
        comic = c
        break
      }
    }
    app.globalData.comic = comic
    
    wx.navigateTo({
      url: `../comic/comic?id=${comic.id}&title=${comic.title}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    
    this.id = options.id 
    this.name = options.name

    // 设置标题
    wx.setNavigationBarTitle({
      title: this.name,
    })

    // 查询漫画数据
    this.queryCharacterComicsWithParams(this.id)
  },

})