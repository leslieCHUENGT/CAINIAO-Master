import { defineStore } from 'pinia'
import { showToast } from 'vant'

export const useCartStore = defineStore('cart',{
    state: () => ({
        products: new Map(), // 无重复储存商品 做字典使用
        productItems: [] // 存储商品数据 引用式赋值 实时更新数据
    }),
    actions: {
        setProducts(val) {
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
        deteleProducts(val) {
            this.productItems = this.productItems.filter(item => item.iid !== val)
        }
    },
    getters: {
        // 筛选数据返回
        cartProducts(state){
            return state.productItems.map(item => ({
                id: item.iid,
                title: item.title,
                price: `${item.price}.00`,
                imgSrc: item.imgSrc,
                quantity: item.quantity
            }));
        },
        totalProducts(state){
            // 计算总价
            let totalPrice = state.productItems.reduce((pre, cru) => pre + cru.price * cru.quantity, 0) * 100
            // 计算总数
            let totalQuantity = state.productItems.reduce((pre, cru) => pre + cru.quantity, 0)
            totalQuantity > 0 ? totalQuantity : undefined
            return {
                totalPrice: totalPrice,
                totalQuantity: totalQuantity
            }
        },
        // 购物商品数组长度
        isSet(state) {
            return (state.productItems.length > 0) ? true : false
        }
    }
})