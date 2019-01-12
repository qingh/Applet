const innerAudioContext = wx.createInnerAudioContext();
Page({
  data: {
    data: [],
    isPlay: false,
    show: true,
    state: 'paused'
  },
  onLoad(options: any) {
    console.log(options.id);
    wx.request({
      url: `https://api.apiopen.top/musicDetails?id=${options.id}`,
      header: {
        'content-type': 'application/json'
      },
      success: (res: any) => {
        let data = res.data.result.songList[0];
        console.log(data);
        if (data) {
          this.setData!({
            data,
            show: true
          });

          innerAudioContext.autoplay = false;
          innerAudioContext.src = data.songLink;
        } else {
          this.setData!({
            show: false
          });
        }
      }
    });
  },
  play: function() {
    innerAudioContext.play();
    this.setData!({
      isPlay: true,
      state: 'running'
    });
  },
  stop: function() {
    innerAudioContext.pause();
    this.setData!({
      isPlay: false,
      state: 'paused'
    });
  }
});
