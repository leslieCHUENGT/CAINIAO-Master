<template>
  <div class="container">
    <HomeHeader :isSort="isSort" />
    <!-- 轮播图 -->
    <Swipe :swiperList="swiperList"/>
    <!-- 滚动菜单 -->
    <HorizenScrollMenu :menusList="menusList" />
    <!-- 快递寄收栏 -->
    <HomeMenuList />
    <!-- 商品列表-->
    <HomeGoods />
    <!-- 标签栏 -->
    <NavBar />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, nextTick, onBeforeUnmount, onActivated } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import _ from 'lodash';

import NavBar from '~/Navbar.vue'
import Swipe from '@/components/Swipe.vue'
import HomeHeader from "./components/HomeHeader.vue"
import HomeGoods from './components/HomeGoods.vue'
import HomeMenuList from './components/HomeMenuList.vue'
import HorizenScrollMenu from './components/HorizenScrollMenu.vue'

import { getLocal, setLocal} from "@/common/js/utils";
import { useHomeStore } from '@/store/home.js'
import { showLoadingToast, closeToast } from 'vant'

const homeStore = useHomeStore(); // 本地到中央的联系
const menusList = computed(()=>homeStore.menusList)
const swiperList = computed(() => homeStore.swiperList)

const isSort = ref(false)
// 监听滚动触发事件
const setHeaderScroll = () => {
  let scrollTop = window.pageYOffset || document.documentElement || document.body.scrollTop;
  // 头部搜索栏缩放
  if (scrollTop > 0) {
    if (!isSort.value) {
      isSort.value = true
    }
  } else {
    if (isSort.value) {
      isSort.value = false
    }
  }
}
// 方便卸载时移除监听
const throttleHandleScroll = _.throttle(setHeaderScroll, 200);
nextTick(() => { // 更早拿到更新数据
  window.addEventListener('scroll', _.throttle(setHeaderScroll, 200));
})
onMounted(async () => {
  showLoadingToast({
      message: '加载中...',
      forbidClick: true
  })
  await Promise.all([homeStore.getSwiperList(), homeStore.getScrollMenu(), homeStore.getVideosList()])
  closeToast();
})
onBeforeUnmount(() => { // 卸载时移除监听的事件
  window.removeEventListener('scroll', throttleHandleScroll);
})

</script>
<style lang="stylus" scoped>

</style>