<template>
    <MainLayout>
        <section class="section" v-if="course">
            <div class="container">
                <h1 class="h3 title mb10">{{ course.title }}</h1>
                <div class="menu_heading mb6">
                    <p>{{ course.introtext }}</p>
                </div>
                <div class="mb6" style="max-width: 50%;">
                    <img :src="course.image" :alt="course.title">
                </div>
                <div class="t18 mb6">
                    <p>{{ course.content }}</p>
                </div>
                <UiButton class="button_orange">Купить</UiButton>
            </div>
        </section>
    </MainLayout>
    
</template>

<script setup>
import { onMounted, ref } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';
import axios from 'axios'
import { useRoute } from 'vue-router';
import UiButton from '../components/ui/UiButton.vue';

const route = useRoute();
const course = ref({})

onMounted(async() => {
    try {
        const response = await axios.get(`/api/courses/${route.params.id}`)
        course.value = response.data.data
    } catch (error) {
        console.error('Ошибка при загрузке курса:', error)
    }
})
</script>