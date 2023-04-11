import { defineStore } from 'pinia'; // 定义store模型

export const useUserStore = defineStore('login',{
      state: () => ({ 
            isLogin: false
      }),
      actions: {
            setLogin(val) {
                  this.isLogin = val;
            }
      }
            
})
