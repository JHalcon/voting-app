<template>
  <div>
    <!--class="collapsible c1 my_magenda"-->
    <div v-bind="$attrs" v-on:click="showAnswer" v-bind:class="[class2,  {'collapsible_fullsite' : fullsite}]">
      {{ question }}
    </div>
    <div class="content">
      <p>{{ answer }}</p>
    </div>
    <br />
  </div>
</template>
<script>
export default {
  name: "faqBar",
  props: {
    question: String,
    answer: String,
    class1: String,
    fullsite: Boolean,
  },
    inheritAttrs:false,
    data(){
        return{
            isActive:false,
            class2 : this.class1,
        }
    },
    methods:{
        showAnswer(){
            
            let c = event.target.nextElementSibling;
            c.style.height = "100px";

            if (c.style.maxHeight){
                // zwijanie odpowiedzi

                c.style.maxHeight = null;
                
                this.class2 = this.class1;


            } else {
                // wyświetlanie odpowiedzi

                this.class2 += " active";
                c.style.maxHeight = c.scrollHeight + "px";
            } 
        }
    }
}
</script>
<style lang="scss" scoped>

p{
    margin-top: 0;
    margin-bottom: 1rem;
}

.collapsible {
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    border-radius: 15px;

    backdrop-filter: brightness(115%);

    border: 0px;//1px solid;

}

.collapsible_fullsite{
  text-decoration: underline;
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
      color: #345;
  }

   .collapsible.active {
        color: white;
    }

  .c1.active {
    background-color: var(--my_magenda);
    border-color: var(--my_magenda); }
  .c1 div.content{
    background-color: var(--my_magenda_light);}
  .c2.active {
    background-color: var(--my_orange);
    border-color: var(--my_orange); }
  .c2 div.content{
    background-color: var(--my_orange_light);}
  .c3.active {
    background-color: var(--my_blue);
    border-color: var(--my_blue); }
  .c3 div.content{
    background-color: var(--my_blue_light);}

    
@media only screen and (min-width: 860px) {
  

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
        background-color: var(--my_magenda);
        border-color: var(--my_magenda); }
    .c1.content{
        background-color: var(--my_magenda_light);}
    .collapsible.c2:hover {
        background-color: var(--my_orange);
        border-color: var(--my_orange); }
    .c2.content{
        background-color: var(--my_orange_light);}
    .collapsible.c3:hover {
        background-color: var(--my_blue); 
        border-color: var(--my_blue); }
    .c3.content{
        background-color: var(--my_blue_light);}
      
}

@media only screen and (max-width: 859px) {

    .faq .collapsible{
        font-size: 18px;
    }
  /*  .faq .content{
        font-size: 16px;
    }*/

}

</style>
