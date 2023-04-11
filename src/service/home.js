import axios from "./config.js"

const getSwiperList = () => {
  return axios.get('/swiperList')
}

const getVideosList = () => {
  return axios.get('/videosList')
}

const getScrollMenu = () =>{
  return axios.get('/scrollmenu')
}

export { getSwiperList, getVideosList, getScrollMenu }