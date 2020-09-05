<template>
<div class="container">
  <van-swipe :autoplay="3000" indicator-color="#157658">
    <van-swipe-item class="swipe-item" v-for="item in bannerItems" :key="item.id">
      <img class="image" :src="item.img" alt="">
    </van-swipe-item>
  </van-swipe>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    banner: {
      type: Object,
      value: {}
    }
  },
  setup(props, context) {
    const bannerItems = props.banner.items
    return {
      bannerItems
    }
  }
}
</script>

<style scoped>
.swipe-item {
  width: 100%;
  height: 180px;
}

.image {
  width: 100%;
  height: 100%;
}
</style>
