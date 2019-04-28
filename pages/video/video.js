// pages/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fullScreen:false

  },

  /**播放视屏 */
  play(e) {
    //执行全屏方法  
    var videoContext = wx.createVideoContext('myvideo', this);
    videoContext.requestFullScreen();
    this.setData({
      fullScreen: true
    })
  },
  /**关闭视屏 */
  closeVideo() {
    //执行退出全屏方法
    var videoContext = wx.createVideoContext('myvideo', this);
    videoContext.exitFullScreen();
    this.setData({
      fullScreen: false
    })
  },
  /**视屏进入、退出全屏 */
  fullScreen(e) {
    var isFull = e.detail.fullScreen;
    //视屏全屏时显示加载video，非全屏时，不显示加载video
    this.setData({
      fullScreen: isFull
    })
  }
})