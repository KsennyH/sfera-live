<template>
    <DashboardLayout>
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
                <div class="title-flex mb10">
                  <h2 class="h4">Создать новый курс</h2>
                </div>
                <CourseForm />
              </div>
            </div>
          </div>
        </section>
    </DashboardLayout>
</template>
<script setup>

  import CourseForm from '../components/CourseForm.vue';
  import DashboardSidebar from '../components/DashboardSidebar.vue';
  import DashboardLayout from '../layouts/DashboardLayout.vue';
  import { useAuthStore } from '../stores/AuthStore';
  import { useRouter } from 'vue-router'
  const router = useRouter()
  const auth = useAuthStore()

  const handleLogout = async() => {
    await auth.logout()
    router.push('/')
  }
    
</script>