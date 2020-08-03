// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  handleIncrement(event){
    console.log("----------",event)
    this.setData({
      counter: this.data.counter+1
    })
  },
  handleTabClick(event){
    console.log("----------", event)
  },
  handleBtnClick(){
    //console.log("----------")
    //修改my-select组件中的数据
    //const my_select = this.selectComponent('.sel-class')
    const my_select = this.selectComponent('#sel-id')
    //console.log(my_select)
    //my_select.setData({
    //  counter: my_select.data.counter+1
    //})
    my_select.incrementCounter(1)
  }
})