import { defineStore } from 'pinia'
import { shopApi } from '@/service/index.js'

export const useProductsStore = defineStore('products', {
    state: () => ({ 
        allGoods: [],
        leftGoods: [],
        rightGoods: []
    }),
    actions: {
        async loadAllProducts() {
            const [e, r] = await shopApi.getProducts();
            if (!e && r) this.allGoods = r;
            // 设置瀑布流
            let leftTempGoods = [],
                rightTempGoods = [];
            const heights = [0, 0];
            const getMinHeight = () => { // 拿到高度最短的一行
                let minHeight = Math.min(...heights);
                return heights.indexOf(minHeight);
            };
            for (let i = 0; i < this.allGoods.length; i++) {
                let minHeightIndex = getMinHeight();
                if (minHeightIndex === 0) {
                    leftTempGoods.push(this.allGoods[i]);
                } else {
                    rightTempGoods.push(this.allGoods[i]);
                }
                heights[minHeightIndex] += this.allGoods[i].height;// 总是在最短的一行添加商品
            }
            this.leftGoods = leftTempGoods;
            this.rightGoods = rightTempGoods;
        }
    },
    getters: {

    }
})