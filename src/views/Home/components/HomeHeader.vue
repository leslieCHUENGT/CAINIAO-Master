<template>
  <div class="hm">
    <van-sticky>
      <header class="hmHeader">
        <div class="hm-fixed"> 
           <!-- 地址选项 -->
           <div class="area">
            <van-config-provider :theme-vars="themeVars">
              <van-field v-model="fieldValue" readonly is-link arrow-direction="down" @click="show = true" />
              <van-popup :show="show" round position="bottom">
                <van-cascader v-model="cascaderValue" :options="options" @finish="onFinish" />
              </van-popup>
            </van-config-provider>
          </div>
          <van-icon name="scan" size=".533333rem" style="margin-right: .533333rem" />
          <van-icon name="chat-o" size=".533333rem" style="margin-right: .533333rem" />
        </div>
      </header>
    </van-sticky>
    <van-sticky class="search-bar" :class="{'search-bar-show': show}">
      <van-search 
        :class="{ 'search-normal': !props.isSort, 'search-sort': props.isSort }" 
        shape="round" 
        readonly 
        @click-input="onClick"
      >
      </van-search>
    </van-sticky>
    <div class="header-menus">
      <div class="item"><van-icon name="coupon-o" size="0.8rem" />&nbsp;取包裹</div>
      <div class="item"><van-icon name="guide-o" size="0.8rem" />寄包裹</div>
      <div class="item"><van-icon name="contact" size="0.8rem" />身份码</div>
    </div>
</div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { getLocal, setLocal, ADDRESS_KEY } from "@/common/js/utils";
const router = useRouter();
const props = defineProps({
  isSort: {
    type: Boolean,
    default: false
  }
})
const show = ref(false);
const fieldValue = ref("北京");
// 选择完成更新地址
const updataAddress = () => setLocal(ADDRESS_KEY, fieldValue.value);
const address = getLocal(ADDRESS_KEY);
if (address) {
  fieldValue.value = address;
};
const cascaderValue = ref("");

// 自定义主题样式
const themeVars = reactive({
  cellLineHeight: "20px",
  cellVerticalPadding: "0",
  cellHorizontalPadding: '0',
  cellTextColor: "rgb(17, 17, 17)",
  cellFontSize: "15px",
  cellRightIconColor: "rgb(17, 17, 17)",
  StickyTop: "5px"
});
// 选项列表，children 代表子选项，支持多级嵌套
const options = [
  {
    text: "江西省",
    value: "310000",
    children: [{ text: "南昌市", value: "310100" }],
  },
  {
    text: "浙江省",
    value: "330000",
    children: [{ text: "杭州市", value: "330100" }],
  },
  {
    text: "江苏省",
    value: "320000",
    children: [{ text: "南京市", value: "320100" }],
  },
];
// 点击跳转
const onClick = () => {
  router.push('/search')
};
// 全部选项选择完毕后，会触发 finish 事件
const onFinish = ({ selectedOptions }) => {
  show.value = false;
  // 拿到地址
  fieldValue.value = selectedOptions
    .map((option) => option.text)
    .join("/")
    .slice(0, 6);
  updataAddress(); // 选择完记录地址更新
};
</script>

<style lang="stylus" scoped>
@import '../../../common/style/mixin';
.hmHeader 
  padding .266667rem 0.32rem 
  display flex
  background-color #fff
  .hm-fixed 
    color rgb(17, 17, 17)
    display flex
    height .533333rem  
    margin .186667rem 0
    .area
      margin-right 4.666666rem
      font-weight bold
      width 2.8rem /* 60/37.5 */
      pointer-events visibleFill
.van-icon
  font-weight bold
.van-cell:after 
  border-bottom 0
.search-bar-show
  display none
.search-bar 
  .search-normal 
    padding 0 .32rem .266667rem
    width 100%
    transition width .4s
  .search-sort 
    pointer-events visiblePainted
    transition width .4s
    padding .266667rem .32rem 
    width 7.666666rem
.header-menus
  margin 0 0.53333rem 0.23333rem 0.53333rem
  align-items center
  fj()
  .item 
    display:flex;
    align-items: center;

</style>