<template>
  <div>
    <div v-if="isLoggedIn">
        <HeaderFL/>
    </div>
    <div v-else>
        <Header/>
    </div>

    <div class="contactDiv">
        <h2 class="textMontserrat my_magenda">{{this.$store.state.msg.contact.title}}</h2>
        <div class="cards">
            <div class="two_cards">
                <div class="contactCard FB" @mouseover="colorLink()" @mouseleave="decolorLink">
                    <img src="../assets/images/website.svg" class="imgcc" id="fbimg" alt="">
                    <h3 class="contH mH" id="fblink">
                        <span class="littleIcon">
                            <img class="littleIcon" src="../assets/images/fb.svg" alt="ikona strony facebook"> 
                            <a target="_blank" class="mH" rel="noopener noreferrer" href="http://www.fb.me/samorzad.up"> 
                                {{this.$store.state.msg.contact.link_fb}}</a><br>
                        </span>
                        <span class="littleIcon" > 
                            <a target="_blank" class="mH" rel="noopener noreferrer" href="https://samorzad.up.krakow.pl/">
                            <img class="littleIcon" src="../assets/images/browser.svg" alt="symbol strony www">{{this.$store.state.msg.contact.link_wp}}</a>
                        </span>
                    </h3>
                </div>
                <div class="contactCard orangeCard">
                    <img src="../assets/images/gmail.svg" alt="ikona koperty - symbol poczty elektronicznej" class="imgcc">
                    <h3 class="oH">{{this.$store.state.msg.contact.email}}</h3>
                </div>
            </div>
            <div class="two_cards">      
                <div class="contactCard blueCard">
                    <img src="../assets/images/home-address.svg" alt="ikona domu - symbol adresu" class="imgcc">
                    <h3 class="contH">{{this.$store.state.msg.contact.adres_1}}<br>{{this.$store.state.msg.contact.adres_2}}</h3>
                </div>

                <div class="contactCard greenCard">
                    <img src="../assets/images/tel.svg" alt="ikona słuchawki telefonicznej" class="imgcc">
                    <h3 class="contH gH">{{this.$store.state.msg.contact.tel}}</h3>
                </div>  
            </div>   

        </div>
   </div>
  </div>
</template>
<script>

//import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
import HeaderFL from "@/components/HeaderForLogged.vue";

//import contactCard from "@/components/contactCard.vue";
//import userPanel from "@/components/userPanel.vue";
export default {
  name: "contact",
  data() {
    return {
        isLoggedIn: this.$func.getLoggedToken(),
    };
  },
  components: {
    //Footer,
    Header,
    HeaderFL,
   // contactCard,
  },
  methods:{
      colorLink(){
        //  let l = document.getElementById("fblink");
         // let ll = document.getElementById("fbimg");
         // l.style.textDecoration = "underline";
      },
      decolorLink(){
         // let l = document.getElementById("fblink");
         // l.style.textDecoration = "none";
      }
  }
};
</script>
<style scoped>
.contactDiv{
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    font-family: Roboto;
    font-weight: 900;
    margin-top: 30px;
}

a, span, h3{
    font-weight: bold;
}
.littleIcon:hover{
    text-decoration: underline;
}
.fbimg{
    fill:var(--my_magenda);
}
.littleIcon{
    height:16px;
    margin-right: 5px;
}
.blueCard{
    background-color: var(--my_blue_light);
    border:3px solid var(--my_blue)
}
#fblink{
    text-decoration: none;
}
h3{
    padding: 10px;
}
h3.oH{
     color:var(--my_orange_dark);
}
h3.gH{
     color:rgb(3, 88, 3);
}
.greenCard{
    background-color: rgb(134, 192, 120);
    color: green;
    border:2px solid rgb(3, 88, 3);
}
a.mH{
    color:var(--my_magenda_dark);
    text-decoration: none;
}
a.mH:hover{
    text-decoration: underline;
}
.contactCard{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:300px;
    /*background-color: var(--my_orange_light);*/
    margin: 1rem;
    padding: 1rem;
   /* border:3px solid black;*/
    border-radius:10px;
}
.contactCard.FB{
    background-color: var(--my_magenda_light);
    border:3px solid  var(--my_magenda);
    color:var(--my_magenda)
}
.orangeCard{
    border:2px solid var(--my_orange_dark);
    _color: var(--my_orange_dark);
    background-color: var(--my_orange_light);
}
h3.mH{
    color:var(--my_magenda)
}
.cards{
    display: flex;
    justify-content: center;
    flex-direction:row;
    font-family: Roboto;
    font-weight: 900;
    margin-top: 1%;
    flex-wrap: wrap;
}
.two_cards{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

img.imgcc{
    height:4rem;
}

@media (min-width: 768px){
    .contactDiv{
        margin-top: 4rem;
    }
}
@media (max-width: 767px) {

    .cards{
    flex-wrap: wrap;
    }
    img.imgcc{
        height:3rem;
    }
    .contactCard{
        width:250px;
        height:10rem;
        font-size: 0.9rem;
        margin:1.5rem;
        padding: 10px;
    }

     __h3.contH{
        font-size:1rem;
    }
}
@media (max-width: 767px)  and (orientation: landscape){
 .cards{
    flex-wrap: wrap;
    }
   
    h3.contH{
        font-size:1rem;
    }
}

@media only screen and (max-width: 399px){
    .contactDiv > h2{
        font-size: 15px;
    }
    img.imgcc{
        height:2rem;
    }
    .contactCard{
        width:200px;
        height:10rem;
        font-size:0.7rem;
        margin:0.8rem;
        padding: 10px;
    }
    .littleIcon{
        margin-right: 2px;
    }


}
</style>
