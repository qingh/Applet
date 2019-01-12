Page({
  data: {
    data: [],
    keywords: ''
  },
  //事件处理函数
  bindViewTap(event: any) {
    console.log(event.currentTarget.dataset.id);
    wx.navigateTo({
      url: `../detail/detail?id=${event.currentTarget.dataset.id}`
    });
  },
  searchInput(event: any) {
    this.setData!({
      keywords: event.detail.value
    });
  },
  search() {
    console.log(this.data.keywords);
    wx.request({
      url: `https://api.apiopen.top/searchMusic?name=${this.data.keywords}`, //频道列表
      header: {
        'content-type': 'application/json'
      },
      success: (res: any) => {
        console.log(res);
        this.setData!({
          data: res.data.result
        });
      }
    });
  },
  onLoad(options: any) {
    console.log(options);
    wx.request({
      url: `https://api.apiopen.top/musicBroadcastingDetails?channelname=${
        options.type
      }`,
      header: {
        'content-type': 'application/json'
      },
      success: (res: any) => {
        let data = res.data.result.songlist;
        data.pop();
        this.setData!({
          data
        });
      }
    });
  }
});
