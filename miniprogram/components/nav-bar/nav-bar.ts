Component({
  properties: {
    title: {
      type: String,
      value: ''
    }
  },

  data: {
    statusBarHeight: 0
  },

  lifetimes: {
    attached() {
      const systemInfo = wx.getSystemInfoSync();
      this.setData({
        statusBarHeight: systemInfo.statusBarHeight
      });
    }
  },

  methods: {
    onBack() {
      wx.redirectTo({
        url: '/pages/index/index',
        fail: (err) => {
          console.error('返回首页失败：', err);
          wx.showToast({
            title: '返回失败',
            icon: 'none'
          });
        }
      });
    }
  }
}); 