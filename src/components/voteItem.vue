<template>
  <div class="Vitem" :class="{'voteGivenClass' : voteGiven}">
    <div class="textMontserrat voteTxt"><div class="tick" v-if="this.voteGiven">&#x2714;</div> <div :class="{'voteGivenText' : voteGiven}">{{ voteText }}</div></div>
  </div>
</template>

<script>


export default {
  name: "voteItem",
  props: ["voteText", "voteGiven"],
  data() {
    return {};
  },
  components: {},
  methods:{
  }


};

</script>
<style lang="scss" scoped>
.voteGivenClass{
  background-color: #ccc;
}
.voteGivenText{
  //text-decoration: line-through;
}
div.Vitem {
  cursor: pointer;
  padding: 13px;
  width: 100%;
  border: none;
  text-align: left;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  min-height: 100px;
  border-radius: 10px;
}
.voteItemPink {
  background-color: pink;
}

.Vitem:before {
  content: "\25BA";
  font-weight: bold;
  float: right;
  margin-left: 5px;
  color: white;
  display: flex;
  align-items: center;
}

.voteItemGreen {
  background-color: green;
}
.voteTxt {
  margin: none !important;
  cursor: pointer;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
}

.tick{
  font-size: 120%;
  margin-right: 10px;
}

@media only screen and (max-width: 767px) {
  .textMontserrat.voteTxt {
    font-size: 1.5rem;
  }
  div.Vitem:before {
    font-size: 1.2rem;
  }
}
@media only screen and (max-width: 992px) and (orientation: landscape) {
  #Votes {
    //height: 50vh;
    flex-wrap: nowrap;
    width: 100%;
  }
  .Vitem {
    width: 100%;
    height: 50px;
    margin: 10px;
  }
  .textMontserrat.voteTxt {
    font-size: 1.2rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1349px) {
  #Votes {
    width: 90%;
  }
}
@media only screen and (min-width: 1350px) {
}

@media only screen and (max-width: 640px) {
  .Vitem {
    cursor: pointer;
    padding: 5px;
    width: 100%;
    border: none;
    text-align: left;
    margin-bottom: 10px;
  }
  .textMontserrat.voteTxt {
    font-size: 1rem;
  }
  .Vitem:before {
    font-size: 20px;
  }
}
</style>
