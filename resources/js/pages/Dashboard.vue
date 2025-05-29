<template>
    <DashboardLayout>
        <section class="section">
          <div class="container">
            <h1 class="h3 title mb10">Личный кабинет</h1>
          </div>
          <div class="row">
            <div class="col-4">
              <div class="container">
                <ul>
                  <li>Привет, {{ auth.user.name }}</li>
                  <li>Мои курсы</li>
                  <li>Мои вебинары</li>
                  <li>Мои конференции</li>
                  <li>Выход</li>
                </ul>
              </div>
            </div>
            <div class="col-8">
              <div class="container">
                <h2 class="h4">Мои курсы</h2>
                <div class="row">
                  <div class="col-4" v-for="course in courseStore.courses" :key="course.id">
                    {{ course.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </DashboardLayout>
</template>

<script setup>
  
  import DashboardLayout from '../layouts/DashboardLayout.vue';
  import { useCourseStore } from '../stores/CourseStore';
  import { useAuthStore } from '../stores/AuthStore';
  import { onMounted } from 'vue'

  const courseStore = useCourseStore()
  const auth = useAuthStore()

  onMounted(() => {
      if (auth.user?.is_admin) {
          courseStore.fetchCourses()
      }
  })

</script>