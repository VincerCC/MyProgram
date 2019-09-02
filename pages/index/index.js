//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '开启小程序的初次邂逅',
    userInfo: {},
    isShow:true
  },
  btnIn:function(){
    //点击跳转到list页面
    //wx.redirectTo关闭当前页面再跳转，,但是不能跳转到包含tabBar的界面
    // wx.navigateTo保留当前页面再跳转（能回退）,但是不能跳转到包含tabBar的界面
    //wx.switchTab跳转到包含tabBar的界面，并且关闭其他非tabBar页面
    wx.switchTab({
      url: "/pages/list/list"
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /*生命周期函数，onload监听页面加载*/
  onLoad: function (options) {
    this.getUserInfo();
  },
  getUserInfo(data){
    //判断用户是否授权了
    wx.getSetting({
      success: (data) => {
        
        if (data.authSetting["scope.userInfo"]) {
          //用户已经授权
          this.setData({
            isShow: false
          });
        } else {
          //用户没有授权
          this.setData({
            isShow: true
          });
        }
      }
    })
    //获取用户信息
    wx.getUserInfo({
      success: (data) => {
        console.log(data);
        //更新data中的userInfo
        this.setData({
          userInfo: data.userInfo
          })
        }
      })
    },
  handGetUserInfo(data){
    //判断用户点击的是否是允许
    if(data.detail.rawData){
      //用户点击的是允许
      this.getUserInfo();
    }
  }
})
