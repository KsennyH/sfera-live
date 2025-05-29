import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";

export const useCourseStore = defineStore("course-store", () => {
    const courses = ref([])
    const course = ref({})
    const isLoading = ref(false)
    const error = ref(null)

    const fetchCourses = async () => {
        isLoading.value = true
        error.value = null
        try {
            const response = await axios.get('/api/courses')
            courses.value = response.data.data
        } catch (err) {
            error.value = 'Ошибка загрузки курсов'
        } finally {
            isLoading.value = false
        }
    }

    const fetchSingleCourse = async (id) => {
        isLoading.value = true
        course.value = null
        error.value = null
        try {
            const response = await axios.get(`/api/courses/${id}`)
            course.value = response.data.data
        } catch (err) {
            error.value = 'Курс не найден'
        } finally {
            isLoading.value = false
        }
    }

    return { courses, course, isLoading, error, fetchCourses, fetchSingleCourse }
})