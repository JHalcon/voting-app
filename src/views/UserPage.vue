<template>
<div id="UP">
    <NavbarLoggedIn/>
    <div class="mainInner">
      <NoVotes v-if="!haveVotes"/>
      </div>
    
    <Footer/>
    </div>

</template>

<script>
import Footer from '@/components/Footer.vue';
import NavbarLoggedIn from '@/components/NavbarLoggedIn.vue';
import NoVotes from '@/components/NoVotes.vue';
export default {

  name: "UserPage",
  props:["haveVotes"],
  components: {
Footer,
NavbarLoggedIn,
NoVotes,
  },
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
