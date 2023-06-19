<template>
    <div>
        <div class="container-shop" v-if="!isCartShow">
            <Swipe :swiperList="swiperList" :isHomeSwiper="isHomeSwiper"/>
            <div class="content">
                <el-card :body-style="{ padding: '0.2rem' }" class="content-header">
                    <div class="price">
                        <text>￥{{description.price}}</text> 
                    </div>
                    <div class="Monthly-Sales">
                        <i class="iconfont icon-tianmaologo2" style="font-size:0.8rem;"></i>
                        <text class="Monthly-Sales-text">月销{{ description.monthlySales }}+</text>
                    </div>
                    <h2>{{ description.title }}</h2>
                </el-card>
                <el-card :body-style="{ padding: '0.1rem' }" class="content-body">
                    <div class="itemList">
                        <div class="item-title">选择</div>
                        <div class="item-detail">颜色分类/套餐类型</div>
                        <van-icon name="arrow" size="0.433333rem" />
                    </div>
                    <div class="itemList">
                        <div class="item-title">发货</div>
                        <div class="item-detail">现货，付款48小时内发货</div>
                        <van-icon name="arrow" size="0.433333rem" />
                    </div>
                    <div class="itemList">
                        <div class="item-title">保障</div>
                        <div class="item-detail">退货运费险 极速退款 七天无理由退换</div>
                        <van-icon name="arrow" size="0.433333rem" />
                    </div>
                    <div class="itemList">
                        <div class="item-title">参数</div>
                        <div class="item-detail">品牌 型号 功能 材质 产地 省份 地市 ...</div>
                        <van-icon name="arrow" size="0.433333rem" />
                    </div>
                </el-card>
            </div>
        </div>
        <div class="container-cart" v-else>
            <DCart /> 
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue'
import { useProductsDetailStore } from '@/store/detail.js'
import Swipe from '@/components/Swipe.vue'
import { isCart } from '@/utils/index.js'

const isCartShow = isCart()
const isHomeSwiper = false
const productsDetailStore = useProductsDetailStore()
const swiperList = computed(() => productsDetailStore.swiperList)
const description = computed(() => productsDetailStore.description)

</script>
<style lang="stylus" scoped>
@import '../../../common/style/mixin';
.content
    height 11rem
    background #f7f7f7
    padding-top 0.1rem
    .content-header
        mbd()
        margin-top 0.23333rem
        .price
            color red
            font-size 0.533333rem
        .Monthly-Sales
            fj()
            align-items center
            .Monthly-Sales-text
                color gray
    .content-body
        mbd()
        margin-top 0.23333rem
        .itemList
            padding 0.16666rem 
            font-size 0.3888888rem
            fj()
            align-items center
            .item-title
                color gray
                width 1rem
            .item-detail
                flex 1

</style>