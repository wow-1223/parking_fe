Page({
  data: {
    temp_avatar: '/assets/avatar.jpg',
    nickname: '出租方昵称'
  },
  onMenuTap(event: any) {
    const page = event.currentTarget.dataset.page;
    // TODO: Navigate to the selected page
    console.log('Navigate to page:', page);
  },
  onLogout() {
    // TODO: Implement logout functionality
    console.log('User logged out');
  }
}); 