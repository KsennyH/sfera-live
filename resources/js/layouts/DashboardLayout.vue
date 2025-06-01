<template>
    <MainHeader />
    <main>
        <section class="section dashboard">
          <div class="container">
            <h1 class="h3 title mb10">Личный кабинет</h1>
          </div>
          <div class="row">
            <div class="col-3">
              <div class="container height100">
                <DashboardSidebar @logout="handleLogout" />
              </div>
            </div>
            <div class="col-9">
              <div class="container">
                <slot />
              </div>
            </div>
          </div>
        </section>
    </main>
</template>

<script setup>
    import MainHeader from '../components/MainHeader.vue';
    import DashboardSidebar from '../components/DashboardSidebar.vue';
    import { useAuthStore } from '../stores/AuthStore';
    import { useRouter } from 'vue-router'
    const router = useRouter()
    const auth = useAuthStore()

    const handleLogout = async() => {
        await auth.logout()
        router.push('/')
    }

</script>