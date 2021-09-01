<template>
  <div id="main" class="scroll-container">
    <section id="home_section">
      <!--<router-link to="/UserPage">User Page</router-link>-->
      <Header only_irss />
      <login-panel />

    <MainPageImages/>


    </section>
    <calendar />
    <faq />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LoginPanel from "../components/loginPanel.vue";
import calendar from "@/components/calendar.vue";
import faq from "@/components/faq.vue";
import MainPageImages from '@/components/mainPageImages.vue';

export default {
  name: "mainPage",
  components: {
    Header,
    LoginPanel,
    calendar,
    faq,
    MainPageImages,

  },
  created: function () {
    if(this.$store.getters.isLoggedIn){
        this.$router.push('/UserPage');
    } else{
      if(!this.$store.getters.is_IRSS){
        this.$router.push('/Home');
      }
    }
  }
};
</script>
<style lang="scss" scoped>

.scroll-container {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0;
  padding: 0;
}

.scroll-container section {
  width: 100%;
  height: 100%;
}

#home_section{
  position: relative;
  min-height: 100vh;
}


</style>
