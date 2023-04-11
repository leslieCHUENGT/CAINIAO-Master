<template>
  <el-card :body-style="{ padding: '0px' }" class="homescroll">
    <div class="container" >
      <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content" ref="content">
          <div
            class="scroll-item"
            v-for="item in menusList.scrollList"
            :key="item"
          >
            <img v-lazy="item.imgSrc" alt="" />
            <div>{{ item.description }}</div>
          </div>
        </div>
        <div class="pointer-wrapper">
          <div class="inner" :style="{ left: innerLeft }"></div>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import _ from "lodash";
import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";
BScroll.use(ObserveDOM);

const props = defineProps({
  menusList: {
    type: Object,
    default: {},
  },
});
const innerLeft = ref("0rem");
const scroll = ref(null);
const content = ref(null);
let wrapperWidth = 0;
let contentWidth = 0;
let bs = null;
onMounted(() => {
  wrapperWidth = scroll.value.offsetWidth;
  contentWidth = content.value.offsetWidth;
  bs = new BScroll(scroll.value, {
    probeType: 3,
    scrollX: true,
    scrollY: false,
    observeDOM: true,
  });
  const onScroll = (position) => {
    let percent = Math.abs(position.x / (contentWidth - wrapperWidth));
    let moveLeft = percent * 0.2;
    innerLeft.value = `${moveLeft}rem`;
  };
  bs.on("scroll", _.throttle(onScroll, 50));
});
</script>

<style lang='stylus' scoped>
@import '../../../common/style/mixin.styl';

.homescroll
  mb()
  border-radius 15px
.container 
  margin-top 0.1rem
  text-align center
  .scroll-wrapper 
    background-color #fff
    margin 0.05rem auto
    white-space nowrap
    border 0px solid #42b983
    overflow hidden
    position relative

    .scroll-content 
      display inline-block
      .scroll-item 
        display inline-block
        padding 0.3rem 0.3rem 0.3rem 0.3rem
        height 0.8rem
        font-size 0.1rem
        text-align center

        img 
          width: 0.8rem
    .pointer-wrapper 
      position relative
      bottom 0.04rem
      width 0.4rem
      height 0.1rem
      background gray
      left 50%
      margin-left -0.2rem

      .inner 
        position absolute
        background white
        width 0.2rem
        height 100%
      
    
  

</style>