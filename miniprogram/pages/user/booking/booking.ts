Page({
  data: {
    parkingId: '',
    bookingTime: '',
    duration: 0
  },
  onLoad(options: any) {
    this.setData({
      parkingId: options.id
    });
  },
  onTimeChange(e: any) {
    this.setData({
      bookingTime: e.detail.value
    });
  },
  onSubmit() {
    // TODO: 提交预订信息
    console.log('Submit booking:', this.data);
  }
}); 