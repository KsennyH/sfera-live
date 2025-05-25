<template>
  <MainLayout>
    <section class="section">
        <div class="container">
            <h1 class="h3 title">Список курсов</h1>
        </div>
        <ul class="row rg40" v-if="courses.length">
            <li v-for="course in courses" :key="course.id" class="col-4 col-lg-6 col-sm-12">
                <div class="container height100">
                    <div class="card">
                        <div class="card__info">
                            <div class="card__type">
                                <p class="t18 date light-text">{{ course.created_at }}</p>
                            </div>
                            <div class="height100">
                                <div class="card__image" :style="{ backgroundImage: `url('${course.image}')` }">
                                    <div class="event-logo">
                                        <img src="https://sfm.events/wp-content/uploads/2024/09/sfera-congress-white.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card__titles">
                            <h2 class="menu_heading uppercase mb3">{{ course.title }}</h2>
                            <p class="t18">{{ course.introtext }}</p>
                        </div>
                        <button class="button button_purple card__btn">Регистрация</button>
                    </div>
                </div>
            </li>
        </ul>
        <p v-else>Загрузка...</p>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue';

import { ref, onMounted } from 'vue'
import axios from 'axios'

const courses = ref([])

onMounted(async () => {
const response = await axios.get('/api/courses')
console.log(response);
courses.value = response.data.data
});

</script>

  <style>
/* CARD */

.card {
    display: flex;
    flex-direction: column;
    row-gap: var(--gap);
    height: 100%;
}
.card__info img {
    width: 100%;
    max-height: 260px;
    object-fit: cover;
    border-radius: var(--border-radius);
}
.card__type {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: calc(var(--step) * 2);
}
.card__image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: var(--border-radius);
    min-height: 260px;
}
.card-img {
    background-position: -130px top;
    background-repeat: no-repeat;
    background-size: auto 115%;
    min-height: 260px;
    border-radius: var(--border-radius) 0 0 var(--border-radius);
}
.event-sfera {
    align-self: flex-end;
}
.card .event-logo {
    max-width: 140px;
    margin: 0 calc(var(--step) * 3) calc(var(--step) * 3) auto;
}
.event-logo {
    max-width: 230px;
    margin: 0 calc(var(--step) * 6) calc(var(--step) * 6) auto;
}
.card__buttons {
    display: flex;
    align-items: center;
    gap: var(--gap);
    margin-top: auto;
}
.card__btn {
    align-self: flex-start;
    margin-top: auto;
}
.card:hover .button {
    background-color: #D50EB0;
}

/* END CARD */
</style>
