Page({
  data: {
    name: '',
    location: '',
    price: ''
  },
  onNameInput(event: any) {
    this.setData({
      name: event.detail.value
    });
  },
  onLocationInput(event: any) {
    this.setData({
      location: event.detail.value
    });
  },
  onPriceInput(event: any) {
    this.setData({
      price: event.detail.value
    });
  },
  onChooseLocation() {
    // TODO: Implement location selection
    console.log('Choose location');
  },
  onUploadImage() {
    // TODO: Implement image upload
    console.log('Upload image');
  },
  onSubmit() {
    // TODO: Submit parking information
    console.log('Submit parking:', this.data);
  }
}); 