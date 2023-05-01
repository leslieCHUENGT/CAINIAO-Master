import { Get } from '../api/server.js'

const getProductsDetail = (id) => {
    return Get('/detail', { params: { id: id } }) // 请求数据时传递id参数
}

export const detailApi = {
    getProductsDetail
}