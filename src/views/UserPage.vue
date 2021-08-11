<template>
<div id="UP">
    <HeaderFL/>
    
    <div class="mainInner">
      <NoVotes v-if="!haveVotes"/>
      <Votes v-if="haveVotes"/>
      </div>
    
    <Footer/>
    </div>

</template>

<script>
import Footer from '@/components/Footer.vue';
import HeaderFL from '@/components/HeaderForLogged.vue';
import NoVotes from '@/components/NoVotes.vue';
import Votes from '@/components/Votes.vue';
export default {

  name: "UserPage",
  data(){
    return{
      haveVotes:true,
    }
  },
  components: {
Footer,
HeaderFL,
NoVotes,
Votes,
  },
  created: function () {
    if(!this.$store.getters.isLoggedIn){

      if(this.$store.state.is_irss)
        this.$router.push('/');
      else
        this.$router.push('/Home');
    }
  }
};
</script>
<style lang="scss">
#UP{
  overflow: hidden;
}
.mainInner{
  min-height:70vh;
}
@media only screen and (max-width: 767px){
.mainInner{
  min-height:80vh;
}
}


</style>
