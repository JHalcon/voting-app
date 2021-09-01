<template>
  <div>
<HeaderForLogged v-bind:onlyOneVote="this.onlyOneVote" />
    <div v-if="loaded">
      <voteDetails 
        v-bind:vote="this.vote"
        v-bind:onlyOneVote="this.onlyOneVote"
        type="Głosowanie tajne"
        description="Głosowanie dopuszcza wybranie kilku opcji"
      /> <!-- type oraz description myślę że trzeba będzie stąd wywalić, i w voteDetails je pobierać z propsa "vote" -->
    </div>
    <div v-else>
      <LoadingItem />
    </div>
  </div>
</template>
<script>
import axios from 'axios';

import LoadingItem from '@/components/loadingItem.vue';
import HeaderForLogged from "@/components/HeaderForLogged.vue";
import voteDetails from "@/components/voteDetails.vue";
export default {
  name: "voteCard",
  data() {
    return {
      loaded: false,
      voteIdVar: this.$route.params.voteIdProps,
      onlyOneVote: (this.$route.query.onlyOneVote  === 'true'),
      vote: Object,
    };
  },
  components: {
    //Footer,
    HeaderForLogged,
    voteDetails,
    LoadingItem,
  },


  created: function () {

    if(!this.$store.getters.isLoggedIn){
      this.$router.push(this.$store.getters.getMainPageLink);
    }
    else{

        // pobieranie tokena
        const token = localStorage.getItem('JWT_TOKEN');

        // pobieranie listy głosowań
        axios.get('https://dev.api.up.kornel.dev/api/v1/public/vote/vote/'+this.voteIdVar, { 
          headers: {
            'Authorization': `Token ${token}`
          }
        })
        .then(resp => {
          this.loaded= true;
          this.vote = resp.data; 
          console.log(this.vote); //todo delete
        })

    }
  }
};
</script>
<style scoped></style>
