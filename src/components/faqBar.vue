<template>
  <div :class="class3" class="margin_bottom">
    <button aria-expanded="false" class="textMontserrat" v-bind="$attrs" v-on:click="showAnswer" v-bind:class="[class2,  {'collapsible_fullsite' : fullsite}]">
      {{ question }}
    </button>
    <div class="content" style="display: none;">
      <ul v-if="answers" id="answers_list" style="font-weight: bold" class="textRoboto">
        {{this.$store.state.msg.faqBar.lista}}
        <li style="font-weight: bold" v-for="(person) in this.answers" :key="person.id">
          {{person.imie}} {{person.nazwisko}} {{person.nr_albumu}} {{person.rok}}
        </li>
      </ul>
      <p v-else>{{ answer }}</p>
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
    answers: Array,
    fullsite: Boolean,
    index: Number,
  },
    inheritAttrs:false,
    data(){
        return{
            isActive:false,
            class2: String,
            class3: String,
        }
    },
    created(){
      if(this.index % 3 == 0){
        this.class1 = "collapsible c1 my_magenda"
        this.class3 = "c1"
      }  else 
      if (this.index % 3 == 1){
        this.class1 = "collapsible c2 my_orange"
        this.class3 = "c2"
      } else 
      if( this.index % 3 == 2){
        this.class1 = "collapsible c3 my_blue"
        this.class3 = "c3"
      }

      this.class2 = this.class1
    },
    methods:{
        showAnswer(){
            
            let c = event.target.nextElementSibling;
            //c.style.height = "100px";

            if (c.style.maxHeight){
                // zwijanie odpowiedzi
                event.target.setAttribute("aria-expanded", "false");

                c.style.maxHeight = null;
                this.class2 = this.class1;
                setTimeout(() => {
                  c.style.display = "none";
                }, 200);


            } else {
                // wyświetlanie odpowiedzi
                event.target.setAttribute("aria-expanded", "true");
                c.style.display = "block";
                this.class2 += " active";
                c.style.maxHeight = c.scrollHeight + "px";
            } 
        }
    }
}
</script>
<style lang="scss" scoped>

button{
  background-color: white;
}
.margin_bottom {
    margin-bottom: 1.2rem;
}

p{
    margin-top: 0;
    margin-bottom: 1rem;
}

#answers_list{
  color: #345;
  padding: 10px;


}
#answers_list li{
  padding-top: 10px;
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
  .c1 .content{
    background-color: var(--my_magenda_light);}
  .c2.active {
    background-color: var(--my_orange);
    border-color: var(--my_orange); }
  .c2 .content{
    background-color: var(--my_orange_light);}
  .c3.active {
    background-color: var(--my_blue);
    border-color: var(--my_blue); }
  .c3 .content{
    background-color: var(--my_blue_light);}


    
@media only screen and (min-width: 768px) {
    .content {
        transition: max-height 0.2s ease-out;
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
        background-color: var(--my_magenda);
        border-color: var(--my_magenda); }
    //.c1.content{
    //    background-color: var(--my_magenda_light);}
    .collapsible.c2:hover {
        background-color: var(--my_orange);
        border-color: var(--my_orange); }
    //.c2.content{
    //    background-color: var(--my_orange_light);}
    .collapsible.c3:hover {
        background-color: var(--my_blue); 
        border-color: var(--my_blue); }
    //.c3.content{
    //    background-color: var(--my_blue_light);}
      
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
