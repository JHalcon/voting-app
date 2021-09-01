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
  created: function () {
    if(!this.$store.state.is_irss)
      this.$router.push('/userPage');
  }
};
</script>
<style lang="scss" scoped>


</style>
