// pages/home/home.js
import request from '../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.没有参数的网络请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/recommend',
    //   success:function(res){
    //     console.log(res)
    //   }
    // })

    //2.有参数的网络请求
    // wx.request({
    //   url: 'http://123.207.32.32:8000/home/data',
    //   data:{
    //     type:'sell',
    //     page:1        
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })

    //3.post请求
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   data: {
    //     type: 'why',
    //     age:18,
    //     height: 1.88
    //   },
    //   method:'post',
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })

     //4.通过自己封装的request发送网络请求
     //Promise最大好处就是防止出现回调地狱
    //  request({
    //    url: 'http://123.207.32.32:8000/recommend'
    //  })
     
     
     //5.通过自己封装的request发送网络请求
     //Promise最大好处就是防止出现回调地狱
    request({
      url: 'http://123.207.32.32:8000/recommend'
    }).then(res => {
      console.log(res)
    }).catch(err => {
       console.log(err)
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})