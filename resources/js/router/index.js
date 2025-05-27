import * as VueRouter from 'vue-router';
import Home from '../pages/Home.vue'
import CourseSingle from '../pages/CourseSingle.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Dashboard from '../pages/Dashboard.vue'

export default VueRouter.createRouter({
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
      component: Dashboard
    }
  ]
});

