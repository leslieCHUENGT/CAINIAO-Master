import { defineStore } from 'pinia'
// 每个路由级别组件都有独立的store 模块
// import { getSwiperList, getVideosList, getScrollMenu } from '@/service/home.js'
import { homeApi } from '@/service/index.js'
// 每个子仓库都是一个函数, use 开头, store结尾,  hooks
// 界面工程师
export const useHomeStore = defineStore('home', {
    state: () => ({ 
        swiperList: [],
        videosList: [],
        menusList: []
    }),
    actions: {
        // 修改 也在store 里面 数据管理的闭环? 
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
