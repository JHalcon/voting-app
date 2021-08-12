<template>
<div id="UP">
    <HeaderFL/>
    
    <div class="mainInner">
      <NoVotes v-if="!haveVotes" />
      <Votes v-if="haveVotes" />
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import HeaderFL from '@/components/HeaderForLogged.vue';
import NoVotes from '@/components/NoVotes.vue';
import Votes from '@/components/Votes.vue';
export default {
  name: "UserPage",
  data() {
    return {
      haveVotes: true,
    };
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
#UP {
  overflow-y: hidden;
  position: absolute;
  min-height: 100%;
  width: 100%;
}
.mainInner {
  min-height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
@media only screen and (max-width: 767px) {
  .mainInner {
    //min-height: 80vh;
  }
}
@media only screen and (max-width: 992px) and (orientation: landscape) {
  .mainInner {
    //overflow: auto;
    margin-bottom: 50px;
  }
}
</style>
