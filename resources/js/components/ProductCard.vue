<template>
    <router-link :to="`/courses/${course.id}`">
        <div class="card">
            <div class="card__info">
                <div class="card__type">
                    <p class="t18 date light-text">{{ course.created_at }}</p>
                </div>
                <div class="height100">
                    <div class="card__image" :style="{ backgroundImage: `url('${course.image}')` }"></div>
                </div>
            </div>
            <div class="card__titles">
                <h2 class="menu_heading uppercase mb3">{{ course.title }}</h2>
                <p class="t18">{{ course.introtext }}</p>
            </div>
            <UiButton class="button_orange card__btn">Подробнее</UiButton>
        </div>
    </router-link>
    
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
<style scoped>
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
    background-color: #FF6820;
}
</style>