<template>
    <div>
      <van-card 
        :price="props.product.price" 
        :title="props.product.title" 
        :thumb="props.product.imgSrc"
      />
      <div class="count">数量</div>
      <van-stepper v-model="count" theme="round" button-size="22" disable-input />
      <div class="button">
        <van-button type="primary" block round color="#115799" @click="addToCart">确定</van-button>
      </div>
    </div>
</template>
<script setup>
import { ref} from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/store/cart.js'
import { getLocal, TOKEN } from '@/common/js/utils'
// 定义props
const props = defineProps({
    product: {
      type: Object,
      default: {}
    }
})
// 定义count
let count = ref(1)
// 获取路由
const router = useRouter()
// 获取登录状态
const isLogin = getLocal(TOKEN)
// 获取购物车store
const cartStore = useCartStore()
// 添加到购物车
const addToCart = () => {
  console.log(!isLogin)
  if (!isLogin) {
    // 如果未登录，跳转到登录页面
    router.push({
      path: '/login'
    })
  } else {
    // 如果已登录，将商品添加到购物车
    props.product.count = count.value < props.product.inventory ? count.value : props.product.inventory;
    cartStore.setProducts(props.product)
  }
}

</script>
  
<style lang="stylus" scoped>
  .van-card
    background-color #fff
    margin-top .533333rem
  .button
    margin .533333rem
  .count
    font-size .426667rem
    color black
    margin .266667rem .533333rem
</style>