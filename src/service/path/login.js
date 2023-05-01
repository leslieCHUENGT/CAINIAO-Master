import { Post } from '../api/server.js'

const doLogin = (user, type) => {
    user.type = type // 判断登录 or 注册
    return Post('/login', user)
}
  
export const loginApi = {
    doLogin
}
