# 项目实战开发的点位

- 写一个面试官喜欢的项目
- 路由配置安排好 5个页面
    首页 详情页  登录页面 搜索页  tab level 1
- 安排的能力点
    - 路由 懒加载 meta 路由守卫
    - 防抖节流 + localStorage 搜索
    - 组件化能力
    - mockjs 假接口

- vuex /pinia 难点  难以下手
    - 搭好架子 pinia 更直观
        1. 数据由中央管理
        本地组件onMounted + api + reactive
        (state) 私有状态
        pinia 全局状态
            root state -> modules -> defineStore 

- 项目的数据管理流程
    1. 接口请求不在属于页面
        状态不属于组件了
    2. mock 数据到位
    3. 定义好接口
    4. store 对象
        - store 建一个文件
        - defineStore  方法,  返回state 初始值
        - 页面上 读出来 从中央到本地
        - 请求接口数据
    5. pinia + 父子组件props +emit
    6. 界面效果降级，基于组件的还原

1. 组件数据：
   1. 瀑布流
   2. 骨架屏
   3. loading
2. 滚动监听



import { defineStore } from 'pinia'; // 定义store模型

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: new Map(), // 无重复储存商品 做字典使用
        productItems: [] // 存储商品数据 引用式赋值 实时更新数据
    }),
    actions: {
        setProducts(val){
            // 重复添加
            if (this.products.has(val.iid)) {
              if (this.products.get(val.iid).inventory > 0) {
                val.inventory = val.inventory - val.count
                val.quantity = val.quantity + val.count
              } else {
                showToast('库存不足, 请选择其他商品')
              }
            } else {
              // 第一次添加
              this.products.set(val.iid, val)
              val.quantity = val.count
              val.inventory = val.inventory - val.quantity
              this.productItems.push(val)
            }
          },
        deleteProducts(val){
            this.productItems = this.productItems.filter(item => item.iid !== val)
        }
    },
    getters: {
        cartProducts: () => {
            return this.productItems.map(item => ({
              id: item.iid,
              title: item.title,
              price: `${item.price}.00`,
              desc: item.desc,
              imgSrc: item.imgSrc,
              quantity: item.quantity
            }));
          },
          totalProducts: () => {
            // 计算总价
            let totalPrice = this.productItems.reduce((pre, cru) => pre + cru.price * cru.quantity, 0) * 100
            // 计算总数
            let totalQuantity = this.productItems.reduce((pre, cru) => pre + cru.quantity, 0)
            totalQuantity > 0 ? totalQuantity : undefined
            return {
              totalPrice: totalPrice,
              totalQuantity: totalQuantity
            }
          },
          // 购物商品数组长度
          length: () => this.productItems.length
    }
})