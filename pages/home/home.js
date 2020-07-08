// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price:"27.666666",
    time: 1560598160,
    titles:["衣服","裤子","鞋子"]
  },
  handleBtnClick(){
    console.log("按钮被点击！");
  },
  handleTouchStart() {
    console.log("handleTouchStart");
  },
  handleTouchMove() {
    console.log("handleTouchMove");
  },
  handleTouchEnd() {
    console.log("handleTouchEnd");
  },
  handleLongPress() {
    console.log("handleLongPress");
  },
  handleTap() {
    console.log("handleTap");
  },
  handleMyBtnClick(e) {
    console.log(e);
  },
  handleOuter(event){
    console.log(event);
  },
  handleInner(event) {
    console.log(event);
  },
  handleItemClick(event) {
    //console.log(event);
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title,index);
  },

  handleCaptureView1(){
    console.log("handleCaptureView1");
  },
  handleBindView1() {
    console.log("handleBindView1");
  },
  handleCaptureView2() {
    console.log("handleCaptureView2");
  },
  handleBindView2() {
    console.log("handleBindView2");
  },
  handleCaptureView3() {
    console.log("handleCaptureView3");
  },
  handleBindView3() {
    console.log("handleBindView3");
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

  }
})