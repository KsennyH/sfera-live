<template>
    <MainLayout>
        <section class="section">
            <div class="container">
                <form @submit.prevent="handleLogin" class="user-form">
                    <div class="back back_light">
                        <h1 class="h4 mb6">Логин</h1>
                        <input v-model="form.email" type="email" class="input mb3" placeholder="Email" required />
                        <input v-model="form.password" type="password" class="input mb3" placeholder="Пароль" required />
                        <UiButton class="button_orange" type="submit">Войти</UiButton>
                    </div>
                    <p v-if="auth.error" style="color: red">{{ auth.error }}</p>
                </form>
            </div>
        </section>
    </MainLayout>
</template>

<script setup>
    import MainLayout from '../layouts/MainLayout.vue';
    import UiButton from '../components/ui/UiButton.vue';
    import { ref } from 'vue';
    import { useRouter } from 'vue-router'
    import { useAuthStore } from '../stores/AuthStore';

    const router = useRouter()
    const auth = useAuthStore()

    const form = ref({
        email: null,
        password: null,
    })

    const handleLogin = async () => {
        await auth.login(form.value)
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