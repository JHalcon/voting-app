<template>
  <div>
    <HeaderForLogged/>
    <userPanel :name="this.firstname + ' ' + this.lastname"
    />
  </div>
</template>
<script>

//import Footer from "@/components/Footer.vue";
import HeaderForLogged from "@/components/HeaderForLogged.vue";
import userPanel from "@/components/userPanel.vue";
export default {
  name: "userCard",
  data() {
    return {
      firstname: localStorage.getItem('first_name'),
      lastname: localStorage.getItem('last_name'),
    };
  },
  components: {
    //Footer,
    HeaderForLogged,
    userPanel,
  },
  created: function () {
    if(!this.$store.getters.isLoggedIn){
      this.$router.push(this.$store.getters.getMainPageLink);
    }
  }
};
</script>
<style scoped></style>
