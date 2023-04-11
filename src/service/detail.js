import axios from "./config.js"

export const getProductsDetail = (id) => {
    return axios.get('/detail', { params: { id: id } }) // 请求数据时传递id参数
}

