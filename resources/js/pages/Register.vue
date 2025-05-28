<template>
    <MainLayout>
        <section class="section">
            <div class="container">
                <form @submit.prevent="handleRegister" class="user-form">
                    <div class="back back_light">
                        <h1 class="h4 mb6">Регистрация</h1>
                        <input v-model="form.name" type="text" class="input mb3" placeholder="Имя" required />
                        <input v-model="form.email" type="email" class="input mb3" placeholder="Email" required />
                        <input v-model="form.password" type="password" class="input mb3" placeholder="Пароль" required />
                        <input v-model="form.password_confirmation" type="password" class="input mb3" placeholder="Подтверждение пароля" required />
                        <UiButton class="button_orange" type="submit">Зарегистрироваться</UiButton>
                    </div>
                    <p v-if="auth.error" style="color: red">{{ auth.error }}</p>
                </form>
            </div>
        </section>
    </MainLayout>
  
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    import { useAuthStore } from '../stores/AuthStore'
    import UiButton from '../components/ui/UiButton.vue'
    import MainLayout from '../layouts/MainLayout.vue'

    const router = useRouter()
    const auth = useAuthStore()

    const form = ref({
        name: null,
        email: null,
        password: null,
        password_confirmation: null
    })

    const handleRegister = async () => {
        await auth.register(form.value)
        if (auth.user) {
            router.push('/dashboard')
        }
    }

</script>

<style scoped>
    .user-form {
        max-width: 600px;
        margin: 0 auto;
    }
</style>