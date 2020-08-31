// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../service/home.js'

const types=['pop','new','sell']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    recommends: [],
    titles: ['流行', '新款', '精选'],
    goods: {
      'new': { page: 0, list: [] },
      'pop': { page: 0, list: [] },
      'sell': { page: 0, list: [] }
    },
    currentType:'pop',
    isShowBackTop:false,
    isTabFixed: false,
    tabScrollTop: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.请求轮播图和推荐的数据
    this._getMultiData();

    //2.请求商品数据
    this._getGoodsData('pop');
    this._getGoodsData('new');
    this._getGoodsData('sell');
  },
  _getMultiData(){
    getMultiData().then(res => {
      //console.log(res)
      //将轮播图和推荐的数据取出来
      const banners = res.data.data.banner.list;
      const recommends = res.data.data.recommend.list;
      //console.log(banners)
      //console.log(recommends)
      //将banners和recommends放到data中
      this.setData({
        banners: banners,
        recommends: recommends
      })
      //console.log(banners)
    }).catch(err => {
      //console.log(err)
    })
  },

  _getGoodsData(type) {
    //1.获取页码数据
    const page = this.data.goods[type].page+1;   

    //2.发送网络请求
    getGoodsData(type,page).then(res => {      
      //console.log(res)
      //2.1将商品数据取出来
      const list = res.data.data.list;
      //2.2将数据设置到对应type的list中
      //可以使用es6新增的for of精选遍历
      // for (let item of list) {
      //   this.data.goods[type].list.push(item)
      // }
      //也可以使用es6扩展操作符...,...就是将后面的数组扩展为item
      //this.data.goods[type].list.push(...list);
      //以上的两种方式不能使得页面实时的刷新
      //使用setData方法进行数据更新才可以使得页面实时的刷新

      //2.3使用setData方法进行数据更新      
      const oldList = res.data.goods[type].list;
      oldList.push(...list);
      //const typeKey = 'goods.pop.list';
      const typeKey = 'goods.${type}.list';
      const pageKey = 'goods.${type}.page';      
      this.setData({        
        [typeKey]: oldList,
        [pageKey]: page
      })      
    }).catch(err => {
      //console.log(err)
    })
  },

  handleTabClick(event){    
    //console.log(event)
    //1.取出index
    const index = event.detail.index
    //console.log(index)

    //2.设置currentType
    const type = types[index]
    this.setData({      
      currentType: type
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //console.log("页面滚动到底部")
    this._getGoodsData(this.data.currentType);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onPageScroll: function (options) {
    //console.log("页面滚动中...")    
    //1.取出scrollTop
    const scrollTop = options.scrollTop

    //2.设置isShowBackTop
    //官方：不要在滚动的回调函数中频繁地调用this.setData
    const flag = scrollTop >= 50
    if(flag!=this.data.isShowBackTop){
      this.setData({
        isShowBackTop: flag
      })
    }
    //3.修改isTabFixed属性
    const flag2 = scrollTop >= this.data.tabScrollTop;
    if (flag2 != this.data.isTabFixed) {
      this.setData({
        isTabFixed: flag2
      })
    }
  },
  handleImageLoad(){
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      console.log(rect)
      this.data.tabScrollTop=rect.top
      //console.log("1111111111111111111")
    }).exec()
  }
})