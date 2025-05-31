<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useCourseStore } from '../stores/CourseStore';

    const router = useRouter();
    const courseStore = useCourseStore()

    const form = ref({
        title: "",
        introtext: "",
        content: "",
        is_published: false,
        image: null
    });
    
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
        <h1 class="h3 title">Создать курс</h1>

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
                <label class="mb3 menu_heading" for="content">Контент</label>
                <textarea class="input" id="content" required v-model="form.content"></textarea>
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

            <button type="submit" class="button button_purple">Создать</button>
        </form>
        </div>
    </section>
</template>
<script setup>
</script>