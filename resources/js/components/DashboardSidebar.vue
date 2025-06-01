<template>
    <div class="sidebar radius height100">
        <ul>
        <li class="flex vertical-center cg12 menu_heading" v-if="auth.user">
            <div class="avatar">{{ auth.user.name.slice(0, 1) }}</div>
            <div>{{ auth.user.name }}</div>
        </li>
        <li class="menu_heading"><router-link to="/dashboard">Мои курсы</router-link></li>
        <li class="menu_heading">Мои вебинары</li>
        <li class="menu_heading">Мои конференции</li>
        <li class="menu_heading"><button @click="handleLogout">Выход</button></li>
        </ul>
    </div>
</template>
<script setup>
    import { useAuthStore } from '../stores/AuthStore';
    const auth = useAuthStore()
    const emit = defineEmits(['logout'])

    const handleLogout = async () => {
        emit('logout')
    }
</script>
<style scoped>
.sidebar {
  background-color: var(--gray-dark);
  padding: calc(var(--step) * 6);
}
.sidebar li {
  position: relative;
  padding-bottom: calc(var(--step) * 3);
}
.sidebar li:not(:first-child)::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: var(--black);
  left: 0;
  bottom: 0;
}
.sidebar li + li {
  margin-top: calc(var(--step) * 6);
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--orange);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
}
</style>