<template>
    <DashboardLayout>
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
          <div class="mb3 menu_heading">Контент</div>
          <Editor
            api-key="nnon89gl4k8r630a0xov226rn71e44cgdl2eboaym9xuojnp"
            v-model="form.content"
            :init="{
            height: 400,
            menubar: false,
            plugins: 'lists link preview code fullscreen',
            toolbar: 'undo redo | bold italic underline | bullist numlist | link image | preview code fullscreen',
            branding: false
            }"
          />
        </div>

        <div class="form-group mb10">
          <label>
              <input type="checkbox" v-model="form.is_published" />
              Опубликовано
          </label>
        </div>

        <div class="form-group mb10">
          <img :src="imagePreview" :alt="form.title" class="radius" style="max-width: 200px;" v-if="imagePreview">
        </div>
          
        <div class="form-group mb10">
          <label for="image">Новое изображение</label>
          <input type="file" id="image" @change="handleFileChange" />
        </div>

        <button type="submit" class="button button_purple">Сохранить</button>
      </form>
    </DashboardLayout>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCourseStore } from '../stores/CourseStore'
import DashboardLayout from '../layouts/DashboardLayout.vue'
import Editor from '@tinymce/tinymce-vue'

const route = useRoute()
const router = useRouter()
const courseStore = useCourseStore()

const courseId = route.params.id

const form = ref({
  title: '',
  introtext: '',
  content: '',
  is_published: false,
  image: null,
})

function handleFileChange(event) {
  form.value.image = event.target.files[0]
}

const imagePreview = computed(() => {
  if (form.value.image instanceof File) {
    return URL.createObjectURL(form.value.image)
  }
  return form.value.image_url
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

async function submitForm() {
  try {
    await courseStore.updateCourse(courseId, form.value)
    router.push('/dashboard')
  } catch (err) {
    console.error('Ошибка при обновлении курса:', err.response?.data || err.message)
  }
}
</script>
