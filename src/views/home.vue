<template>
<div class="home-container">
  <img class='top-theme' :src="themeA.entrance_img">
  <home-swiper :banner='bannerB' />
  <category-grid :grid-items="gridC" />
  <img class="activity-image" :src="activityD.entrance_img" :alt="activityD.remark">
  <spu-scroll :theme="themeE" />
  <img class="themeF-image" :src="themeF.entrance_img" :alt="themeF.description">
  <hot :banner="bannerG" />
  <img class="themeH-image" :src="themeH.entrance_img" :alt="themeH.description">
  <div class="bottom-container">
    <img class="recommend-image" :src="recommendImage">
    <van-list v-model:loading="loading" :finished="finished" finished-text="--没有更多了--" @load="onReachBottom">
      <div class="bottom-list">
        <spu-preview class="spu-preview" v-for="item in spuList" :key="item.id" :spu="item" />
      </div>
    </van-list>
  </div>
</div>
</template>

<script>
import HomeSwiper from '@/components/home-swiper'
import CategoryGrid from '@/components/category-grid'
import SpuScroll from '@/components/spu-scroll'
import Hot from '@/components/hot'
import SpuPreview from '@/components/spu-preview'
import {
  Theme
} from '@/model/theme'
import {
  Banner
} from '@/model/banner'
import {
  Category
} from '@/model/category'
import {
  Activity
} from '@/model/activity'
import {
  SpuPaging
} from '@/model/spu-paging'
import recommendImage from '@/assets/images/home/recommend.png'
import router from '@/router'
import {
  reactive,
  ref,
  toRefs
} from 'vue'
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    CategoryGrid,
    SpuScroll,
    Hot,
    SpuPreview
  },
  async setup(props, context) {
    const theme = new Theme()
    await theme.getThemes()
    const themeA = theme.getHomeLocationA()
    const bannerB = await Banner.getHomeLocationB()
    const gridC = await Category.getHomeLocationC()
    const activityD = await Activity.getHomeLocationD()
    const themeE = await Theme.getHomeLocationESpu()
    const themeF = await theme.getHomeLocationF()
    const bannerG = await Banner.getHomeLocationG()
    const themeH = await theme.getHomeLocationH()
    const paging = SpuPaging.getLatestPaging()
    const {
      loading,
      finished,
      spuList,
      loadmore
    } = await useInitBottomList(paging)

    function onReachBottom() {
      loadmore()
    }
    return {
      themeA,
      bannerB,
      gridC,
      activityD,
      themeE,
      themeF,
      bannerG,
      themeH,
      loading,
      finished,
      spuList,
      onReachBottom,
      recommendImage
    }
  }
}

async function useInitBottomList(paging) {
  const reactiveData = reactive({
    loading: true,
    finished: false,
    spuList: []
  })
  const pagingData = await paging.getMoreData()
  reactiveData.loading = false
  reactiveData.spuList = pagingData.accumulator
  async function loadmore() {
    const pagingData = await paging.getMoreData()
    reactiveData.loading = false
    if (!pagingData) {
      reactiveData.finished = true
      return
    }
    reactiveData.spuList = pagingData.accumulator
    if (!pagingData.moreData) {
      reactiveData.finished = true
    }
  }

  return {
    ...toRefs(reactiveData),
    loadmore
  }
}
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
}

.top-theme {
  width: 100%;
}

.activity-image {
  width: 100%;
  margin-top: 6px;
}

.themeF-image {
  width: 100%;
  margin-bottom: 6px;
}

.themeH-image {
  width: 100%;
  margin: 6px 0;
}

.bottom-container {
  padding: 10px 14px 0;
  margin-top: 6px;
  background-color: #fff;
}

.recommend-image {
  width: 347px;
  height: 45px;
}

.bottom-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.spu-preview {
  margin-bottom: 10px;
}
</style>
