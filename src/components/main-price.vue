<template>
<div class="main-price-container">
  <span class="main-price">￥{{mainPrice.price}}</span>
  <span class="slashed-price" v-if="slashedPrice.display">￥{{slashedPrice.price}}</span>
</div>
</template>

<script>
export default {
  name: 'MainPrice',
  props: {
    price: {
      type: String,
      default: '0.00'
    },
    discountPrice: String
  },
  setup(props) {
    const price = props.price
    const discountPrice = props.discountPrice
    const mainPrice = useMainPrice(price, discountPrice)
    const slashedPrice = useSlashedPrice(price, discountPrice)
    return {
      mainPrice,
      slashedPrice
    }
  }
}

function useMainPrice(price, discountPrice) {
  if (discountPrice) {
    return {
      price: discountPrice,
      display: true
    }
  }
  return {
    price,
    display: true
  }
}

function useSlashedPrice(price, discountPrice) {
  if (discountPrice) {
    return {
      price,
      display: true
    }
  }
  return {
    display: false
  }
}
</script>

<style scoped>
.main-price-container {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  font-weight: 500;
}

.main-price {
  color: #157658;
  font-size: 13px;
  margin-right: 4px;
}

.slashed-price {
  color: #999;
  font-size: 11px;
  text-decoration: line-through;
}
</style>
