<template>
    <div id="Votes">
        
   
    </div>
</template>

<script>
export default {
  name: "NoVotes",
  components: {
  },
};
</script>
<style lang="scss">

#Votes{
    height:65vh;
   // background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px;
    font-family: Roboto;
    font-weight: bold;
    font-size:2rem;
    width:70%;
    margin: auto;
}

@media only screen and (max-width: 767px){
#Votes{
    display:flex;
    flex-wrap: wrap;
    width: 100%;
}
 /*.imgNoVotes img{
    //height:300px;
    //max-width:100%;
    height:30vh;
} 
.komunikat{
    font-size: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    width:90%;
}
*/
}
@media only screen and (max-width: 767px) and (orientation:landscape){
    #Votes{
        height:50vh;
        flex-wrap: nowrap;
        width:80%;
    }
}

@media only screen and (min-width:768px) and (max-width: 1349px){
    #Votes{
        width:90%;
    }
  
}
@media only screen and (min-width:1350px){

}


@media only screen and (max-width: 469px) {

}
</style>
