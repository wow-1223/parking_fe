// 清空内容

Page({
  navigateToUser() {
    wx.switchTab({
      url: '/pages/user/home/home',
      fail: (err) => {
        console.error('导航失败：', err);
        wx.showToast({
          title: '导航失败',
          icon: 'none'
        });
      }
    });
  },
  navigateToOwner() {
    wx.switchTab({
      url: '/pages/owner/home/home',
      fail: (err) => {
        console.error('导航失败：', err);
        wx.showToast({
          title: '导航失败',
          icon: 'none'
        });
      }
    });
  }
});
