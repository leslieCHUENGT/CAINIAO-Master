import { defineStore } from 'pinia'
import { getProductsDetail } from '@/service/detail'

export const useProductsDetailStore = defineStore('detail', {
    state: () => ({ 
        swiperList:[],
        description: {},
        selection:{}
    }),
    actions: {
        async loadAllProductsDetail (id) {
            const { result } = await getProductsDetail(id)
            this.swiperList = result.swipeImgUrls
            this.description = result.description
            this.selection = result.selection
        }
    }
})