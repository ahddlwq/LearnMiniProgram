// pages/wxml/wxml.js
Page({
  data: {
    message:"你好小程序",
    firstname:"Kobe",
    lastname:"bryant",
    age:18,
    nowTime: new Date().toLocaleString(),
    isActive: false
  },
  onLoad(){
    setInterval(()=> {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitchColor()
  {
    this.setData({
      isActive: !this.data.isActive
    })
  }  
})