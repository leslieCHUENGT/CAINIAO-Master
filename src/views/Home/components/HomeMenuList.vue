<template>
<div class="homemenulist">
    <div class="homemenulist-tabs" :class="{ active: state.headerScroll }">
        <van-tabs line-width="10px" shrink>
            <van-tab title="收" >
                <div class="homemenulist-content-header">
                    <div class="item"><text>派送中 0</text></div>
                    <div class="item"><text>运输中 0</text></div>
                    <div class="item"><text>未发货 0</text></div>
                    <div class="item"><text>已签收 0</text></div>
                </div>
                <div class="homemenulist-content-body" v-show="!state.headerScroll">
                    <div class="item">历史签收包裹</div>
                    <div class="item"><i><van-icon name="arrow" /></i></div>
                </div>
                <div class="homemenulist-content-footer" v-show="!state.headerScroll">
                    <img src="https://i.328888.xyz/2023/03/23/q5orx.jpeg" alt="">
                    <img src="https://i.328888.xyz/2023/03/23/q5orx.jpeg" alt="">
                    <img src="https://i.328888.xyz/2023/03/23/q5orx.jpeg" alt="">
                    <img src="https://i.328888.xyz/2023/03/23/q9HGx.jpeg" alt="">
                    <img src="https://i.328888.xyz/2023/03/23/q9HGx.jpeg" alt="">
                </div>
            </van-tab>
            <van-tab title="寄">
                <div class="homemenulist-content-header">
                    <div class="item"><text>派送中 0</text></div>
                    <div class="item"><text>运输中 0</text></div>
                    <div class="item"><text>未发货 0</text></div>
                    <div class="item"><text>已签收 0</text></div>
                </div>
                <div class="homemenulist-content-body" v-show="!state.headerScroll">
                    <div class="item">历史签收包裹</div>
                    <div class="item">                        
                        <i><van-icon name="send-gift-o"/></i>
                        <i><van-icon name="point-gift-o"/></i>
                        <i><van-icon name="arrow" /></i>                       
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>
</div>
</template>
<script  setup>
import { reactive, nextTick } from "vue";
import _ from "lodash";

const state = reactive({
  headerScroll: false,
});

nextTick(() => {
  const setHeaderScroll = () => {
    let scrollTop =
      window.pageYOffset || document.documentElement || document.body.scrollTop;
    scrollTop > 250 ? (state.headerScroll = true) : (state.headerScroll = false);
  };
  const deteleHeaderScroll = () => {
    let scrollTop =
      window.pageYOffset || document.documentElement || document.body.scrollTop;
      if (scrollTop > 500)
            state.headerScroll = false;
};
  window.addEventListener("scroll", _.throttle(setHeaderScroll, 200));
  window.addEventListener("scroll", _.throttle(deteleHeaderScroll, 200));
});

</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin.styl';

.homemenulist
    border-radius 15px
    padding-bottom 0.36666rem
    mb()
    .active
        position: fixed;
        z-index: 10000;
        opacity: 1;
        top: 0;
        left: 0;
        width:100%
        background-color: #fff
    .homemenulist-content-header
        margin 0.1rem 0.7rem 0.1rem 0.7rem;
        fj()
        align-items center
        font-weight 10
    .homemenulist-content-body
        margin 0.2rem 0.5rem 0.2rem 0.5rem;
        fj()
        align-items center
    .homemenulist-content-footer
        margin 0.1rem 0.7rem 0.1rem 0.7rem;
        fj()
        align-items center
        img
            width 1rem
</style>