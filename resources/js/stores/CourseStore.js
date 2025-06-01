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
            return course.value
        } catch (err) {
            error.value = 'Курс не найден'
        } finally {
            isLoading.value = false
        }
    }

    const updateCourse = async (id, form) => {
        const formData = new FormData()
        formData.append('title', form.title)
        formData.append('introtext', form.introtext)
        formData.append('content', form.content)
        formData.append('is_published', form.is_published ? 1 : 0)
        
        if (form.image instanceof File) {
            formData.append('image', form.image)
        }

       await axios.post(`/api/courses/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'X-HTTP-Method-Override': 'PUT'
            }
        })  
    }


    const createCourse = async (form) => {
        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('introtext', form.introtext)
        formData.append('content', form.content)
        formData.append('is_published', form.is_published ? 1 : 0);
        if(form.image) {
            formData.append('image', form.image);
        }

        try {
            const response = await axios.post('/api/courses', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            return response.data
        } catch (error) {
            console.error('Ошибка при создании курса:', error.response?.data || error.message)
            throw error;
        }
        
    }

    const deleteCourse = async (id) => {
        try {
            await axios.delete(`/api/courses/${id}`)
        } catch (error) {
            console.error('Ошибка при удалении курса:', error.response?.data || error.message)
            throw error
        }
    }

    return { courses, course, isLoading, error, fetchCourses, fetchSingleCourse, createCourse, updateCourse, deleteCourse }
})