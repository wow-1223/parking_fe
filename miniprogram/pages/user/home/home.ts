type PageData = {
  banners: Array<{
    id: number;
    title: string;
  }>;
  parkingSpots: Array<{
    id: number;
    location: string;
    price: string;
  }>;
}

type PageInstance = WechatMiniprogram.Page.Instance<
  PageData,
  WechatMiniprogram.Page.CustomOption
>

Page<PageData>({
  data: {
    // TODO: 添加轮播图图片资源
    banners: [
      {
        id: 1,
        // image: '/images/default/banner1.png',
        title: '热门车位推荐'
      },
      {
        id: 2,
        // image: '/images/default/banner2.png',
        title: '优惠活动'
      }
    ],
    // TODO: 添加停车位图片资源
    parkingSpots: [
      {
        id: 1,
        // image: '/images/default/parking1.png',
        location: '市中心停车位A',
        price: '10'
      },
      {
        id: 2,
        // image: '/images/default/parking2.png',
        location: '商场停车位B',
        price: '8'
      }
    ]
  },

  onSearch(this: PageInstance, e: WechatMiniprogram.Input.InputEvent) {
    const keyword = e.detail.value;
    // TODO: 实现搜索功能
    console.log('Search:', keyword);
  },

  onBannerTap(this: PageInstance, e: WechatMiniprogram.TouchEvent) {
    const id = e.currentTarget.dataset.id;
    // TODO: 处理轮播图点击
    console.log('Banner clicked:', id);
  },

  onParkingTap(this: PageInstance, e: WechatMiniprogram.TouchEvent) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../detail/detail?id=${id}`
    });
  },

  onBackToIndex(this: PageInstance) {
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
  },

  onShow(this: PageInstance) {
    const tabBar = this.getTabBar();
    tabBar?.init(true); // true 表示用户模式
  }
}); 