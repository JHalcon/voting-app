<template>
  <div class="VoteDetails">

      <div class="innerHeader"> <span class="textMontserrat my_orange">{{this.$store.state.msg.userPanel.tytul}}</span></div>


      <div class="profileCard">

        <h2 class="textMontserrat bold">{{name}}</h2>
        <span class="label textRoboto">{{this.$store.state.msg.userPanel.imie_nazwisko}}</span>

        <hr class="profileHR">

        <h3 class="textMontserrat bold">{{email1}}<br class="smallBr">{{email2}}</h3>
        <span class="label textRoboto">{{this.$store.state.msg.userPanel.email}}</span>
        
        <hr class="profileHR profileHR2">

        <div v-if="this.communities.length==1">
          <span class="textBeforeCommunitiesList label textRoboto">{{this.$store.state.msg.userPanel.jedna_grupa}}</span>
        </div>

        <div v-else>
          <span class="textBeforeCommunitiesList label textRoboto">{{this.$store.state.msg.userPanel.wiele_grup}}</span>
        </div>

        <ul>
          <li v-for="c in communities" :key="c.id">
              <h3 class="textMontserrat bold">{{c.community_data.name}}</h3>
          </li>
        </ul>

      </div>

      <div class="buttonContainer">
        <!-- <button class="orangeBTN">Zmień / nadaj hasło</button>  -->
        <!-- <button v-if="isAdmin" @click="get_answers" class="orangeBTN button_click">{{this.$store.state.msg.userPanel.btn_zgloszenia}}</button> -->
        <button v-if="this.is_new_candidate_turn_on" @click="new_candidate" class="blueBTN button_click">{{this.$store.state.msg.userPanel.btn_zglos_sie}}</button>
        <button @click="contact_us" class="magendaBTN button_click">{{this.$store.state.msg.userPanel.btn_kontakt}}</button>
      </div>


  </div>
</template>
<script>
export default {
  name: "userPanel",
  props: {
    name: String,
    email: String,
    communities: Array,
    //isAdmin: Boolean,
  },
  data() {
    return {
      is_new_candidate_turn_on: this.$store.state.is_new_candidate_turn_on,
      activeAns: false,
      actAnsBTN: true,
      isAlert: false,
      doneVote: false,
      email1: String,
      email2: String,
    };
  },
  created: function () {
    const str = this.email.split("@");
    this.email1 = str[0];
    this.email2 = "@"+str[1];
  
  },
  components: {},
  methods: {
    get_answers(){
      this.$router.push('/candidates');
    },
    new_candidate(){
      this.$router.push('/newCandidate');
    },
    contact_us(){
      this.$router.push('/contact');
    }
  },
};
</script>
<style lang="scss" scoped>

.smallBr{
  display: none;
}

li{
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.bold{
  color: #345;//var(--my_magenda_dark);
}

.profileHR{
  height: 1px;
  background-color: #E8E8E8;
  margin: 10px;
}
.profileHR2 {
  margin-top: 20px;
  margin-bottom: 20px;
}

.profileCard{
  border: 1px solid lightgray;
  border-radius: 30px;
  padding: 20px 30px;
  text-align: center;
  margin: auto;
  width: 100%;
  max-width: 700px;
}

.label{
  display: block;
  font-weight: bold;
}

.VoteDetails {
  display: flex;
  justify-content: center;
  margin-top: 30px;

  flex-direction: column;
  width: 100%;
  font-family: Roboto bold;
}

.innerHeader{
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;

}

button{
  width:200px;
  min-height:80px;
  margin: 15px 40px 0px;
  font-family: "Montserrat"; 
  color:white;
  
  padding: 10px;

}



.buttonContainer{
  display: grid;
  margin-top: 40px;
  margin-bottom: 40px;
  justify-content: center;
}

@media (min-width: 768px){

  button{
    width:300px;
    _height:80px;
    font-size: 18px;
  }

}

@media (max-width: 767px) {

  .VoteDetails {
    padding: 5%;
  }
}

@media only screen and (min-width: 660px){
  .innerHeader{
    font-size: 2vw;
  }
  .buttonContainer{
    display: flex;
  }

}

@media only screen and (min-width: 470px) and (max-width: 659px){
  .bold{
      font-size: 15px;
  }
}

@media only screen and (max-width: 469px) {
  .smallBr{
    display: block;
  }
  .bold{
    font-size: 14px;
  }
  .label{
    font-size: 14px;
  }
}


@media all and (max-width: 767px) and (orientation: landscape) {

  .VoteDetails {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
