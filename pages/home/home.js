// pages/home/home.js
Page({
  data: {
    name: 'ahddlwq',
    age: 50,
    movies: ["大话西游", "盗梦空间", "星际穿越","少年派"],
    counter: 0
  },
  increment(){
    this.setData({
      counter:++this.data.counter
    })
  },
  decrement() {
    this.setData({
      counter: --this.data.counter
    })
  }
})