<template>
  <div>

    <div v-if="this.loggedIn">
      <HeaderForLogged/>
      </div>
    <div v-else>
      <Header />
    </div>

      <div v-if="this.loaded1 && this.loaded2">


        <div v-if="this.is_new_candidate_turn_on">
          <candidateForm :communities="this.communities" :firstname="this.firstname" :lastname="this.lastname" :email="this.email" /> -->
        </div>
        <div v-else>
          <h2 class="textMontserrat komunikat">{{this.$store.state.msg.newcandidate.komunikat}}</h2>
        </div>


      </div>
      <div v-else>
        <loadingItem medium />
      </div>
    


  </div>
</template>
<script>
import HeaderForLogged from "@/components/HeaderForLogged.vue";
import Header from "@/components/Header.vue";
import candidateForm from "@/components/candidateForm.vue";
import loadingItem from "@/components/loadingItem.vue";

import axios from 'axios';
export default {
  name: "newCandidate",
  data() {
    return {
      is_new_candidate_turn_on: this.$store.state.is_new_candidate_turn_on,
      firstname: "",
      lastname: "",
      email: "",
      loaded1: false,
      loaded2: false,
      loggedIn: Boolean,
    };
  },
  components: {
    HeaderForLogged,
    candidateForm,
    Header,
    loadingItem,
  },
  methods:{
  },
  created: function(){
    this.loggedIn = this.$func.getLoggedToken();


        let token = this.loggedIn;

        // Pobieranie imienia i nazwiska zalogowanego uzytkownika
        axios.get(process.env.VUE_APP_AUTH_URL, {
          headers: {
            'Authorization': `Token ${token}`
          }
        })
        .then(resp => {
          this.firstname = resp.data.first_name;
          this.lastname = resp.data.last_name;
          this.email = resp.data.email;
        })
        .catch(()=>{})
        .then(()=>{
            this.loaded1 = true;
        })

        // Pobieranie listy instytutów
        axios.get(process.env.VUE_APP_COMMUNITIES, {
          params: {
            page_size: 100,
          }
        })
        .then(resp=>{
            this.communities = resp.data.results;
            this.loaded2 = true;
        })
  }
}
</script>
<style scoped>

.komunikat{
  text-align: center;
  margin-top: 80px;
  color: #345;
}

.student_img, .student2_img{
     display: none;
}

@media only screen and (min-width: 1150px){

    .student_img, .student2_img{
        display: block;
        position: absolute;
        width: 20%;
        max-height: 445px;
        bottom:2rem;
        z-index: 1;
    }

    .student_img{
        left: -30px;
    }
    .student2_img{
        right: -30px;
    }
}


</style>
