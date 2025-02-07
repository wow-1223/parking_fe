Page({
  data: {
    parkingId: ''
  },
  onLoad(options: any) {
    this.setData({
      parkingId: options.id
    });
    // TODO: 加载停车位详情
  },
  onBooking() {
    // TODO: 跳转到预订页面
    wx.navigateTo({
      url: '../booking/booking?id=' + this.data.parkingId
    });
  }
}); 