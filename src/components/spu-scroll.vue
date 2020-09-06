<template>
<div class="spu-scroll-container">
  <img class="top-image" :src="theme.title_img" :alt="theme.description">
  <scroll-view class="scroll" scroll-x :data="theme">
    <div class="spu-list">
      <div class="spu-container" v-for="item in theme.spu_list" :key="item.id">
        <img class="spu-image" :src="item.img" :alt="item.subtitle">
        <span class="spu-title">{{item.title}}</span>
        <div class="price-container">
          <span class="unit">￥</span>
          <span class="price">{{item.discount_price?item.discount_price:item.price}}</span>
        </div>
      </div>
    </div>
  </scroll-view>
</div>
</template>

<script>
import BScroll from '@better-scroll/core'
import ScrollView from '@/components/scroll-view'
import {
  onMounted,
} from 'vue'
export default {
  name: 'SpuScroll',
  components: {
    ScrollView
  },
  props: {
    theme: Object
  },
  setup(props, context) {
    onMounted(() => {
      const length = props.theme.spu_list.length
      document.querySelector('.spu-list').style.width = useCalSpuListWidth(length) + 'px'
    })
  },
}

function useCalSpuListWidth(length) {
  const spuDom = document.querySelector('.spu-container')
  const computedStyle = window.getComputedStyle(spuDom)
  const spuMarginRight = parseInt(computedStyle.marginRight)
  const spuWidth = spuDom.clientWidth + spuMarginRight
  return spuWidth * length - spuMarginRight
}
</script>

<style scoped>
.spu-scroll-container {
  padding: 10px 14px 4px;
  background-color: #fff;
  margin: 6px 0;
}

.top-image {
  width: 347px;
  height: 45px;
  padding-bottom: 10px;
}

.spu-list {
  display: flex;
  flex-direction: row;
}

.spu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  margin-right: 30px;
}

.spu-image {
  width: 80px;
  height: 80px;
  margin-bottom: 4px;
}

.spu-title {
  font-size: 12px;
  width: 100%;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.price-container {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  color: #157658;
  font-weight: 500;
}

.unit {
  font-size: 10px;
}

.price {
  font-size: 14px;
}
</style>
