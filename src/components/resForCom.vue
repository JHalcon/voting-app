<template>
    <div v-show="this.visibility" id="res_container">
        <button class="magentaBTN button_click" id="btn1" v-on:click="changeVis">{{this.txtbtn}}</button>
        <div id="redDetail" v-show="resV">
        <h3 class="textMontserrat my_orange">Wyniki</h3>
        
        <div v-for="k in infoFiltered" :key="k.id" class="wyniki" :name="k.name" :voteNumbers="k.votesNumber" :sts="60">
           <div><div class="yellowSpan textMontserrat">{{k.name}}:</div> 
           <div class="outPinkSpan"><span class="pinkSpanInner"  >{{k.votesNumber}} ({{procent(k.votesNumber)}} %)</span> 
           <div class="outPS">
           <div  v-bind:style="{width:(procent(k.votesNumber))+'%'}" 
           class="pinkSpan"
           
           ></div>
           </div>
           </div>
            </div>
            </div>
            

            <h3 class="suma">Suma oddanych głosów: {{this.allRes}}</h3>
            <div v-if="this.allRes > 0">
            <h4 class="suma">Głosów ważnych: {{this.allResFiltered}} ({{this.procentValidVote}}%)</h4>
            <h4 class="suma">Głosów nieważnych: {{this.allRes-this.allResFiltered}} ({{100-this.procentValidVote}}%)</h4>
            </div>
        </div>
        </div>
</template>
<script>
import axios from 'axios';
export default {
    name:"resFC",
    props: {
      voteID: Number,
      info:Array,
      //onlyOneVote: Boolean,
      userIS:Boolean,
      comIS:Boolean,
      
      
    },
    data(){
        return{
            mar:"100px",
            dat:[
                //{kandydat:"", wynik:34},
                //{kandydat:"", wynik:20},
                //{kandydat:"", wynik:28},
                //{}
            ] ,
            results : [],
            resV:false,
            txtbtn: "Wyświetl wyniki",
            dataV:[],
            bordering:true,
            visibility:false,
        }
    },
    computed:{
        infoFiltered(){
          let filtered = this.info.filter(k => {
            return k.is_valid;
          });

          return filtered;
        },

        allResFiltered(){
          let sum = 0;
          this.infoFiltered.forEach((d) => {
          console.log(d.votesNumber);
              sum+= parseInt(d.votesNumber);
              console.log(sum);
          });
          return  sum;
        },

        allRes(){
          let sum = 0;
          this.info.forEach((d) => {
          console.log(d.votesNumber);
              sum+= parseInt(d.votesNumber);
              console.log(sum);
          });
          return  sum;
        },

        procentValidVote(){
          let n = 0;
          n = Math.round((parseFloat(this.allResFiltered*100))/(parseFloat(this.allRes)));
          if(isNaN(n)){
            return 0;
          }
          else{
            return n;
          }
        },
      
    },
    
   
    
    methods:{
            addData(){
              this.info.forEach((n)=>{
                console.log("leci "+n);
                this.dataV.forEach((number)=>{
                  console.log("iss"+number.vote_option+"and"+n.id)
                  if(number.vote_option == n.id ){
                    n.votesNumber =parseInt(number.vote_option__count);
                  }
                })
              })
            },



              procent(i){
                //      console.log("ffff"+i)
                i = parseFloat(i);
                //  console.log("fffff2"+typeof(i));
                // let p = i*100;
                //console.log("p to"+typeof(p));
                // console.log("ALLRES"+typeof(this.allRes))
                let n = 0;
                n = Math.round((parseFloat(i*100))/(parseFloat(this.allResFiltered)));
                if(isNaN(n)){
                  return 0;
                }
                else{
                  return n;
                }
              },

/*

             procent2(i){
                  console.log("ffff"+i)
            i = parseFloat(i);
            console.log("fffff2"+typeof(i));
            let p = i*100;
            console.log("p to"+typeof(p));
            console.log("ALLRES"+typeof(this.allRes))
            let n = 0;
          //  n = calc((parseFloat(i*100))/(parseFloat(this.allRes))-100px);
            if(isNaN(n)){
                return 0;
            }
            else{
                return n;
            }
            },
            //Math.round((parseFloat(i*100)/parseFloat(this.allRes)),2);
           // console.log("N TO "+ n)
            //return n;
*/        

getAgain(){
var zapytanie = "";
console.log("ponawiam");
       this.$root.$refs.A = this;
        if(this.userIS||this.comIS){
          this.visibility = true;
        }
        else{
          this.visibility = false;
        }
        const token = this.$func.getLoggedToken();

        if(this.comIS){
          console.log("commision");
           zapytanie = process.env.VUE_APP_COMMISION_RESULTS;
        }
        else if(this.userIS)
        {
          console.log("user");
           zapytanie = process.env.VUE_APP_PUBLIC_RESULTS;
        }
      axios.get(zapytanie+this.voteID+"/",{ 
          headers: {
            'Authorization': `Token ${token}`
          }
        })
        .then(resp => {
            console.log("VOTE PRESENt"+resp.data.votes_answer)
          //this.loaded= true;
         // this.vote = resp.data; 
          console.log(resp.data.votes_answer); 
          this.dataV = resp.data.votes_answer;//todo delete
          this.addData();
        }).catch(function (error) {
         
          if (error.response) {
            console.log(typeof(error.status))
            if (error.response.status >= 200) {
             this.failSend = true;

              if (error.response.status == 401)                                       // dopisałem ~Bart
                this.massageForUser(this.$store.state.msg.voteDetail.logoutError);    // dopisałem ~Bart
              else                                                                    // dopisałem ~Bart

             //that.comFromServ = error.response.data.vote[0];
            this.massageForUser(error.response.data.vote[0]);
              //alert("BŁĄD"+error.response.data.vote[0]);
            }
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            console.log(error.response.data.vote[0]);
          }
        })
},
        changeVis(){
            if(this.resV == true)
            {
                this.resV = false;
                this.txtbtn = "Pokaż wyniki";
                this.addData();

            }
            else{
                     this.resV= true;
                     this.txtbtn = "Ukryj wyniki";
            }
           
        }
    },/*
    created: function () {

        const token = this.$func.getLoggedToken(); //localStorage.getItem('JWT_TOKEN');
        var that = this;
      if(this.comIS){
        console.log("gfgf");
      axios.get('https://dev.api.up.kornel.dev/api/v1/commission-member/vote/vote-results/'+this.voteID+'/',{ 
          headers: {
            'Authorization': `Token ${token}`
          }
        })
        .then(resp => {
            console.log("VOTE PRESENt"+resp.data.votes_answer)
          //this.loaded= true;
         // this.vote = resp.data; 
          console.log("Odpowiedzi "+resp.data.votes_answer); 
          this.dataV = resp.data.votes_answer;//todo delete
          this.addData();
        }).catch(function (error) {
         
          if (error.response) {
            console.log(typeof(error.status))
            if (error.response.status >= 200) {
             that.failSend = true;

              if (error.response.status == 401)                                       // dopisałem ~Bart
                that.massageForUser(that.$store.state.msg.voteDetail.logoutError);    // dopisałem ~Bart
              else                                                                    // dopisałem ~Bart

             //that.comFromServ = error.response.data.vote[0];
            that.massageForUser(error.response.data.vote[0]);
              //alert("BŁĄD"+error.response.data.vote[0]);
            }
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            console.log(error.response.data.vote[0]);
          }
        })

    }
    else if(this.userIS){
      console.log("user is here");
      axios.get('https://dev.api.up.kornel.dev/api/v1/public/vote/vote-results/'+this.voteID+'/',{ 
          headers: {
            'Authorization': `Token ${token}`
          }
        })
        .then(resp => {
            console.log("VOTE PRESENt"+resp.data.votes_answer)
          console.log(resp.data.votes_answer); 
          this.dataV = resp.data.votes_answer;//todo delete
          this.addData();
        })
      
    }
    },*/
    created: function () {
      var zapytanie = "";
       this.$root.$refs.A = this;
        if(this.userIS||this.comIS){
          this.visibility = true;
        }
        else{
          this.visibility = false;
        }
        const token = this.$func.getLoggedToken(); //localStorage.getItem('JWT_TOKEN');
       
        if(this.comIS){
          console.log("commision");
           //zapytanie = 'https://dev.api.up.kornel.dev/api/v1/commission-member/vote/vote-results/:id/'.format({id:this.voteID});
           zapytanie = process.env.VUE_APP_COMMISION_RESULTS;
        }
        else if(this.userIS)
        {
          console.log("user");
          // zapytanie = 'https://dev.api.up.kornel.dev/api/v1/public/vote/vote-results/:id/'.format({id:this.voteID});
          zapytanie = process.env.VUE_APP_PUBLIC_RESULTS;
        }
     axios.get(zapytanie+this.voteID+"/",{ 
       //axios.get(zapytanie,{ 
          headers: {
            'Authorization': `Token ${token}`
          }
        })
        .then(resp => {
            console.log("VOTE PRESENt"+resp.data.votes_answer)
          //this.loaded= true;
         // this.vote = resp.data; 
          console.log(resp.data.votes_answer); 
          this.dataV = resp.data.votes_answer;//todo delete
          this.addData();
        }).catch(function (error) {
         
          if (error.response) {
            console.log(typeof(error.status))
            if (error.response.status >= 200) {
             this.failSend = true;

              if (error.response.status == 401)                                       // dopisałem ~Bart
                this.massageForUser(this.$store.state.msg.voteDetail.logoutError);    // dopisałem ~Bart
              else                                                                    // dopisałem ~Bart

             //that.comFromServ = error.response.data.vote[0];
            this.massageForUser(error.response.data.vote[0]);
              //alert("BŁĄD"+error.response.data.vote[0]);
            }
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            console.log(error.response.data.vote[0]);
          }
        })

    },
}
</script>
<style scoped>
.suma{
  margin-top: 15px;
}
.outPS{
  border:2px solid black;
  width:100%;
}
.pinkspan{
  height:100%;
}
.borderedBlack{
  border:2px solid black;
}
.outPinkSpan{
    display: flex;
    flex-direction: row;
    height:40px;
   
}
button.magentaBTN {
  margin: 20px;
  background-color: var(--my_magenda);
  padding: 10px;
  font-family: "Montserrat";
  color: white;
  font-size: 1.3rem;
  /*margin: auto;*/
  margin: 50px;
}
.pinkSpanInner{
    min-width: 100px;
}
div.wyniki:nth-child(3n+1) >div> div.outPinkSpan > div.outPS> div.pinkSpan{ 
  background-color: var(--my_magenda);
  height: 100%;
 /* border:2px solid black;*/
}
div.wyniki:nth-child(3n+1) > div> div.outPinkSpan >  span.pinkSpanInner{ 
  background-color: var(--my_magenda);
  margin-right: 8px ;
  display: flex;
  align-items: center;
  padding: 5px;
  color:white;
}
/*////////////////////////////////*/
div.wyniki:nth-child(3n+1) > div > div.yellowSpan{ 
  color: var(--my_magenda);
}


div.wyniki:nth-child(3n) > div > div.outPinkSpan > div.outPS > div.pinkSpan{ 
  background-color: var(--my_orange);
 /* border:2px solid black;*/
 height:100%;
}

div.wyniki:nth-child(3n) > div > div.outPinkSpan> span.pinkSpanInner{ 
  background-color: var(--my_orange);
   margin-right: 8px ;
  display: flex;
  align-items: center;
  padding: 5px;
  color:white;
}

div.wyniki:nth-child(3n) > div > div.yellowSpan{ 
  color: var(--my_orange);
}
div.wyniki:nth-child(3n-1) > div > div.outPinkSpan > div.outPS > div.pinkSpan{ 
  background-color: var(--my_blue);
    height:100%;
}
div.wyniki:nth-child(3n-1) > div > div.outPinkSpan > span.pinkSpanInner{ 
  background-color: var(--my_blue);
   margin-right: 8px ;
  display: flex;
  align-items: center;
  padding: 5px;
  color:white;
}
div.wyniki:nth-child(3n-1) > div  > div.yellowSpan{ 
  color: var(--my_blue);
}
#redDetail{
    font-family: Roboto;
    border-top: 1px solid #ccc;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5%;
    margin-left: 5%;
    flex-direction: column;
}
div.yellowSpan{
    padding:10px;
    margin:5px;
    font-size:1rem;
    font-weight: bold;
    color:white;
}
div.pinkSpan{
     background-color: var(--my_magenda);
    /*padding:10px;
    margin:5px;*/
    color:white;
    font-weight: 900;
    min-width:0px;
}
.wyniki{
    width: 100%;
}
 @media (max-width: 770px) {
     #redDetail{
         margin:0;
         width: 100%;
     }
     .pinkSpanInner{
         min-width:70px;
         font-size: 14px;
     }

     #res_container{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
       }
     button.magentaBTN{
      width: 230px;
      font-size: 0.9rem;
     }

 }
</style>