<template>
  <div>
    <div v-if="!isSet">
      <Empty />
    </div>
    <div v-else>
      <CProducts />
    </div>
  </div>
  <NavBar />
</template>

<script setup>
import NavBar from '~/NavBar.vue';
import Empty from './components/Empty.vue';
// import CGoods from './components/CGoods.vue';
import CProducts from './components/CProducts.vue';
import { useUserStore } from '@/store/login.js'
import { useCartStore } from '@/store/cart.js'
import { ref, onMounted, computed } from 'vue';
import { showLoadingToast } from 'vant';

const cartStore = useCartStore()
const UserStore = useUserStore()
// const isLogin = computed(() => UserStore.isLogin)
const isSet = computed(() => cartStore.isSet)

showLoadingToast({
  message: '加载中...',
  forbidClick: true,
  overlay: true,
  overlayStyle: { backgroundColor: "#fff" }
});

</script>

<style lang="stylus" scoped>

</style>