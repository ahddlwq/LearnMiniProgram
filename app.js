const TOKEN='token'

App({
  globalData: {
    token: ''
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //1.先从缓存中取出token
    const token=wx.getStorageSync(TOKEN);

    //2.判断是否取出了token
    if (token && token.length){
      this.check_token(token)
    }else{
      console.log('进行了登录');
      this.login()
    }
  },
  check_token(token){
    console.log(token);
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
        console.log(res);
        if (!res.data.errCode) {          
          this.globalData.token = token;
        } else {          
          this.login()
        }
      }
    })
  },
  login(){
    //登录操作    
    wx.login({
      //code只有5分钟的有效期
      success: (res) => {
        //1.获取code
        const code = res.code;
        console.log(res);

        //2.向自己的服务器发送请求        
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code: code
            //ES6增强写法只需要写code即可
          },
          success: (res) => {
            console.log(res);
            //1.取出token
            const token = res.token;

            //2.存储到全局变量中
            this.globalData.token = token;

            //3.存储到storage中
            wx.setStorage({
              key: TOKEN,
              data: token,
              success: function (res) {
                console.log(res);
              }
            })
          }
        })
      }
    })
  }
})