import { Get } from '../api/server.js'

const  getProducts = () => {
    return Get('/products')
}

export const shopApi = {
    getProducts
}
