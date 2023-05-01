import { defineStore } from 'pinia'; 

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
