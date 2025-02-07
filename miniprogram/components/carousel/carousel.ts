Component({
  properties: {
    items: {
      type: Array,
      value: [
        {
          id: 1,
          image: '/images/default/carousel1.png',
          title: '热门车位推荐'
        },
        {
          id: 2,
          image: '/images/default/carousel2.png',
          title: '优惠活动'
        }
      ]
    }
  },

  methods: {
    onItemTap(e: any) {
      const id = e.currentTarget.dataset.id;
      this.triggerEvent('click', { id });
    }
  }
}); 