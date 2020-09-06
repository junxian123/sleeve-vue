<template>
  <div class="spu-preview-container">
    <van-image class="preview-image" :src="spu.img" :alt="spu.subtitle" fit="cover" />
    <div class="content">
      <span class="title">{{spu.title}}</span>
      <div class="tag-container" v-if="tags.length">
        <van-tag
          class="tag"
          color="#DCEBE6"
          text-color="#157658"
          v-for="(item,index) in tags"
          :key="index"
        >{{item}}</van-tag>
      </div>
      <main-price :price="spu.price" :discount-price="spu.discount_price" />
      <span class="subtitle">{{subtitle}}</span>
    </div>
  </div>
</template>

<script>
import MainPrice from "@/components/main-price";
import { ref } from "vue";
import { computed, reactive } from "vue";
export default {
  components: {
    MainPrice,
  },
  props: {
    spu: Object,
  },
  setup(props) {
    const tags = useGetTags(props.spu.tags);
    console.log(tags.value);
    const subtitle = useGetSubtitle(props.spu.subtitle);
    return {
      tags,
      subtitle,
    };
  },
};

function useGetTags(tags) {
  if (tags == null || tags === "") {
    return ref([]);
  }
  return computed(() => tags.split("$"));
}

function useGetSubtitle(subtitle) {
  return computed(() =>
    subtitle.length > 20 ? subtitle.substring(0, 20) + "..." : subtitle
  );
}
</script>

<style scoped>
.spu-preview-container {
  display: flex;
  flex-direction: column;
  width: 170px;
  box-shadow: 0 0 4px 0 rgba(119, 163, 149, 0.2);
}

.preview-image {
  width: 100%;
  height: 180px;
}

.content {
  display: flex;
  flex-direction: column;
  padding: 4px 6px;
}

.title {
  font-size: 12px;
}

.tag-container {
  display: flex;
  flex-direction: row;
  margin: 2px 0;
}

.tag {
  font-size: 10px;
  margin-right: 4px;
  background-color: #dcebe6;
  color: #157658;
}

.subtitle {
  font-size: 12px;
  margin-top: 2px;
}
</style>
