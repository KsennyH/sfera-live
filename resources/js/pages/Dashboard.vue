<template>
    <DashboardLayout>   
      <div class="title-flex mb10">
        <h2 class="h4">Мои курсы</h2>
        <router-link to="/dashboard/create">
          <UiButton class="button_orange">Создать курс</UiButton>
        </router-link>
      </div>
      <div class="row" v-if="courseStore.courses.length">
        <div class="col-4 col-lg-6" v-for="course in courseStore.courses" :key="course.id">
          <div class="container">
            <div class="card-actions mb3">
              <router-link :to="`/dashboard/${course.id}/edit`">
                <font-awesome-icon icon="fa-regular fa-pen-to-square" />
              </router-link>
              <button @click="confirmDelete(course.id)">
                <font-awesome-icon icon="fa-regular fa-trash-can" />
              </button>
            </div>
            <router-link :to="`/dashboard/${course.id}`">
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
    </DashboardLayout>
</template>

<script setup>
  
  import DashboardLayout from '../layouts/DashboardLayout.vue';
  import UiButton from '../components/ui/UiButton.vue';
  import { useCourseStore } from '../stores/CourseStore';
  import { useAuthStore } from '../stores/AuthStore';
  import { useRouter } from 'vue-router'
  import { onMounted } from 'vue'

  const courseStore = useCourseStore()
  const router = useRouter()
  const auth = useAuthStore()

  async function confirmDelete(id) {
    if (confirm('Вы уверены, что хотите удалить курс?')) {
      await courseStore.deleteCourse(id)
      await courseStore.fetchCourses()
    }
}

  onMounted(() => {
      if (!auth.user?.is_admin) {
        router.push('/')
      } else {
        courseStore.fetchCourses()
      }
  })

</script>
<style scoped>
  .card-actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--gap);
  }
</style>