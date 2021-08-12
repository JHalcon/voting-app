<template>
<div id="calendarPage">

    <HeaderFL />   
    <calendar fullsite/>
    <Footer/>

</div>
</template>

<script>
import HeaderFL from "@/components/HeaderForLogged.vue";
import Footer from '@/components/Footer.vue';
import calendar from '@/components/calendar.vue';

export default {
  name: "faqPage",
  components: {
    HeaderFL,
    calendar,
    Footer,
  },
};
</script>
<style lang="scss" scoped>


</style>
