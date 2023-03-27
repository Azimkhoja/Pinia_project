<template>
  
    <Header />
  <main>

    <div class="container mx-auto px-[130px]">

      
      <router-view></router-view>
    </div>
  </main>
  <Footer />
</template>
<script>
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: 'HomeLayout',
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="css" scoped>
main {
  min-height: calc(100vh);
}


</style>
