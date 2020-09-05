<template>
<div class="wrapper">
  <slot></slot>
</div>
</template>

<script>
import BScroll from '@better-scroll/core'
import {
  onMounted,
  watch,
  reactive
} from 'vue'
export default {
  name: 'ScrollView',
  props: {
    data: {
      type: Object,
      default: {}
    },
    probeType: {
      type: Number,
      default: 1
    },
    scrollX: {
      type: Boolean,
      value: false
    },
    scrollY: {
      type: Boolean,
      default: true
    },
    click: {
      type: Boolean,
      default: true
    },
    refreshDelay: {
      type: Boolean,
      default: true
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
  },
  setup(props, context) {
    let scroll = null;
    onMounted(() => {
      setTimeout(() => {
        scroll = useCreateBScroll(props, context)
      }, 20)
    })

    function refresh() {
      scroll && scroll.refresh()
    }
    const data = reactive(props.data)
    watch(data, () => {
      setTimeout(() => {
        refresh()
      }, props.refreshDelay)
    })
    return {
      refresh
    }
  }
}

function useCreateBScroll(props, context) {
  const bs = new BScroll('.wrapper', {
    scrollX: props.scrollX,
    scrollY: props.scrollY,
    click: props.click,
    probeType: props.probeType
  })
  if (props.listenScroll) {
    bs.on('scroll', (position) => {
      context.emit('scroll', position)
    })
  }
  return bs;
}
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>
