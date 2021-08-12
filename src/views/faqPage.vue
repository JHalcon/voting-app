<template>
<div id="faqPage">

    <HeaderFL />   
    <faq/>
    <Footer/>

</div>
</template>

<script>
import HeaderFL from "@/components/HeaderForLogged.vue";
import faq from '@/components/faq.vue';
import Footer from '@/components/Footer.vue';
export default {
  name: "faqPage",
  components: {
    HeaderFL,
    faq,
    Footer,
  },
};
</script>
<style lang="scss" scoped>


</style>
