import { useRoute } from 'vue-router'
import { ref } from 'vue'
export const getPageTitle = (pathName) => {
      const data = {
            login: '登录',
            introduce: '系统介绍',
            add: '添加商品'
      }
      return data[pathName] || ''
}
export const isCart = () => {
      const route = useRoute()
      const isCart = ref(false)
      const { id } = route.params
      return isCart.value = (id === '111' ? true : false)
}

export const getLocal = (name) => {
      return JSON.parse(localStorage.getItem(name))
}
// h5 提供的本地KeyValue存储
export const setLocal = (key, val) => {
     localStorage.setItem(key, JSON.stringify(val))
}