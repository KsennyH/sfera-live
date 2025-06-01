import * as VueRouter from 'vue-router';
import Home from '../pages/Home.vue'
import CourseSingle from '../pages/CourseSingle.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Dashboard from '../pages/Dashboard.vue'
import { useAuthStore } from '../stores/AuthStore';
import CreateCourse from '../pages/CreateCourse.vue';
import EditCourse from '../pages/EditCourse.vue';
import ShowCourse from '../pages/ShowCourse.vue';

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/courses/:id',
      name: 'course',
      component: CourseSingle,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/dashboard/:id',
      name: 'dashboard-course',
      component: ShowCourse,
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/dashboard/create',
      name: 'course-create',
      component: CreateCourse,
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/dashboard/:id/edit',
      name: 'course-edit',
      component: EditCourse,
      meta: { requiresAuth: true, requiresAdmin: true },
    }
  ]
});

router.beforeEach(async (to, from, next) => {
    const auth = useAuthStore()

    if (!auth.user) {
        await auth.fetchUser()
    }

    if (to.meta.requiresAuth && !auth.user) {
        return next('/login')
    }

    if (to.meta.requiresAdmin && !auth.user?.is_admin) {
        return next('/')
    }

    next()
})

export default router;


