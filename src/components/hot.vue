<template>
<div class="hot-container">
  <img class="title-image" :src="banner.img" :alt="banner.description">
  <div class="inner-container">
    <img class="left" :src="left.img">
    <div class="right">
      <img class="right-top" :src="rightTop.img">
      <img class="right-bottom" :src="rightBottom.img">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Hot',
  props: {
    banner: {
      type: Object
    }
  },
  setup(props) {
    const leftName = 'left'
    const rightTopName = 'right-top'
    const rightBottomName = 'right-bottom'
    const left = props.banner.items.find(item => item.name === leftName)
    const rightTop = props.banner.items.find(item => item.name === rightTopName)
    const rightBottom = props.banner.items.find(item => item.name === rightBottomName)
    return {
      left,
      rightTop,
      rightBottom
    }
  }
}
</script>

<style scoped>
.hot-container {
  display: flex;
  flex-direction: column;
  background-color: #fff;
}

.title-image {
  width: 347px;
  height: 45px;
  padding: 10px 14px;

}

.inner-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 263px;
}

.left {
  width: 172px;
  height: 100%;
}

.right {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.right-top,
.right-bottom {
  width: 200px;
  height: 130px;

}
</style>
