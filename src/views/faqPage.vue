<template>
<div id="faqPage">

    <HeaderFL />   
    <faq fullsite/>

</div>
</template>

<script>
import HeaderFL from "@/components/HeaderForLogged.vue";
import faq from '@/components/faq.vue';
export default {
  name: "faqPage",
  components: {
    HeaderFL,
    faq,
  },
  created: function () {
    if(!this.$store.state.is_irss)
      this.$router.push('/userPage');
  }
};
</script>
<style lang="scss" scoped>


</style>
