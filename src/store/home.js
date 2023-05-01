import { defineStore } from 'pinia'
import { homeApi } from '@/service/index.js'

export const useHomeStore = defineStore('home', {
    state: () => ({ 
        swiperList: [],
        videosList: [],
        menusList: []
    }),
    actions: {
        async getSwiperList() {
            const [e, r] = await homeApi.getSwiperList();
            if (!e && r) this.swiperList = r
        },
        async getVideosList() {
            const [e, r] = await homeApi.getVideosList();
            if (!e && r) this.videosList = r
        },
        async getScrollMenu() {
            const [e, r] = await homeApi.getScrollMenu();
            if (!e && r) this.menusList = r
        }
    }
})
