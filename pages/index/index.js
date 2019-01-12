"use strict";
Page({
    data: {
        data: []
    },
    fn: function (event) {
        wx.navigateTo({
            url: "../list/list?type=" + event.currentTarget.dataset.type
        });
    },
    onLoad: function () {
        var _this = this;
        wx.request({
            url: 'https://api.apiopen.top/musicBroadcasting',
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                _this.setData({
                    data: res.data.result[0].channellist
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7S0FDVDtJQUNELEVBQUUsWUFBQyxLQUFVO1FBQ1gsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSx1QkFBcUIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBTTtTQUM3RCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTTtRQUFOLGlCQVlDO1FBWEMsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSwyQ0FBMkM7WUFDaEQsTUFBTSxFQUFFO2dCQUNOLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDRCxPQUFPLEVBQUUsVUFBQyxHQUFRO2dCQUNoQixLQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXO2lCQUNyQyxDQUFDLENBQUM7WUFDTCxDQUFDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgZGF0YTogW11cbiAgfSxcbiAgZm4oZXZlbnQ6IGFueSkge1xuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiBgLi4vbGlzdC9saXN0P3R5cGU9JHtldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHlwZX1gXG4gICAgfSk7XG4gIH0sXG5cbiAgb25Mb2FkKCkge1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cHM6Ly9hcGkuYXBpb3Blbi50b3AvbXVzaWNCcm9hZGNhc3RpbmcnLCAvL+mikemBk+WIl+ihqFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiAocmVzOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgZGF0YTogcmVzLmRhdGEucmVzdWx0WzBdLmNoYW5uZWxsaXN0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcbiJdfQ==