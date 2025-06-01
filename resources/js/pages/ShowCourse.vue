<template>
    <DashboardLayout>
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
            <video width="100%" height="auto" controls v-if="videoUrl">
                <source :src="videoUrl" type="video/mp4">
                Ваш браузер не поддерживает воспроизведение видео.
            </video>
        </div>
    </DashboardLayout>
</template>
<script setup>
    import DashboardLayout from '../layouts/DashboardLayout.vue';
    import { useCourseStore } from '../stores/CourseStore';
    import { useRouter } from 'vue-router'
    import { onMounted, computed } from 'vue';
    const router = useRouter()
    import { useRoute } from 'vue-router';
    const courseStore = useCourseStore()
    const route = useRoute();

    async function confirmDelete(id) {
        if (confirm('Вы уверены, что хотите удалить курс?')) {
            await courseStore.deleteCourse(id)
            router.push('/dashboard')
        }
    }

    const videoUrl = computed(() => {
        const video = courseStore.course.media?.find(m => m.type === 'video')
        return video ? `/storage/${video.path}` : null
    })

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