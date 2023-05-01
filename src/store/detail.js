import { defineStore } from 'pinia'
// import { getProductsDetail } from '@/service/detail'
import { detailApi } from '@/service/index.js'

export const useProductsDetailStore = defineStore('detail', {
    state: () => ({ 
        swiperList:[],
        description: {},
        selection:{}
    }),
    actions: {
        async loadAllProductsDetail (id) {
            const [e, r] = await detailApi.getProductsDetail(id)
            if (!e && r) {
                this.swiperList = r.swipeImgUrls
                this.description = r.description
                this.selection = r.selection
            }

        }
    }
})