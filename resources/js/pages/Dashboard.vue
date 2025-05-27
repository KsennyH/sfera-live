<script setup>
import CourseForm from '../components/CourseForm.vue';
import MainLayout from '../layouts/MainLayout.vue';
import axios from 'axios'
import { ref, onMounted } from 'vue'
// const user = ref(null)

// onMounted(async () => {
//   try {
//     const response = await axios.get('/api/user')
//     user.value = response.data
//     console.log(response);
//   } catch (e) {
//     user.value = null
//   }
// })

</script>

<template>
    <MainLayout>
        <!-- <CourseForm></CourseForm> -->
         <!-- <div v-if="user">
    Привет, {{ user.name }}!
  </div>
  <div v-else>
    Вы не авторизованы.
  </div> -->
    </MainLayout>
</template>