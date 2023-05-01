import { Get } from '../api/server.js'

const getSwiperList = () => {
    return Get('/swiperList')
}

const getVideosList = () => {
    return Get('/videosList')
}

const getScrollMenu = () =>{
    return Get('/scrollmenu')
}

export const homeApi = {
    getSwiperList,
    getVideosList,
    getScrollMenu
}


