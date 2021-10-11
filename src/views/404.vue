<template>

  <div>

    <Header />

  <div id="noVotes">
    
    <div class="imgNoVotes">
      <img src="../assets/images/404.svg" alt="" />
    </div>
    <div class="komunikat">
      <h3>
        {{this.$store.state.msg.site_404.ups}}<br />
        {{this.$store.state.msg.site_404.komunikat1}} 
      </h3>

      <router-link class="button" to="/">
        {{this.$store.state.msg.site_404.komunikat2}}
      </router-link>
    </div>
  </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "page404",
  components: {
    Header,
  },
};
</script>
<style lang="scss" scoped>
#noVotes {
  // background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: Roboto;
  font-weight: bold;
  font-size: 2rem;
  width: 70%;
  margin: auto;
}
.imgNoVotes img {
  //height:300px;
  //max-width:100%;
  height: 40vh;
}

.komunikat{
  margin: 20px;
}
h1{
  color: black;
  font-family: Roboto;
  padding-left: 20px;
  padding-right: 20px;
}
h2,
h3,
h4 {
  padding: 20px;
  color: black;
  font-family: Roboto;
}

.button{
    display: inline-block;
    font-weight:bold;
    cursor: pointer;
    text-align: center;
    color: #fff;
    background-color: var(--my_magenda);
    border: none;
    border-radius: 15px;
    box-shadow: 2px 5px 5px #999;
    font-family: Roboto;
    text-decoration: none;

    padding: 15px 25px;
    margin: 0px 20px;
    font-size: 1.5rem;
}

.button:hover {background-color: var(--my_magenda_dark);}

.button:active {
  background-color: var(--my_magenda_dark);
  box-shadow: 1px 5px 1px #666;
  transform: translateY(4px);
}

@media only screen and (max-width: 767px) {
  #noVotes {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  .imgNoVotes img {
    //height:300px;
    //max-width:100%;
    height: 30vh;
  }
  .komunikat {
    font-size: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;
    margin-top: 0;
  }
  .button{
    margin: 20px;
    padding: 10px 20px;
    font-size: 1rem;

  }
}
@media only screen and (max-width: 767px) and (orientation: landscape) {
  #noVotes {
    height: 50vh;
    flex-wrap: nowrap;
    width: 60%;
  }
 .komunikat {
    font-size: 0.8rem;
 }
  h3{
    padding: 0;
  }
  .button{
    margin: 20px;
    padding: 10px 20px;
    font-size: 0.8rem;

  }
}

@media only screen and (min-width: 768px) and (max-width: 1349px) {
  #noVotes {
    width: 90%;
  }
  .komunikat {
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .button{
    font-size: 1.1rem;
  }
}
@media only screen and (min-width: 1350px) {
  .komunikat {
    font-size: 2.4rem;
      display: flex;
    align-items: center;
    flex-direction: column;
  }
}

@media only screen and (max-width: 469px) {
  .imgNoVotes img {
    //height:300px;
    //max-width:100%;
    height: 20vh;
  }
  .komunikat {
    font-size: 0.8rem;
  }
  .button{
    font-size: 0.8rem;

  } 
}
</style>
