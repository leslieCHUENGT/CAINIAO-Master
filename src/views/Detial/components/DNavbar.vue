<template>
  <div class="product-detail-navbar">
      <van-action-bar>
          <van-action-bar-icon icon="chat-o" text="客服"></van-action-bar-icon>
          <van-action-bar-icon 
            icon="cart-o" 
            text="购物车" 
            :badge="o.totalQuantity > 0 ? o.totalQuantity : ''" 
            @click="toCart" 
          />
          <van-action-bar-button type="warning" text="加入购物车" @click="showPopup"></van-action-bar-button>
          <van-popup
              v-model:show="show"
              round
              position="bottom"
              :style="{ height: '70%' }"
          >
            <DPopup :product="product"/>
          </van-popup>
          <van-action-bar-button type="danger" text="立即购买"></van-action-bar-button>
      </van-action-bar>
  </div>
</template>
<script setup>

import DPopup from './DPopup.vue'
import { onMounted,computed,ref } from 'vue'
import { showLoadingToast, closeToast } from 'vant'
// 导入自定义的 store
import { useCartStore } from '@/store/cart.js'
import { useProductsDetailStore } from '@/store/detail.js'
// 导入路由相关的库
import { useRoute,useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
// 定义响应式变量
const show = ref(false)
// 获取自定义的 store
const productsDetailStore = useProductsDetailStore()
// 获取商品信息
const product = computed(() => productsDetailStore.description)
// 获取购物车信息
const cartStore = useCartStore()
const o = computed(() => cartStore.totalProducts)

// 跳转到购物车页面
const toCart = () => router.push('/cart');
// 显示弹窗
const showPopup = () => {
  show.value = true
}
// 初始化页面
const init = async () => {
  // 显示加载中的提示
  showLoadingToast({
    message: '加载中...',
    forbidClick: true
  });
  // 获取路由参数中的 id
  const { id } = route.params
  // 加载商品详情
  await productsDetailStore.loadAllProductsDetail(id)
  // 关闭加载中的提示
  closeToast()
}
// 在页面挂载后初始化页面
onMounted(() => {
  init()
})


</script>
<style lang="stylus">
  
</style>