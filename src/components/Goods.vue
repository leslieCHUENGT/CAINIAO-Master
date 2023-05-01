<template>
  <div>
    <section class="goods">
      <van-skeleton title :row="3" :loading="props.loading">
      <div class="good">
        <main class="wrapper">
        <div class="goods-box">
          <div
            class="goods-item"
            v-for="item in props.leftGoods"
            :key="item.goodsId"
            style="height:{{ item.height }} px"
            @click="gotoDetail(item.goodsId)"            
          >
            <img v-lazy="item.goodsCoverImg" />
            <div class="goods-desc">
              <div class="title">{{ item.goodsName }}</div>
              <div class="price">￥{{ item.sellingPrice }}</div>
            </div>
          </div>
      </div>
      <div class="goods-box">
          <div
            class="goods-item"
            v-for="item in props.rightGoods"
            :key="item.goodsId"
            style="height:{{ item.height }} px" 
            @click="gotoDetail(item.goodsId)"        
          >
            <img v-lazy="item.goodsCoverImg" />
            <div class="goods-desc">
              <div class="title">{{ item.goodsName }}</div>
              <div class="price">￥{{ item.sellingPrice }}</div>
            </div>
          </div>
      </div>
      
    </main>
    <div class="section" style="height:6rem"></div>
    </div>
    </van-skeleton>  
    </section>

  </div>
</template>
<script setup>
import { reactive,computed, ref, onMounted,nextTick } from "vue";
import { useRouter } from 'vue-router'
import { useProductsDetailStore } from '@/store/detail.js'

// 引入 useProductsDetailStore 和 useRouter
import { reactive, computed, ref, onMounted, nextTick } from "vue";
import { useRouter } from 'vue-router'
import { useProductsDetailStore } from '@/store/detail.js'

// 定义 props
const props = defineProps({
  leftGoods: {
    type: Array,
    default: []
  },
  rightGoods: {
    type: Array,
    default: []
  },
  loading: {
    type: Boolean,
    default: true
  }
});

// 获取路由和 store
const router = useRouter()
const productsDetailStore = useProductsDetailStore();

// 跳转到详情页
const gotoDetail = async (id) => {
  router.push({
      path: `/detail/${id}`
  })
}

</script> 
<style lang='stylus' scoped>
@import '../common/style/mixin.styl';
.goods-search-action
  position: fixed;
  z-index: 10000;
  opacity: 1;
  top: 0;
  left: 0;
  width:100%
  background-color: #fff
.good
  margin 0 0.3rem 0 0.3rem; 
  background-color: #fff
  display: flex;
  flex-direction: column;
  overflow: hidden;  
  .wrapper 
    flex: 1;
    display: flex;
    justify-content:space-between;
    overflow-y: scroll;
  .goods-box
      width 50%
      padding .266667rem
      .goods-item
        margin 0.2rem
        border-bottom 1px solid #e9e9e9
        img 
          display: block;
          width: 3.2rem;
          margin: 0 auto;
        .goods-desc 
          text-align: center;
          font-size: 0.37333rem;
          padding: 0.266667rem 0;
          .title 
             color: #222333;
          .price 
             color: $primary;
            
      
  
  
</style>