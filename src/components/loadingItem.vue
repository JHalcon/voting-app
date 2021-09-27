<template>
  <div class="container"
  :class="{ 'medium' : medium && !small, 'small' : small && !medium, 'big': !medium && !small }"
  >
    <div class="sk-chase">
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
      <div class="sk-chase-dot"></div>
    </div>
  </div>
</template>

<script>


export default {
  name: "LoadingItem",
  components: {
  },
  props:{
    medium: Boolean,
    small: Boolean,
  }
};
</script>
<style  lang="scss" scoped>


/*
@media only screen and (min-width: 1300px) {
  // loading-logging animation
    .sk-chase {
      width: 40px;
      height: 40px;
    }
}

@media only screen and (min-width: 860px) and (max-width: 1299px) {
  // loading-logging animation
    .sk-chase {
      width: 30px;
      height: 30px;
    }
}


@media only screen and (max-width: 859px) {
    // loading-logging animation
    .sk-chase {
      width: 25px;
      height: 25px;
    }

}
*/

.container{
  margin: auto;
  //margin-top: 50px;
}

.big{
  width: 250px;
  height: 250px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.medium{
  width: 130px;
  height: 130px;
  margin-top: 20px;
  margin-bottom: 20px;
}

@media only screen and (min-width: 860px) {
  .small{
    width: 30px;
    height: 30px;
  }
}

@media only screen and (max-width: 859px) {
  .small{
    width: 25px;
    height: 25px;
  }
}


.sk-chase {
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
  margin:auto;
  width: 100%;
  height: 100%;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0; 
  animation: sk-chase-dot 2.0s infinite ease-in-out both; 
}

.sk-chase-dot:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  border-radius: 100%;
  animation: sk-chase-dot-before 2.0s infinite ease-in-out both; 
}

:not(.small) .sk-chase-dot:before{
  background-color: var(--my_magenda);
}
.small .sk-chase-dot:before{
  background-color: #fff;
}

.sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
.sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

@keyframes sk-chase {
  100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot {
  80%, 100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  } 
}

</style>