<template>
  <div id="noVotes">
    <div class="imgNoVotes">
      <img src="../assets/images/no_poll.svg" />
    </div>
    <div class="komunikat">
      <h3>
        Ups...<br />
        Obecnie nie ma dostępnego żadnego glosowania
      </h3>
      <h2>Zapraszamy później</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoVotes",
  components: {},
};
</script>
<style lang="scss">
#noVotes {
  height: 65vh;
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
.komunikat {
  padding: 20px;
  color: black;
  font-family: Roboto;
  font-weight: 600;
  width: 70%;
  font-size: 1.6rem;
}
.komunikat h2,
h3,
h4 {
  padding: 20px;
  color: black;
  font-family: Roboto;
  font-weight: bold;
  line-height: 1, 5;
  margin: none;
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
  }
}
@media only screen and (max-width: 767px) and (orientation: landscape) {
  #noVotes {
    height: 50vh;
    flex-wrap: nowrap;
    width: 80%;
  }
  .komunikat {
    font-size: 0.8rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1349px) {
  #noVotes {
    width: 90%;
  }
  .komunikat {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
@media only screen and (min-width: 1350px) {
  .komunikat {
    font-size: 1.6rem;
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
}
</style>
