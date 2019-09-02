// pages/detail/detail.js
let datas = require('../../datas/list_data.js');
let appdatas=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:{},
    index:null,
    collect:false,
    isMusicPlay:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取参数值
      let index=options.index;
      //更新data中detailObj的状态值
      this.setData({
        detailObj:datas.list_data[index],
        index
      })
      //根据本地缓存数据判断用户是否收藏当前文章
    let detailStorge = wx.getStorageSync('isCollected');
    console.log(detailStorge)
    if (!detailStorge){
      //如果刚开始为空，取反进入if
      //在缓存中初始化空对象
      wx.setStorageSync('isCollected', {})
    }
    if (detailStorge[index]==true){
      //证明收藏过
      this.setData({
        collect:true
      })
    }
    //监听音乐播放
    wx.onBackgroundAudioPlay(()=>{
      this.setData({
        isMusicPlay:true
    });
    //修改appdatas数据
    appdatas.data.isplay=true;
    appdatas.data.pageindex=index;
    });
    //判断音乐是否在播放
    if (appdatas.data.isplay && appdatas.data.pageindex==index){
      //音乐在播放
      this.setData({
        isMusicPlay:true
      })
    }
    //监听音乐暂停
    wx.onBackgroundAudioPause(() => {
      this.setData({
        isMusicPlay: false
      })
      //修改appdatas数据
      appdatas.data.isplay = false;
      // appdatas.data.pageindex = index;
    })
  },
  isCollected(){
    // let collect = !this.data.collect;
    //更新状态
    this.setData({
      collect: !this.data.collect
    })
    //提示用户
    let title = this.data.collect?'收藏成功':'取消收藏';
    wx.showToast({
      title: title,
      icon:'success'
    });
    //缓存数据到本地
    let{index}=this.data;
    
    wx.getStorage({
      key: 'isCollected',
      success: (datas)=> {
        let obj = datas.data;
        obj[index] = collect;
        wx.setStorage({
          key: 'isCollected',
          data: obj
        })
      },
    })
    
  },
  musicbtn(){
    //处理音乐播放
    let isMusicPlay =!this.data.isMusicPlay;
    this.setData({
      isMusicPlay: isMusicPlay
    });
    //控制音乐播放
    if (isMusicPlay==true){
      //播放音乐
      let dataUrl=this.data.detailObj.music.dataUrl;
      let title = this.data.detailObj.music.title;
      wx.playBackgroundAudio({
        dataUrl: dataUrl,
        title: title,
      })
    }else{
      //暂停
      wx.pauseBackgroundAudio();
    }
  },
  //分享功能
  share(){
    wx.showActionSheet({
      itemList: ["分享到朋友圈","分享到QQ空间","分享给好友"],
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