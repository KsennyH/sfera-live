<template>
  <router-view></router-view>
</template>
  
<script setup>
  import { onMounted } from 'vue';
  import { useAuthStore } from './stores/AuthStore';

  const auth = useAuthStore()

  onMounted(() => {
    auth.fetchUser()
  })

</script>