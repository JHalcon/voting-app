<template>
<div id="calendarPage">

    <HeaderFL />   
    <calendar fullsite/>

</div>
</template>

<script>
import HeaderFL from "@/components/HeaderForLogged.vue";
import calendar from '@/components/calendar.vue';

export default {
  name: "faqPage",
  components: {
    HeaderFL,
    calendar,
  },
};
</script>
<style lang="scss" scoped>


</style>
