Page({
  data: {
    favorites: [
      // 示例数据
      { id: 1, temp_image: '/assets/parking1.jpg', name: '车位A', price: 10 },
      { id: 2, temp_image: '/assets/parking2.jpg', name: '车位B', price: 8 }
    ]
  },
  onFavoriteTap(event: any) {
    const favoriteId = event.currentTarget.dataset.id;
    // TODO: Navigate to parking detail page
    console.log('Navigate to parking detail:', favoriteId);
  }
}); 