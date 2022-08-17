import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    baseUrl : 'http://localhost:3000',
    isLogin : false
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    async loginHandler(username, password) {
      try {
        let user = await axios({
          method: "POST",
          url: this.baseUrl + "/login",
          data: { username, password },
        });

        localStorage.setItem('access_token', user.data.access_token)
        this.isLogin = true
        this.router.push({path : '/'})
      } catch (error) {
        
      }
      
    }
  }
})
