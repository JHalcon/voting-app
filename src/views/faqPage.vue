<template>
<div id="faqPage">

    <HeaderFL />   
    <faq/>

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
};
</script>
<style lang="scss" scoped>


</style>
