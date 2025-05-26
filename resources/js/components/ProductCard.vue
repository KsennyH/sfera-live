<template>
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
        <UiButton class="button_orange card__btn">Регистрация</UiButton>
    </div>
</template>
<script setup>
import UiButton from './ui/UiButton.vue';

    const props = defineProps({
        course: {
            type: Object,
            required: true,
            validator: (value) => {
                return (
                    typeof value.id === 'number' &&
                    typeof value.title === 'string' &&
                    typeof value.introtext === 'string' &&
                    typeof value.created_at === 'string' &&
                    (typeof value.image === 'string' || value.image === null)
                )
            }
        }
    })
</script>