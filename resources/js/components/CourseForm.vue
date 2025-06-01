<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useCourseStore } from '../stores/CourseStore';
    import Editor from '@tinymce/tinymce-vue';

    const router = useRouter();
    const courseStore = useCourseStore()

    const form = ref({
        title: "",
        introtext: "",
        content: "",
        is_published: false,
        image: null
    });

    form.value.video = null

    function handleVideoChange(event) {
        form.value.video = event.target.files[0]
    }
    
    function handleFileChange(event) {
        form.value.image = event.target.files[0]
    }

    async function submitForm () {
        try {
            await courseStore.createCourse(form.value)
            router.push('/dashboard')
        } catch (err) {
            console.log('Ошибка при создании курса:', err.response?.data || err.message)
        }
    }
</script>

<template>
    <section class="section">
        <div class="container">
        <form @submit.prevent="submitForm" enctype="multipart/form-data">
            <div class="form-group mb10">
                <label class="mb3 menu_heading" for="title">Название курса</label>
                <input class="input" type="text" id="title" required v-model="form.title"/>
            </div>

            <div class="form-group mb10">
                <label class="mb3 menu_heading" for="introtext">Краткое описание</label>
                <textarea class="input" id="introtext" required v-model="form.introtext"></textarea>
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
                <!-- image -->
            </div>

            <div class="form-group mb10">
                <label class="menu_heading">
                    <input type="checkbox" v-model="form.is_published"/>
                    Опубликовано
                </label>
            </div>

            <div class="form-group mb10">
                <label class="mb3 menu_heading" for="image">Превью изображение</label>
                <input type="file" id="image" @change="handleFileChange" />
            </div>

            <div class="form-group mb10">
                <label class="mb3 menu_heading" for="video">Видео</label>
                <input type="file" id="video" accept="video/*" @change="handleVideoChange" />
            </div>

            <button type="submit" class="button button_orange">Создать</button>
        </form>
        </div>
    </section>
</template>