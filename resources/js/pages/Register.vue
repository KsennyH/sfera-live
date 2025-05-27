<script setup>
    import { ref, onMounted } from 'vue'
    import axios from 'axios'
    import { useRouter } from 'vue-router'
    import UiButton from '../components/ui/UiButton.vue'
    import MainLayout from '../layouts/MainLayout.vue'

    const router = useRouter()

    const form = ref({
        name: null,
        email: null,
        password: null,
        password_confirmation: null
    })

    const error = ref(null)
    const success = ref(null)

    onMounted(() => {
        axios.get('/sanctum/csrf-cookie')
    })

    const register = async () => {
        try {
            await axios.post('/api/register', form.value)
            success.value = 'Регистрация прошла успешно!'
            router.push('/dashboard')
        } catch (err) {
            if (err.response?.data?.errors) {
            error.value = Object.values(err.response.data.errors).flat().join(' ')
            } else {
            error.value = 'Ошибка регистрации'
            }
        }
    }
</script>

<template>
    <MainLayout>
        <section class="section">
            <div class="container">
                <form @submit.prevent="register" class="user-form">
                    <div class="back back_light">
                        <h1 class="h4 mb6">Регистрация</h1>
                        <input v-model="form.name" type="text" class="input mb3" placeholder="Имя" required />
                        <input v-model="form.email" type="email" class="input mb3" placeholder="Email" required />
                        <input v-model="form.password" type="password" class="input mb3" placeholder="Пароль" required />
                        <input v-model="form.password_confirmation" type="password" class="input mb3" placeholder="Подтверждение пароля" required />
                        <UiButton class="button_orange" type="submit">Зарегистрироваться</UiButton>
                    </div>
                    <p v-if="error" style="color: red">{{ error }}</p>
                    <p v-if="success" style="color: green">{{ success }}</p>
                </form>
            </div>
        </section>
    </MainLayout>
  
</template>

<style scoped>
    .user-form {
        max-width: 600px;
        margin: 0 auto;
    }
</style>