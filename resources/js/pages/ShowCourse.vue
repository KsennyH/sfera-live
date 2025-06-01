<template>
    <DashboardLayout>
        <section class="section dashboard">
          <div class="container">
            <h1 class="h3 title mb10">Курс</h1>
          </div>
          <div class="row">
            <div class="col-3">
              <div class="container height100">
                <DashboardSidebar @logout="handleLogout" />
              </div>
            </div>
            <div class="col-9">
              <div class="container">
                <div class="card-actions mb3" v-if="courseStore.course">
                    <router-link :to="`/dashboard/${courseStore.course.id}/edit`">
                        <font-awesome-icon icon="fa-regular fa-pen-to-square" />
                    </router-link>
                    <button @click="confirmDelete(courseStore.course.id)">
                        <font-awesome-icon icon="fa-regular fa-trash-can" />
                    </button>
                </div>
                <div class="card" v-if="courseStore.course">
                    <div class="title-flex mb10">
                        <h2 class="h4">{{ courseStore.course.title }}</h2>
                    </div>
                    <div class="mb6">
                        <img :src="courseStore.course.image" :alt="courseStore.course.title">
                    </div>
                    <video width="100%" height="auto" controls>
                        <source src="movie.mp4" type="video/mp4">
                        <source src="movie.ogg" type="video/ogg">
                        Ваш браузер не поддерживает воспроизведение видео.
                    </video>
                </div>
              </div>
            </div>
          </div>
        </section>
    </DashboardLayout>
</template>
<script setup>
    import DashboardLayout from '../layouts/DashboardLayout.vue';
    import DashboardSidebar from '../components/DashboardSidebar.vue';
    import { useAuthStore } from '../stores/AuthStore';
    import { useCourseStore } from '../stores/CourseStore';
    import { useRouter } from 'vue-router'
    import { onMounted } from 'vue';
    const router = useRouter()
    import { useRoute } from 'vue-router';
    const auth = useAuthStore()
    const courseStore = useCourseStore()
    const route = useRoute();

    const handleLogout = async() => {
        await auth.logout()
        router.push('/')
    }

    async function confirmDelete(id) {
        if (confirm('Вы уверены, что хотите удалить курс?')) {
            await courseStore.deleteCourse(id)
            router.push('/dashboard')
        }
    }

    onMounted(() => {
        courseStore.fetchSingleCourse(route.params.id)
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