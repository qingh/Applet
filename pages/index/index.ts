Page({
  data: {
    data: []
  },
  fn(event: any) {
    wx.navigateTo({
      url: `../list/list?type=${event.currentTarget.dataset.type}`
    });
  },

  onLoad() {
    wx.request({
      url: 'https://api.apiopen.top/musicBroadcasting', //频道列表
      header: {
        'content-type': 'application/json'
      },
      success: (res: any) => {
        this.setData!({
          data: res.data.result[0].channellist
        });
      }
    });
  }
});
