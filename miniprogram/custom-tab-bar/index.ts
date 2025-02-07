Component({
  data: {
    isUserMode: true,
    selected: 0,
    userList: [
      { pagePath: "pages/user/home/home", text: "用户首页" },
      { pagePath: "pages/user/orders/orders", text: "订单" },
      { pagePath: "pages/user/favorites/favorites", text: "收藏" },
      { pagePath: "pages/user/profile/profile", text: "我的" }
    ],
    ownerList: [
      { pagePath: "pages/owner/home/home", text: "首页" },
      { pagePath: "pages/owner/orders/orders", text: "订单管理" },
      { pagePath: "pages/owner/publish/publish", text: "发布车位" },
      { pagePath: "pages/owner/statistics/statistics", text: "收益统计" },
      { pagePath: "pages/owner/profile/profile", text: "我的" }
    ]
  },

  methods: {
    switchTab(e: any) {
      const path = e.currentTarget.dataset.path;
      if (path === '/pages/index/index') {
        wx.reLaunch({
          url: path
        });
        return;
      }

      wx.switchTab({
        url: `/${path}`,
        fail: (err) => {
          console.error('切换标签页失败：', err);
          wx.showToast({
            title: '切换失败',
            icon: 'none'
          });
        }
      });
    },

    init(isUserMode: boolean) {
      this.setData({
        isUserMode,
        list: isUserMode ? this.data.userList : this.data.ownerList
      });
    }
  }
}); 