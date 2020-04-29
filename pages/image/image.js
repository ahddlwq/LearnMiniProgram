// pages/image/image.js
Page({  
  data:{
    imagePath:''
  },
  handleChooseAlbum () {
    // console.log('-------------------');
    //系统API，让用户在相册中选择图片（或者拍照）
    wx.chooseImage({
      //success: function(res) {
      success: (res)=> {
        // console.log(res);
        //1.取得图片路径
        const path = res.tempFilePaths[0];

        //2.设置imagePath
        //若使用success: function(res)，则此时的this为undefined
        //若使用success: (res)=>箭头函数，则此时的this为正确的
        this.setData({
          imagePath:path          
        });
      },
    })
  },
  handleImageLoad(){
    console.log('图片加载完成');
  }
})