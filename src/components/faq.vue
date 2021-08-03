<template>
    <section id="faq">
                <!---- STRONA FAQ ---->

                <div class="page textMontserrat" >

                    <div class="background_bar ">
                        <span>NAJCZĘŚCIEJ ZADAWANE PYTANIA</span>
                    </div>
                    <br>                    
                    <div class="faq">
                        <!--
                        <div class="collapsible c1 my_magenda">DO KIEDY MOŻNA ODDAĆ SWÓJ GŁOS?</div>
                        <div class="content"><p>GŁOSOWANIE TRWA OD _________ DO _________.</p></div><br>

                        <div class="collapsible c2 my_orange">CZY GŁOSOWANIE JEST ANONIMOWE?</div>
                        <div class="content"><p>TAK, WYBORY SĄ W PEŁNI ANONIMOWE. LOGOWANIE JEST WYMAGANE TYLKO PO TO, ABY KAŻDY STUDENT MÓGŁ ODDAĆ TYLKO 1 GŁOS.</p></div><br>

                        <div class="collapsible c3 my_blue">JAKIEŚ PRZYKŁADOWE PYTANIE 3</div>
                        <div class="content"><p>A TO JAKAŚ PRZYKŁADOWA ODPOWIEDŹ NA TRZECIE PYTANIE</p></div><br>
                        
                        <div class="collapsible c1 my_magenda">JAKIEŚ PRZYKŁADOWE PYTANIE 4</div>
                        <div class="content"><p>A TO JAKAŚ PRZYKŁADOWA ODPOWIEDŹ NA CZWARTE PYTANIE</p></div><br>-->
                        <faqBar class1="collapsible c1 my_magenda" class="c1" question="Do kiedy można oddać swój głos?" answer="Głos można oddać od___ do____"/>
                        <faqBar class1="collapsible c2 my_orange" class="c2"  question="Do kiedy można oddać swój głos?" answer="Głos można oddać od___ do____"/>
                        <faqBar class1="collapsible c3 my_blue" class="c3" question="Do kiedy można oddać swój głos?" answer="Głos można oddać od___ do____"/>
                        <faqBar class1="collapsible c1 my_magenda" class="c1" question="Do kiedy można oddać swój głos?" answer="Głos można oddać od___ do____"/>

                    </div>
                    
                    <img src="../assets/images/faq.svg" alt="Element dekoracyjny" class="faq_img">
                    <a href="#home"><img src="../assets/images/arrow.svg" alt="Przycisk powrotu na stronę startową" class="arrow_img"></a>

                </div>
            
            </section>

</template>
<script>
import faqBar from "@/components/faqBar.vue";
export default {
    name:"faq",
    components:{
        faqBar,
    }
}
</script>
<style lang="scss" >
*{
font-weight: 400;
line-height: 1.5;
}
///////////////
.c1 div.collapsible{
    // background-color:red;
}
.background_bar{
    background-color: var(--my_blue); /* For browsers that do not support gradients */
    background-image: linear-gradient(to right, var(--my_blue) ,  var(--my_blue_light2));
    color: white;
    _color: var(--my_blue);
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;

}
p{

margin-top: 0;
margin-bottom: 1rem;
}
.page{
    margin-top:20px;
    position: relative; 
    width: 100%; 
    height: 100%;
    min-height: 400px;
}

.arrow_img{

    position: relative;
    bottom: 0px;
    transform: rotate(180deg);
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    margin-top:30px;
    margin-bottom: 30px;
    width: 60px; 

    left: 50%;
    transform: translateX(-50%);

}

.collapsible {
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    border-radius: 15px;

}

.collapsible:before {
    content: '\25BC';
    font-weight: bold;
    float: right;
    margin-left: 5px;
  }
  
  .active:before {
    content: "\25B2";

  }

  .content {
    padding: 0 28px;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  //  background-color: #f1f1f1;
    margin: 0px 10px 0px;
    border-radius: 0 0 10px 10px;
  }

  .content > p {
      padding: 20px;
  }

   .collapsible.active {
    color: white;
}

  .c1.active {
    background-color: var(--my_magenda);}
  .c1 div.content{
   background-color: var(--my_magenda_light);}
   //var(--my_magenda_light);}
  .c2.active {
    background-color: var(--my_orange);}
  .c2 div.content{
   background-color: var(--my_orange_light);}
  .c3.active {
    background-color: var(--my_blue); }
  .c3 div.content{
  background-color: var(--my_blue_light);}

    
@media only screen and (min-width: 860px) {
    .background_bar{
        font-size: 4vw;
    }

    .faq_img{
        position: absolute;
        width: 400px;
        right: 0px;
        bottom: 0px;
        padding: 40px;
        transform: rotate(5deg);
        z-index: 0;
        opacity: 80%;
    }

    .faq{
        position: relative;
        width: 70%;
        margin:auto;
        z-index: 1;
    }

    .faq .collapsible {
        font-size: 2.3vw;
    }
  .faq .content{
        font-size: 1.5vw;
    }

    .collapsible:hover {
        color: white;
    }
     .collapsible.c1:hover {
        background-color: var(--my_magenda);}
      .c1.content{
       background-color: var(--my_magenda_light);}
    .collapsible.c2:hover {
        background-color: var(--my_orange);}
      .c2.content{
       background-color: var(--my_orange_light);}
      .collapsible.c3:hover {
        background-color: var(--my_blue); }
      .c3.content{
      background-color: var(--my_blue_light);}
      
}

@media only screen and (max-width: 859px) {
    .background_bar{
        font-size: 25px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .faq_img{
        position: absolute;
        width: 400px;
        right: 0px;
        bottom: 0px;
        padding: 40px;
        transform: rotate(5deg);
        z-index: 0;
        opacity: 5%;
    }

    .faq{
        position: relative;
        width: 90%;
        margin:auto;
        z-index: 1;
    }

    .faq .collapsible{
        font-size: 18px;
    }
  /*  .faq .content{
        font-size: 16px;
    }*/

}
</style>