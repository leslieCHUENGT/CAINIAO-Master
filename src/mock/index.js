import Mock, { Random } from 'mockjs'
import swiperList from './data/swiperList'
import videosList from './data/videosList'
import scrollmenu from './data/scrollmenu'
import products from './data/shop'
import detail from './data/detail'

const usersMap = new Map()// 存储全量用户数据
const regName = new Set() // 存值用户注册账号

Mock.setup({
    timeout: '20-1000' // 随机的延迟时间, 模式请求耗时
})

Mock.mock(/\/swiperList/, 'get', () => {
    return {
      code: 0,
      result: swiperList
    }
})

Mock.mock(/\/videosList/, 'get', () => {
    return {
      code: 0,
      result: videosList
    }
})

Mock.mock(/\/scrollmenu/, 'get', () => {
  return {
    code: 0,
    result: scrollmenu
  }
})

Mock.mock(/\/products/, 'get', () => {
  // 瀑布流的高度设置
  const maxNum = 250;
  const minNum = 200;
  const productsWithHeight = products.map(item => ({ 
    ...item,
    height:Math.random()*(maxNum - minNum + 1) + minNum
  }))
  return {
    code: 0, 
    result: productsWithHeight
  }
})

Mock.mock(/\/detail/,  'get', (options) => {
  let id = options.url.split('=')[1]; // 需要跳转至详情页的商品ID 
  let res = detail.find(item => item.id === id); // 拿到对应商品数据
  if (res.id === id)
  return {
    code: 0,
    result: res.data
  }
})


// 模拟登录注册
Mock.mock(/\/login/, 'post', (options) => {
  const { body } = options
  const { username, password, regname, regpassword, type } = JSON.parse(body)
  const result = regName.has(username) // 用户名是否注册
  const regPassword = usersMap.get(username) // 查询密码
  if (type === 'login') { // 登录请求
    if (result && password === regPassword) { // 成功登录
      return {
        code: 0,
        status: 200,
        token: 'xxvcvdvcvcvdfdfddddddd',
        msg: '登录成功'
      }
    } else if(result) { // 密码错误
      return {
        code: 1,
        status: 400,
        msg: '密码有误，请重新输入'
      }
    } else { // 账号错误
      return {
        code: 1,
        status: 400,
        msg: '用户名未注册'
      }
    }
  } else if (type === 'register') { // 注册请求
    if (usersMap.has(regname)) { // 用户名已注册
      return true
    } else {
      usersMap.set(regname, regpassword); // 用户名未注册
      regName.add(regname)
      return false
    }
  }
})

