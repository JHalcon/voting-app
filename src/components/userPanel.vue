<template>
  <div class="VoteDetails">
    <div class="smallNavbar"><router-link
  to="/"
>Strona główna</router-link>/<router-link
  to="/UserPage"
> Użytkownik</router-link>/ <router-link
  to="/voteDetails"
>Głosowanie</router-link></div>

    <div class="VoteDetails2">
     <div class="innerHeader"> <h1 class="textMontserrat"> {{name}}</h1></div>
     <button class="yellowBTN">ZMIEŃ/NADAJ HASŁO</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "userPanel",
  props: {
    name: String,
    type: String,
    description: String,
  },
  data() {
    return {
      activeAns: false,
      actAnsBTN: true,
      isAlert: false,
      doneVote: false,
    };
  },
  components: {},
  methods: {
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
  flex-direction: column;
  padding:10px;
  padding-left: 100px;
  padding-right: 100px;
 
}
.innerHeader{
  display: flex;
  justify-content: center;
}
button.yellowBTN{

  width:200px;
  background-color: var(--my_orange);
  height:50px;
  font-family: "Montserrat"; 
  color:white;
  margin-top: 10px;
}
.smallNavbar {
  width: 100%;
  margin-left: 100px;
  font-style: italic;
}
@media (max-width: 767px) {
  .VoteDetails2 {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column; align-items: center;
    padding:0px;
    padding-top: 20px;
  }
  .VoteDetails {
    padding: 5%;
  }
  .smallNavbar {
    margin-left: 0px;
  }
  .VoteDetails2{
      margin-bottom: 5rem;
  }
  button.yellowBTN{
    font-size: 1rem;
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
  button.yellowBTN {
    font-size: 0.7rem;
    width: 200px;
  }
  .VoteDetails {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
</style>
