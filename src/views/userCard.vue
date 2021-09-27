<template>
  <div>
    <HeaderForLogged/>
    
    <div v-if="this.loaded">
      <userPanel 
      :name="this.firstname + ' ' + this.lastname"
      :communities="this.communities"
      :email="this.email"
      />
    </div>
    <div v-else>
      <loadingItem />
    </div>
  </div>
</template>
<script>

import axios from 'axios';
import LoadingItem from '@/components/loadingItem.vue';
import HeaderForLogged from "@/components/HeaderForLogged.vue";
import userPanel from "@/components/userPanel.vue";
export default {
  name: "userCard",
  data() {
    return {
      firstname: "imie",
      lastname: "nazwisko",
      email: "email",
      loaded: false,
      communities: Array,
      //isAdmin: false,
    };
  },
  components: {
    //Footer,
    HeaderForLogged,
    userPanel,
    LoadingItem,
  },
  created: function () {
    if(!this.$func.getLoggedToken()){
      this.$router.push(this.$store.getters.getMainPageLink);
    } else{

        let token = this.$func.getLoggedToken(); //localStorage.getItem('JWT_TOKEN');


        // Pobieranie imienia i nazwiska zalogowanego uzytkownika
        axios.get(process.env.VUE_APP_AUTH_URL, {
          headers: {
            'Authorization': `Token ${token}`
          }
        })
        .then(resp => {
          console.log("UserCard")
          console.log(resp)
          this.firstname = resp.data.first_name;
          this.lastname = resp.data.last_name;
          this.email = resp.data.email;
          //this.isAdmin = resp.data.is_superuser;
          this.communities = resp.data.communities;
          this.loaded = true;
        })
        .catch(()=>{
            // wylogowywanie
            this.$func.logoutUser();

            if(this.$store.getters.is_IRSS)
              this.$router.push('/');
            else
              this.$router.push('/Home');
        })

    }
  }
};
</script>
<style scoped></style>
