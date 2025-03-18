// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'

export const useVisability = defineStore('isVisible', {

  state: () => {
    return {
      isVisible: false,
      userData: Array,
      error: null,
      isLoading: false
    }
  },
  actions: {
    changeVisability() {
      this.isVisible = !this.isVisible
    },

    async fetchUserData() {
      this.isLoading = true

      try {
        const response = await axios.get('https://randomuser.me/api')
        this.userData = response.data[0]
      } catch (error) {
        this.error = error
      } finally {
        console.log(this.userData)
        this.isLoading = false
      }
    }
  },
})
