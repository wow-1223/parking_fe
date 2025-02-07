Page({
  data: {
    keyword: ''
  },
  onSearchInput(e: any) {
    this.setData({
      keyword: e.detail.value
    });
    // TODO: 实现搜索功能
  },
  onFilterTap(e: any) {
    const filterType = e.currentTarget.dataset.type;
    // TODO: 实现筛选功能
    console.log('Filter type:', filterType);
  }
}); 