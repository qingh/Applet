"use strict";
var innerAudioContext = wx.createInnerAudioContext();
Page({
    data: {
        data: [],
        isPlay: false,
        show: true,
        state: 'paused'
    },
    onLoad: function (options) {
        var _this = this;
        console.log(options.id);
        wx.request({
            url: "https://api.apiopen.top/musicDetails?id=" + options.id,
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                var data = res.data.result.songList[0];
                console.log(data);
                if (data) {
                    _this.setData({
                        data: data,
                        show: true
                    });
                    innerAudioContext.autoplay = false;
                    innerAudioContext.src = data.songLink;
                }
                else {
                    _this.setData({
                        show: false
                    });
                }
            }
        });
    },
    play: function () {
        innerAudioContext.play();
        this.setData({
            isPlay: true,
            state: 'running'
        });
    },
    stop: function () {
        innerAudioContext.pause();
        this.setData({
            isPlay: false,
            state: 'paused'
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFNLGlCQUFpQixHQUFHLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO0FBQ3ZELElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFO1FBQ1IsTUFBTSxFQUFFLEtBQUs7UUFDYixJQUFJLEVBQUUsSUFBSTtRQUNWLEtBQUssRUFBRSxRQUFRO0tBQ2hCO0lBQ0QsTUFBTSxZQUFDLE9BQVk7UUFBbkIsaUJBeUJDO1FBeEJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDVCxHQUFHLEVBQUUsNkNBQTJDLE9BQU8sQ0FBQyxFQUFJO1lBQzVELE1BQU0sRUFBRTtnQkFDTixjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBUTtnQkFDaEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixJQUFJLElBQUksRUFBRTtvQkFDUixLQUFJLENBQUMsT0FBUSxDQUFDO3dCQUNaLElBQUksTUFBQTt3QkFDSixJQUFJLEVBQUUsSUFBSTtxQkFDWCxDQUFDLENBQUM7b0JBRUgsaUJBQWlCLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDbkMsaUJBQWlCLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7aUJBQ3ZDO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxPQUFRLENBQUM7d0JBQ1osSUFBSSxFQUFFLEtBQUs7cUJBQ1osQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDSixpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBUSxDQUFDO1lBQ1osTUFBTSxFQUFFLElBQUk7WUFDWixLQUFLLEVBQUUsU0FBUztTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsSUFBSSxFQUFFO1FBQ0osaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLE1BQU0sRUFBRSxLQUFLO1lBQ2IsS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGlubmVyQXVkaW9Db250ZXh0ID0gd3guY3JlYXRlSW5uZXJBdWRpb0NvbnRleHQoKTtcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZGF0YTogW10sXG4gICAgaXNQbGF5OiBmYWxzZSxcbiAgICBzaG93OiB0cnVlLFxuICAgIHN0YXRlOiAncGF1c2VkJ1xuICB9LFxuICBvbkxvYWQob3B0aW9uczogYW55KSB7XG4gICAgY29uc29sZS5sb2cob3B0aW9ucy5pZCk7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwczovL2FwaS5hcGlvcGVuLnRvcC9tdXNpY0RldGFpbHM/aWQ9JHtvcHRpb25zLmlkfWAsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIHN1Y2Nlc3M6IChyZXM6IGFueSkgPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhLnJlc3VsdC5zb25nTGlzdFswXTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgc2hvdzogdHJ1ZVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaW5uZXJBdWRpb0NvbnRleHQuYXV0b3BsYXkgPSBmYWxzZTtcbiAgICAgICAgICBpbm5lckF1ZGlvQ29udGV4dC5zcmMgPSBkYXRhLnNvbmdMaW5rO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBwbGF5OiBmdW5jdGlvbigpIHtcbiAgICBpbm5lckF1ZGlvQ29udGV4dC5wbGF5KCk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBpc1BsYXk6IHRydWUsXG4gICAgICBzdGF0ZTogJ3J1bm5pbmcnXG4gICAgfSk7XG4gIH0sXG4gIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgIGlubmVyQXVkaW9Db250ZXh0LnBhdXNlKCk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBpc1BsYXk6IGZhbHNlLFxuICAgICAgc3RhdGU6ICdwYXVzZWQnXG4gICAgfSk7XG4gIH1cbn0pO1xuIl19