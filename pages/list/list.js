"use strict";
Page({
    data: {
        data: [],
        keywords: ''
    },
    bindViewTap: function (event) {
        console.log(event.currentTarget.dataset.id);
        wx.navigateTo({
            url: "../detail/detail?id=" + event.currentTarget.dataset.id
        });
    },
    searchInput: function (event) {
        this.setData({
            keywords: event.detail.value
        });
    },
    search: function () {
        var _this = this;
        console.log(this.data.keywords);
        wx.request({
            url: "https://api.apiopen.top/searchMusic?name=" + this.data.keywords,
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                console.log(res);
                _this.setData({
                    data: res.data.result
                });
            }
        });
    },
    onLoad: function (options) {
        var _this = this;
        console.log(options);
        wx.request({
            url: "https://api.apiopen.top/musicBroadcastingDetails?channelname=" + options.type,
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                var data = res.data.result.songlist;
                data.pop();
                _this.setData({
                    data: data
                });
            }
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxFQUFFO1FBQ1IsUUFBUSxFQUFFLEVBQUU7S0FDYjtJQUVELFdBQVcsWUFBQyxLQUFVO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSx5QkFBdUIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBSTtTQUM3RCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsV0FBVyxZQUFDLEtBQVU7UUFDcEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztZQUNaLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELE1BQU07UUFBTixpQkFjQztRQWJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ1QsR0FBRyxFQUFFLDhDQUE0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVU7WUFDckUsTUFBTSxFQUFFO2dCQUNOLGNBQWMsRUFBRSxrQkFBa0I7YUFDbkM7WUFDRCxPQUFPLEVBQUUsVUFBQyxHQUFRO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixLQUFJLENBQUMsT0FBUSxDQUFDO29CQUNaLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07aUJBQ3RCLENBQUMsQ0FBQztZQUNMLENBQUM7U0FDRixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSxZQUFDLE9BQVk7UUFBbkIsaUJBaUJDO1FBaEJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNULEdBQUcsRUFBRSxrRUFDSCxPQUFPLENBQUMsSUFDUjtZQUNGLE1BQU0sRUFBRTtnQkFDTixjQUFjLEVBQUUsa0JBQWtCO2FBQ25DO1lBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBUTtnQkFDaEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUNwQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ1gsS0FBSSxDQUFDLE9BQVEsQ0FBQztvQkFDWixJQUFJLE1BQUE7aUJBQ0wsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcbiAgZGF0YToge1xuICAgIGRhdGE6IFtdLFxuICAgIGtleXdvcmRzOiAnJ1xuICB9LFxuICAvL+S6i+S7tuWkhOeQhuWHveaVsFxuICBiaW5kVmlld1RhcChldmVudDogYW55KSB7XG4gICAgY29uc29sZS5sb2coZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkKTtcbiAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgIHVybDogYC4uL2RldGFpbC9kZXRhaWw/aWQ9JHtldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR9YFxuICAgIH0pO1xuICB9LFxuICBzZWFyY2hJbnB1dChldmVudDogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBrZXl3b3JkczogZXZlbnQuZGV0YWlsLnZhbHVlXG4gICAgfSk7XG4gIH0sXG4gIHNlYXJjaCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGEua2V5d29yZHMpO1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgaHR0cHM6Ly9hcGkuYXBpb3Blbi50b3Avc2VhcmNoTXVzaWM/bmFtZT0ke3RoaXMuZGF0YS5rZXl3b3Jkc31gLCAvL+mikemBk+WIl+ihqFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBzdWNjZXNzOiAocmVzOiBhbnkpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgZGF0YTogcmVzLmRhdGEucmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBvbkxvYWQob3B0aW9uczogYW55KSB7XG4gICAgY29uc29sZS5sb2cob3B0aW9ucyk7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGBodHRwczovL2FwaS5hcGlvcGVuLnRvcC9tdXNpY0Jyb2FkY2FzdGluZ0RldGFpbHM/Y2hhbm5lbG5hbWU9JHtcbiAgICAgICAgb3B0aW9ucy50eXBlXG4gICAgICB9YCxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgc3VjY2VzczogKHJlczogYW55KSA9PiB7XG4gICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGEucmVzdWx0LnNvbmdsaXN0O1xuICAgICAgICBkYXRhLnBvcCgpO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBkYXRhXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59KTtcbiJdfQ==