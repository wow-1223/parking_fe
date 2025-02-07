interface IPageData {
  ownerName: string;
  contact: string;
  parkings: Array<{
    id: number;
    name: string;
    status: string;
    earnings: string;
  }>;
}

Page<IPageData>({
  data: {
    ownerName: '张三',
    contact: '123456789',
    parkings: [
      // 示例数据
      { id: 1, name: '车位A', status: '空闲', earnings: '50元' },
      { id: 2, name: '车位B', status: '已租', earnings: '30元' }
    ]
  },
  onParkingTap(e) {
    const parkingId = e.currentTarget.dataset.id;
    // TODO: 跳转到车位管理页面
    console.log('跳转到车位管理:', parkingId);
  },
  onShow() {
    const tabBar = this.getTabBar();
    tabBar?.init(false); // false 表示出租方模式
  },
  onBackToIndex() {
    wx.reLaunch({
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
}); 