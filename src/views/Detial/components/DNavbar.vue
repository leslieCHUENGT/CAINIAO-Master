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
import { useCartStore } from '@/store/cart.js'
import { useProductsDetailStore } from '@/store/detail.js'
import { useRoute,useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const show = ref(false)
const productsDetailStore = useProductsDetailStore()
const product = computed(() => productsDetailStore.description)
const cartStore = useCartStore()
const o = computed(() => cartStore.totalProducts)

const toCart = () => router.push('/cart');
const showPopup = () => {
  show.value = true
}
const init = async () => {
  showLoadingToast({
    message: '加载中...',
    forbidClick: true
  });
  const { id } = route.params
  await productsDetailStore.loadAllProductsDetail(id)
  closeToast()
}
onMounted(() => {
  init()
})

</script>
<style lang="stylus">
  
</style>