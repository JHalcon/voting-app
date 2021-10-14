<template>
<div id="faqPage">

    <div v-if="isLoggedIn">
        <HeaderFL/>
    </div>
    <div v-else>
        <Header only_irss_2/>
    </div>

    <div class="smallNavbar headerRob">
      <router-link style="text-decoration: none" to="/newCandidate">&larr; <span class="routerlink">Zgłoś swoją kandydaturę</span></router-link>
    </div>

    <faq fullsite/>

</div>
</template>

<script>
import Header from "@/components/Header.vue";
import HeaderFL from "@/components/HeaderForLogged.vue";
import faq from '@/components/faq.vue';
export default {
  name: "faqForCandidates",
  components: {
    Header,
    HeaderFL,
    faq,
  },
  data() {
    return {
        isLoggedIn: this.$func.getLoggedToken(),
    };
  },
  created: function () {
    if(!this.$store.state.is_irss)
      this.$router.push('/userPage');
  }
};
</script>
<style lang="scss" scoped>

  #faqPage{
    margin-bottom:50px;
  }
  .smallNavbar {
    width: 100%;
    margin-left: 140px;
    font-style: italic;
  }
  .headerRob{
    font-family: Roboto;
    font-weight: bold;
  }
  .routerlink{
    text-decoration: underline;
    cursor: pointer;
  }

@media (max-width: 859px){
    .smallNavbar {
      margin-left: 10px;
    }
}

</style>
