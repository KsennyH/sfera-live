import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useAuthStore = defineStore('auth-store', () => {
    const user = ref(null)
    const error = ref(null)

    const fetchUser = async () => {
        try{
            const response = await axios.get('/api/user')
            user.value = response.data
        } catch (err) {
            user.value = null
        }
    }

    const register = async (formData) => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('/api/register', formData)
            await fetchUser()
        } catch (err) {
            if (err.response?.data?.errors) {
                error.value = Object.values(err.response.data.errors).flat().join(' ')
            } else {
                error.value = 'Ошибка регистрации'
            }
        }
    }


    const login = async (credentials) => {
        try {
            await axios.get('/sanctum/csrf-cookie')
            await axios.post('api/login', credentials)
            await fetchUser()
            console.log(user);
        } catch (err) {
            if (err.response?.data?.errors) {
                error.value = Object.values(err.response.data.errors).flat().join(' ')
            } else {
                error.value = 'Ошибка входа'
            }
        }
    }

    const logout = async () => {
        try {
            await axios.post('api/logout')
        } catch (err) {

        } finally {
            user.value = null
        }        
    }

    return { user, error, fetchUser, register, login, logout }
})