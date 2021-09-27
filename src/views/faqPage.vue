<template>
<div id="faqPage">

    <div v-if="isLoggedIn">
        <HeaderFL/>
    </div>
    <div v-else>
        <Header/>
    </div>

    <faq fullsite/>

</div>
</template>

<script>
import Header from "@/components/Header.vue";
import HeaderFL from "@/components/HeaderForLogged.vue";
import faq from '@/components/faq.vue';
export default {
  name: "faqPage",
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


</style>
