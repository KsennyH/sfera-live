import { ref } from 'vue'
import axios from 'axios'

export const currentUser = ref(null)

export const fetchUser = async () => {
  try {
    const response = await axios.get('/api/user')
    currentUser.value = response.data
  } catch {
    currentUser.value = null
  }
}

export const logout = async () => {
  await axios.post('api/logout')
  currentUser.value = null
}