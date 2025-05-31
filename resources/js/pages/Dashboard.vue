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
                  <h2 class="h4">Мои курсы</h2>
                  <font-awesome-icon icon="fa-regular fa-pen-to-square" />
                  <router-link to="/dashboard/create">
                    <UiButton class="button_orange">Создать курс</UiButton>
                  </router-link>
                </div>
              </div>
                <div class="row" v-if="courseStore.courses.length">
                  <div class="col-4 col-lg-6" v-for="course in courseStore.courses" :key="course.id">
                    <div class="container">
                      <router-link :to="`/dashboard/${course.id}/edit`">
                        <div class="card">
                          <div class="card__info mb3">
                            <div class="height100">
                              <img class="radius" :src="course.image" :alt="course.title">
                            </div>
                          </div>
                          <div class="card__titles">
                            <h2 class="menu_heading mb3">{{ course.title }}</h2>
                          </div>
                        </div>
                      </router-link>
                    </div>
                  </div>
                </div>
                <p v-else>Загрузка...</p>
            </div>
          </div>
        </section>
    </DashboardLayout>
</template>

<script setup>
  
  import DashboardLayout from '../layouts/DashboardLayout.vue';
  import UiButton from '../components/ui/UiButton.vue';
  import { useCourseStore } from '../stores/CourseStore';
  import { useAuthStore } from '../stores/AuthStore';
  import { useRouter } from 'vue-router'
  import { onMounted } from 'vue'
import DashboardSidebar from '../components/DashboardSidebar.vue';

  const courseStore = useCourseStore()
  const router = useRouter()
  const auth = useAuthStore()

  const handleLogout = async () => {
    await auth.logout()
    router.push('/')
  }

  onMounted(() => {
      if (!auth.user?.is_admin) {
        router.push('/')
      } else {
        courseStore.fetchCourses()
      }
  })

</script>