import { defineStore } from 'pinia'
import axios from '@/service/axios.js'

export const productStore = defineStore('getProducts', {
  state: () => ({
    products: []
  }),
  getters: {
    },
  actions: {
    async getProducts() {
      try {
        const res = await axios.get('/product')
        this.products = res.data.products
        // console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    }
  }
})
