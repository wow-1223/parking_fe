Component({
  methods: {
    onInput(event: any) {
      this.triggerEvent('search', { value: event.detail.value });
    }
  }
}); 