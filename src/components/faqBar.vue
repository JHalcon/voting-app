<template>
<div > 
    <!--class="collapsible c1 my_magenda"-->
    <div  v-bind="$attrs" v-on:click="showAnswer" :class="class1" >{{question}}</div>
    <div class="content"><p >{{answer}}</p>
    </div>
    <br>
    </div>
   <!-- <br>
    </div>-->
    <!--<br>-->
</template>
<script>
export default {
    name:"faqBar",    
    props:{
    "question":String,
    "answer":String,
    "class1":String,
    },
    inheritAttrs:false,
    data(){
        return{
            isActive:false,
            class2 : "",
        }
    },
    methods:{
        showAnswer(){
            
            console.log(this.class2);
            let c = event.target.nextElementSibling;
            console.log(c);
            c.style.height = "100px";
            if (c.style.maxHeight){
                console.log("jest aktywne")
            c.style.maxHeight = null;
            this.class1 = this.class2;
        } else {
            this.class2 = this.class1;
             this.class1 += " active";
            c.style.maxHeight = c.scrollHeight + "px";
        } 
        }
    }
}
</script>
<style lang="scss" scoped>


</style>