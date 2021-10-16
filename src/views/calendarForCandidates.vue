<template>
<div id="faqPage">

    <Header only_irss_2 only_irss faq_for_candidates calendar_for_candidates />


    <div class="smallNavbar headerRob">
      <router-link style="text-decoration: none" to="/newCandidate">&larr; <span class="routerlink">Zgłoś swoją kandydaturę</span></router-link>
    </div>

    <calendar fullsite/>
    
    <button v-if="this.$store.state.is_new_candidate_turn_on" @click="new_candidate" class="blueBTN button_click">{{this.$store.state.msg.userPanel.btn_zglos_sie}}</button>

</div>
</template>

<script>
import Header from "@/components/Header.vue";
import calendar from '@/components/calendar.vue';
export default {
  name: "faqForCandidates",
  components: {
    Header,
    calendar,
  },

  created: function () {
    if(!this.$store.state.is_irss)
      this.$router.push('/userPage');
  },
  methods:{
      new_candidate(){
        this.$router.push('/newCandidate');
      },
  }
};
</script>
<style lang="scss" scoped>

button{
  display: flex;
  margin: auto;
  font-family: "Montserrat"; 
  color:white;
  font-size: 1.3rem;
  padding: 15px;

}

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
