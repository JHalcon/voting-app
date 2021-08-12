<template>
<div id="UP">
    <HeaderFL/>
    
    <div class="mainInner">
      <NoVotes v-if="!haveVotes"/>
      </div>
    
    <Footer/>
    </div>

</template>

<script>
import Footer from '@/components/Footer.vue';
import HeaderFL from '@/components/HeaderForLogged.vue';
import NoVotes from '@/components/NoVotes.vue';
export default {

  name: "UserPage",
  props:["haveVotes"],
  components: {
Footer,
HeaderFL,
NoVotes,
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
