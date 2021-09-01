<template>
  <div class="VoteDetails">
    <div class="smallNavbar" v-if="!onlyOneVote"><router-link
      to="/UserPage"
    >Strona główna</router-link> / <router-link
      to=""
    >Głosowanie</router-link></div>
    <div class="VoteDetails2">
      <div class="left">
        <div class="text">
          <h3 class="textMontserrat my_magenda h3Header">{{ vote.name }}</h3>
          <p>
            <span>{{ type }}</span>
            <br />
            <span>{{ description }}</span>
          </p>
        </div>
        <button
          class="blueBTN"
          v-on:click="showCard()"
          v-show="actAnsBTN"
        >
          WYŚWIETL KARTĘ DO GŁOSOWANIA
        </button>
        <h3 v-show="this.doneVote" class="textMontserrat communicat">
            DZIĘKUJEMY ZA ODDANIE GŁOSU!
            </h3>
        <div id="voteCardMaster" v-show="activeAns">
          <h3>Pytanie</h3>
          <form >
         <!--<div >-->
             <div v-for="o in this.Odp" :key="o.id" class="answers">
            <input
            type="checkbox" 
            :value="o.test" 
            v-on:change="lol()" 
            :id="o.id"> 
           <label :for="o.id" class="Alabel">{{o.test}}</label>
            <!--<label :for="o.id">{{o.test}}</label>-->
         <!--</div>-->
         </div>
          </form>
          <button class="blueBTN" v-on:click="showAlert()">ODDAJ GŁOS</button>
        </div>
      </div>
      <div class="right">
        <div>
          <h3 class="textMontserrat my_orange h3Header">
            SKŁAD KOMISJI WYBORCZEJ
          </h3>
          <h4>Adam Mickiewicz</h4>
          <p>
            <span>JEDEN</span>
            <br />
            <span>JEDNE DENED</span>
          </p>
        </div>
      </div>
    </div>
    <div id="alert" v-show="isAlert">
      <button class="blueBTN2" v-on:click="answerDone()">ODDAJ GŁOS</button>
      <button class="orangeBTN2" v-on:click="closeAlert()">ANULUJ</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "voteDetails",
  props: {
    title: String,
    type: String,
    description: String,
    vote: Object,
    onlyOneVote: Boolean,
  },
  data() {
    return {
      //haveVotes: true,
      Odp: [
        { test: "Kornelisz" },
        { test: "Barteliusz" },
        { test: "Jeremiusz" },
      ],
      activeAns: false,
      actAnsBTN: true,
      isAlert: false,
      doneVote: false,
    };
  },
  components: {},
  methods: {
    showAlert() {
      this.isAlert = true;
    },
    showCard(){
        this.activeAns = !this.activeAns;
         this.actAnsBTN = false;
    },
    closeAlert() {
      this.isAlert = false;
     // this.actAnsBTN = false;    
      },
    answerDone(){
        this.closeAlert();
        this.doneVote = true;
        this.activeAns = false;
        this.actAnsBTN = false; 
    
    },
    lol(){
        event.target.parentElement.classList.add("focused");
    }
  },
};
</script>
<style scoped>
.VoteDetails {
  display: flex;
  justify-content: center;
  padding: 100px;
  flex-direction: column;
  padding: 50px;
  width: 100%;
  font-family: Roboto bold;
}
.VoteDetails2 {
  min-height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.smallNavbar {
  width: 100%;
  margin-left: 100px;
  font-style: italic;
}
.communicat{
    color:green;
    font-size:1.5rem;
    margin-top:10px;
}
select{
    margin-right:5px;
}
.answers.focused{
    background-color: var(--my_orange);
}
#alert {
  /*position: absolute;
  /* left: 36%;
  top: 35%;*/
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 250px;
  width: 450px;
  border: 2px solid black;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /*
  left: 50%;
  top: 50%;
  margin-left: -width;
  margin-top: -height;
  */
}
.answers{
    font-family: Roboto;
    font-weight: bold;
    border-radius: 2px;
    height:2rem;

}
.answers input{
    margin-right:5px;
}
.answers:hover{
    background-color: var(--my_orange);
}
.alertBG {
  width: 100vh;
  height: 100vh;
  background-color: white;
  position: absolute;
  z-index: 10;
}
.Alabel{
    font-weight: bold;
}
.left {
  width: 60%;
  height: 100%;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
.right {
  width: 40%;
  height: 100%;
  padding-left: 50px;
}
.answers {
  margin: 10px;
  font-family: Roboto;
  display: flex;
  align-items: center;
  padding: 5px;
}
.h3Header {
  font-size: 1.5rem;
}
div .text {
  width: 100%;
  margin-left: 20%;
}
p {
  width: 100%;
  margin-left: 20px;
}
button.blueBTN {
  margin: 20px;
  background-color: var(--my_blue);
  padding: 10px;
  font-family: "Montserrat";
  color: white;
  font-size: 1.3rem;
  /*margin: auto;*/
  margin: 50px;
}
button.orangeBTN2 {
  margin: 20px;
  background-color: var(--my_orange);
  padding: 10px;
  font-family: "Montserrat";
  color: white;
  font-size: 1.3rem;
  width: 300px;
}
button.blueBTN2 {
  margin: 20px;
  background-color: var(--my_blue);
  padding: 10px;
  font-family: "Montserrat";
  color: white;
  font-size: 1.3rem;
  width: 300px;
}
#voteCardMaster {
  margin: 10px;
}
@media (max-width: 767px) {
  .VoteDetails2 {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .VoteDetails {
    padding: 5%;
  }
  .left {
    display: flex;
    flex-wrap: wrap;
    border: 0;
    border-bottom: 1px solid #ccc;
    width: 100%;
    margin: 0px;
    display: flex;
    align-content: center;
    padding: 40px;
  }
  .right {
    width: 100%;
    display: flex;
    align-content: center;
    padding: 50px;
  }
  div .text {
    margin: 0px;
  }
  button.blueBTN {
    font-size: 0.9rem;
  }
  .smallNavbar {
    margin-left: 0px;
  }
  #alert {
      width: 350px;
  }
  button.orangeBTN2 {
      width: 230px;
font-size:0.9rem ;
}
button.blueBTN2 {
width: 230px;
font-size:0.9rem ;
}
  .VoteDetails2{
      margin-bottom: 5rem;
  }
}
@media only screen and (max-width: 400px) {
  button.blueBTN2,
  button.orangeBTN2 {
    font-size: 1rem;
    width: 200px;
  }
  #alert {
    min-height: 200px;
    width: 80%;
  }
}
@media all and (max-width: 767px) and (orientation: landscape) {
  #alert {
    height: 200px;
    width: 40%;
  }
  button.blueBTN2,
  button.orangeBTN2 {
    font-size: 0.7rem;
    width: 200px;
  }
  .VoteDetails {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
