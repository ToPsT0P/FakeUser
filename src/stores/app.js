// Utilities
import { defineStore } from 'pinia'
import axios from 'axios'

export const useStore = defineStore('useStore', {

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
        const response = await axios.get('https://661c44f9e7b95ad7fa6a0d44.mockapi.io/User')
        this.userData = response.data[0]
      } catch (error) {
        this.error = error
      } finally {

        this.isLoading = false
      }
    },

    async changeUserData(name, age, bio) {
      try {
        await axios.put('https://661c44f9e7b95ad7fa6a0d44.mockapi.io/User/1', {
          Name: name,
          Age: age,
          Bio: bio
        });

      } catch (error) {
        console.error('Ошибка при выполнении put-запроса:', error);
      }finally {
        this.fetchUserData()
      }
    }
  },
})
