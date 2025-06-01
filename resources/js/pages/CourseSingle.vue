<template>
    <MainLayout>
        <section class="section" v-if="courseStore.course">
            <div class="container">
                <h1 class="h3 title mb10">{{ courseStore.course.title }}</h1>
                <div class="menu_heading mb6">
                    <p>{{ courseStore.course.introtext }}</p>
                </div>
                <div class="mb6" style="max-width: 50%;">
                    <img :src="courseStore.course.image" :alt="courseStore.course.title">
                </div>
                <div class="t18 mb6 content" v-html="courseStore.course.content"></div>
                <UiButton class="button_orange">Купить</UiButton>
            </div>
        </section>
        <div v-if="isLoading">Загрузка...</div>
        <div v-if="error">{{ error }}</div>
    </MainLayout>
    
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCourseStore } from '../stores/CourseStore';
import MainLayout from '../layouts/MainLayout.vue';
import UiButton from '../components/ui/UiButton.vue';

const route = useRoute();
const courseStore = useCourseStore()

onMounted(() => {
    courseStore.fetchSingleCourse(route.params.id)
})
</script>