<template>
  <MainLayout>
    <section class="section">
        <div class="container">
            <h1 class="h3 title">Вебинары</h1>
        </div>
        <ul class="row rg40" v-if="courses.length">
            <li v-for="course in courses" :key="course.id" class="col-4 col-lg-6 col-sm-12">
                <div class="container height100">
                    <ProductCard :course="course"/>
                </div>
            </li>
        </ul>
        <p v-else>Загрузка...</p>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue';
import ProductCard from '../components/ProductCard.vue';

import { ref, onMounted } from 'vue'
import axios from 'axios'

const courses = ref([])

onMounted(async () => {
const response = await axios.get('/api/courses')
console.log(response);
courses.value = response.data.data
});

</script>
