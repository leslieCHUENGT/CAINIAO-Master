<template>
  <div class="content">
    <div class="content-header">
      <div class="container-header">
        <div class="avatar">
          <img src="https://i.328888.xyz/2023/03/20/P2kVc.png" />
          <div class="description">
            <text>tb109875817</text>
          </div>
        </div>
        <div class="aside">
          <div class="idCode">
            <van-icon name="smile-comment-o" size=".6rem"/>
            <div>身份码</div>
          </div>
          <div class="setting">
            <van-icon class="setting-o" name="setting-o" size=".6rem"/>
            <div>设置</div>
          </div>
      </div>
      </div>
      <div class="itemList">
          <div class="item">
            <text>1</text>
            <p>手机号</p>
          </div>
          <div class="item">
            <text>0</text>
            <p>亲友</p>
          </div>
          <div class="item">
            <text>33</text>
            <p>地址簿</p>
          </div>
          <div class="item">
            <text>0</text>
            <p>红包卡劵</p>
          </div>
          <div class="item">
            <text>4</text>
            <p>导入包裹</p>
          </div>
        </div>
    </div>
    <el-card class="contianer-bar" >
      <div class="item">
        <div class="item-head"> 
          <van-icon name="fire-o" size="0.5rem"/><text>关联账号，导入包裹</text>
        </div>
        <div class="item-aside"><text>立即关联账号&nbsp;&nbsp;></text></div>
      </div>
    </el-card>
    <el-card class="container-rights">
      <div class="container-rights-haeder">
        <text>我的权益</text>
      </div>
      <div class="container-rights-menus">
        <div class="itemlist">
          <div class="items">
            <div class="item">
              <van-icon name="vip-card-o" size=".6rem"/>
            </div>
            <div>
              寄件会员
            </div>
          </div>
          <div class="items">
            <div class="item">
              <van-icon name="smile-o" size=".6rem"/>
            </div>
            <div>
              裹酱积分
            </div>
          </div>
          <div class="items">
            <div class="item">
              <van-icon name="flower-o" size=".6rem"/>
            </div>
            <div>
              邀请有礼
            </div>
          </div>
          <div class="items">
            <div class="item">
              <van-icon name="good-job-o" size=".6rem"/>
            </div>
            <div>
              服务中心
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <el-card class="container-order">
      <div class="container-order-header">
        <text>我的订单</text>
      </div>
      <div class="container-order-menus"> 
        <div class="item">
          <van-icon name="guide-o" size=".6rem"/>
        </div>
        <div>寄件订单</div>
      </div>
    </el-card>
    <Swipe :swiperList="swiperList"/>
    <nav-bar></nav-bar>
  </div>
</template>

<script setup>
import Swipe from '@/components/Swipe.vue'
import { onMounted,computed } from 'vue';
import NavBar from '@/components/NavBar.vue'
import { useHomeStore } from '@/store/home.js'
import { showLoadingToast, closeToast } from 'vant'

const swiperList = computed(() => homeStore.swiperList)
const homeStore = useHomeStore(); // 本地到中央的联系

onMounted(async () => {
  showLoadingToast({
      message: '加载中...',
      forbidClick: true
  })
  await homeStore.getSwiperList()
  closeToast();
})

</script>

<style lang="stylus" scoped>
@import '../../common/style/mixin'
.content
  .content-header
    margin 0.1rem 0.5rem 0.1rem 0.5rem
    .container-header
      fj()
      align-items center
      .avatar 
        fj()
        align-items center
        img
          width 1rem
          height 1rem
          vertical-align middle
      .aside
        fj()
        align-items center
        width 2rem
        height 100%
    .itemList
      fj()
      margin-top 0.5rem
      align-items center  
      text-align center
      font-size 0.4rem
  .contianer-bar
    mb()
    font-size 0.3rem 
    .item
      fj()
      .item-aside
        color gray
  .container-rights
    mb()
    .container-rights-haeder
      margin-bottom 0.2rem 
      font-size 0.3rem 
    .container-rights-menus
      .itemlist
        fj()
        align-items center 
        .items
          .item
            fj(center)
            align-items center
  .container-order
    mb()
    .container-order-header
      margin-bottom 0.2rem 
      font-size 0.3rem      
    .container-order-menus
      width 1.3333rem
      .item
        fj(center)
        align-items center
</style>