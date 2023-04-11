<template>
    <div>
        <div class="goods-header">
            <text style="font-weight:1000;font-size:0.4rem">大家都在逛</text>
        </div>
        <Goods :leftGoods="leftGoods" :rightGoods="rightGoods" :loading="state.loading"/>
    </div>
</template>
<script setup>
import { computed, onMounted, reactive } from "vue";
import _ from "lodash";
import Goods from "@/components/Goods.vue";
import { useProductsStore } from '@/store/products.js'

const productsStore = useProductsStore()
const leftGoods = computed(() => productsStore.leftGoods)
const rightGoods = computed(() => productsStore.rightGoods)
const state = reactive({
    loading: true
})

onMounted(async() => {
    await productsStore.loadAllProducts()
    state.loading = false; 
})
</script>
<style lang="stylus" scoped>

</style>