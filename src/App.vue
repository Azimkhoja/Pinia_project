<template>

  <HomeLayout />

</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import HomeLayout from "@/Layouts/HomeLayout.vue"
export default {
  name: "App",
  components: {
    HomeLayout
  },
}
</script>
<style scoped>
</style>
