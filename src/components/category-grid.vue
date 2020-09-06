<template>
<div class="category-gird-container">
  <van-grid class="grid-container" :border="false" :column-num="3">
    <van-grid-item v-for="item in gridItems" :key="item.id">
      <div class="content">
        <img class="image" :src="item.img">
        <p class="title">{{item.title}}</p>
      </div>
    </van-grid-item>
  </van-grid>
</div>
</template>

<script>
export default {
  name: 'CategoryGrid',
  props: {
    gridItems: {
      type: Array,
      value: []
    }
  }
};
</script>

<style scoped>
.category-gird-container {
  display: flex;
  align-items: center;
  padding: 4px;
  background-color: #fff;
}

.grid-container {
  width: 100%;
  border: 1PX dashed #DCEBE6;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.image {
  width: 30px;
  height: 30px;
}

.title {
  font-size: 12px;
  margin-top: 4px;
}
</style>
