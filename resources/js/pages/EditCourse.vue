<template>
    <DashboardLayout>
        <section class="section">
            <div class="container">
                <h1 class="h3 title">Редактировать курс</h1>
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
                            <h2 class="h4">Редактировать курс</h2>
                        </div>
                        <form @submit.prevent="submitForm" enctype="multipart/form-data">
                            <div class="form-group mb10">
                            <label class="mb3 menu_heading" for="title">Название курса</label>
                            <input class="input" type="text" id="title" v-model="form.title" required />
                            </div>

                            <div class="form-group mb10">
                            <label class="mb3 menu_heading" for="introtext">Краткое описание</label>
                            <textarea class="input" id="introtext" v-model="form.introtext" required></textarea>
                            </div>

                            <div class="form-group mb10">
                            <label class="mb3 menu_heading" for="content">Контент</label>
                            <textarea class="input" id="content" v-model="form.content" required></textarea>
                            </div>

                            <div class="form-group mb10">
                            <label>
                                <input type="checkbox" v-model="form.is_published" />
                                Опубликовано
                            </label>
                            </div>

                            <!-- <div class="form-group mb10">
                                <img :src="form.image" :alt="form.title" v-if="form.image">
                            </div>

                            <div class="form-group mb10">
                            <label for="image">Новое изображение</label>
                            <input type="file" id="image" @change="handleFileChange" />
                            </div> -->
                            <div class="form-group mb10">
      <img
        v-if="imagePreview"
        :src="imagePreview"
        alt="Превью изображения"
        class="radius"
        style="max-width: 200px;"
      />
    </div>
<div class="form-group mb10">
  <label for="image">Новое изображение</label>
  <input type="file" id="image" @change="handleFileChange" />
</div>

                            <button type="submit" class="button button_purple">Сохранить</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </DashboardLayout>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCourseStore } from '../stores/CourseStore'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import DashboardSidebar from '../components/DashboardSidebar.vue'

const route = useRoute()
const router = useRouter()
const courseStore = useCourseStore()

const courseId = route.params.id

const handleLogout = async() => {
    await auth.logout()
    router.push('/')
}

const form = ref({
  title: '',
  introtext: '',
  content: '',
  is_published: false,
  image: null
})

onMounted(async () => {
  const course = await courseStore.fetchSingleCourse(courseId)
  if (course) {
    form.value = {
      title: course.title,
      introtext: course.introtext,
      content: course.content,
      is_published: course.is_published,
      image: null,
      image_url: course.image ?? null
    }
  }
})

function handleFileChange(event) {
  form.value.image = event.target.files[0]
}

import { computed } from 'vue'

const imagePreview = computed(() => {
  if (form.value.image instanceof File) {
    return URL.createObjectURL(form.value.image)
  }
  return form.value.image_url
})

async function submitForm() {
  try {
    await courseStore.updateCourse(courseId, form.value)
    router.push('/dashboard')
  } catch (err) {
    console.error('Ошибка при обновлении курса:', err.response?.data || err.message)
  }
}
</script>
