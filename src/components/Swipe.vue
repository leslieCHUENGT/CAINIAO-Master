<template>
  <van-swipe
    class="home-swiper"
   :class="{'detail-swiper':!props.isHomeSwiper}"
   :autoplay="3000"
  >
     <van-swipe-item 
      v-for="item in swiperList" 
      :key="item.imgSrc || item"
      v-lazy="item"
     >
         <!-- 通用组件 兼容数据格式不同 -->
        <img :src="item.imgSrc || item" />
     </van-swipe-item>
  </van-swipe>
</template>

<script setup>
const props = defineProps({
  swiperList: {
    type: Array,
    default:[]
  },
  isHomeSwiper:{
    type: Boolean,
    default: true
  }
})
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin';
.home-swiper
  mb()
  img
    wh(100%,100px)
.detail-swiper
  margin 0
  border-radius 0
  img
   wh(100%,100%)
   object-fit cover
</style>