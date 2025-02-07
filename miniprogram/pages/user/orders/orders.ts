Page({
  data: {
    currentTab: 'pending',
    orders: [
      // 示例数据
      { id: 1, name: '车位A', time: '2023-10-01 10:00 - 12:00', amount: '20元' },
      { id: 2, name: '车位B', time: '2023-10-02 14:00 - 16:00', amount: '16元' }
    ]
  },
  onTabChange(event: any) {
    const tab = event.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab
    });
    // TODO: Fetch orders based on tab
    console.log('Tab changed to:', tab);
  },
  onOrderTap(event: any) {
    const orderId = event.currentTarget.dataset.id;
    // TODO: Navigate to order detail page
    console.log('Navigate to order detail:', orderId);
  }
}); 