// pages/home/home.js
//getApp()可以获取App()产生的实例对象
const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)

Page({
  //-----------1.初始化数据-------------
  data:{
    message:'哈哈哈',
    array:[1,2,3,4,5,6,7,8,9,10]
  },
  //----2.监听wxml中相关的一些事件-------
  handleGetUserInfo(event){
    console.log(event)
  },
  handleViewClick(){
    console.log('哈哈哈被点击了')
  },
  //---------3.监听生命周期函数----------
  onLoad:()=>{
    console.log('onLoad')
    wx.request({
      url: 'http://123.207.32.32:8000/recommend',
      success:(res)=>{
        console.log(res)
      }
    })
  },
  //-------4.监听其它事件如页面滚动等--------
  //监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部')
  },
  //监听页面下拉刷新
  onPullDownRefresh() {
    console.log('监听页面下拉刷新')
  }
})