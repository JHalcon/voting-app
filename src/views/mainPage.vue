<template>
  <div id="main" class="scroll-container">
    <section id="home_section">
      <!--<router-link to="/UserPage">User Page</router-link>-->
      <Header only_irss />
      <login-panel />
      <a href="#faq" class="arrow_link"
        ><img
          src="../assets/images/arrow.svg"
          alt="Przewiń na dół strony"
          class="arrow_img"
      /></a>

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
    if(this.$func.getLoggedToken()){ //this.$store.getters.isLoggedIn
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

.arrow_img{
    position: relative;
    bottom: 0px;
    right: 0; 
    transform: rotate(180deg) translateX(50%);
    margin-left: auto; 
    margin-right: auto; 
    margin-top:30px;
    margin-bottom: 30px;
    width: 60px; 
    left: 50%;
    z-index: 3;
}

@media only screen and (min-width: 450px){
  .arrow_img{
    display: none;
  }
}

</style>
