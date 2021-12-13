<template>
  <div>
    <div v-if="isClockImgLoaded" class="VoteDetails">


      <div class="smallNavbar headerRob" v-if="!onlyOneVote">
        <router-link style="text-decoration: none" to="/UserPage">&larr; <span class="routerlink">Strona główna</span></router-link>
      </div>
    <div class="VoteDetails2">
      <div class="left">
         <h3 class="textMontserrat my_magenda h3Header" aria-label="nazwa głosowania">{{ vote.name }}</h3>
         
        <div v-show="this.canVotenow" class="infoInner">
            <div class="text">
            
              <p>
                <ul class="infoList" aria-label="Opis głosowania">
                  <li class="infoItem" v-if="this.isMultichoice==false"><span class="robBold">{{this.$store.state.msg.voteDetail.glos_1_opcja}}</span><br></li>
                      <li  class="infoItem" v-if="this.isMultichoice==true">  <span class="robBold" v-show="this.limitAns>0">{{this.$store.state.msg.voteDetail.glos_limit_opcji_1}}
                      {{this.limitAns}} {{this.$store.state.msg.voteDetail.glos_limit_opcji_2}}</span><span class="robBold" v-show="this.limitAns==0">{{this.$store.state.msg.voteDetail.glos_wiele_opcji}}</span></li>
                  <li  class="infoItem" v-if="this.isAnons==true"> <span class="robBold">{{this.$store.state.msg.voteDetail.glos_anonimowe}}</span></li>
                  <li  class="infoItem" v-show="ddescr"> <span class="robBold">{{ this.description }}</span></li>
                </ul>
              </p>
            </div>
            <button class="blueBTN1 button_click" v-on:click="showCard()" v-show="actAnsBTN">
              {{this.$store.state.msg.voteDetail.wyswietl_karte}}
            </button>
        </div>
        <div id="voteCardMaster" v-show="activeAns">
          <h3 v-if="this.voteType==='BOSS'" class="headerRob">{{this.$store.state.msg.voteDetail.karta_tytul_boss}}</h3>
          <h3 v-if="this.voteType!='BOSS'" class="headerRob">{{this.$store.state.msg.voteDetail.karta_tytul_nieboss}}</h3>
          <form>
            <div v-for="o in this.activeA" 
                :key="o.id" 
                class="answers"
                :id="o.id+'Did'" 
                :name="o.name"
                v-on:click="selectAns(o.id)" 
                :value="o.name">
              <input type="checkbox" :value="o.name" v-on:click="selectAnsBOX(o.id)"  :id="o.id+'id'">
              <label :for="o.id+'id'"  class="Alabel">{{o.name}}</label>
            </div>
          </form>
          <button class="blueBTN button_click" v-on:click="vote1()" v-show="!isAlert">
              <div v-if="this.loading2">
              <loadingItem small />
            </div>
            <div v-else>
              {{this.$store.state.msg.voteDetail.oddaj_glos}}
            </div>
        </button>
        </div>
        <div id="succesAlert" v-show="this.doneVoteSucces">
          <h3 class="textMontserrat communicat">
            {{this.$store.state.msg.voteDetail.dziekujemy_za_oddanie_glosu}}
          </h3>
        </div>
        <div id="comForUser" v-show="this.failSend">
          <h3 class="textMontserrat" id="comForUserH">
            {{this.comFromServ}}
          </h3>
        </div>
        <div id="communicatForUser" v-show="!this.canVotenow">
          <h3 class="textMontserrat communicat">
            {{this.communicatN}}
          </h3>
        </div>
        <div id="alert2" v-show="isAlert">
          <h3 class="textMontserrat my_orange">{{this.alertCOM}}</h3>
          <div class="ansBTNS">
            <div v-show="falseVAlert">
               <h4 class="ognH textMontserrat" ><input type="checkbox" v-on:change="canFV()" id="FVchb"> 
               <label for="FVchb">{{this.$store.state.msg.voteDetail.oddaje_glos_niewazny_checkbox}}</label></h4>
              </div>
            <button class="blueBTN2 button_click" v-on:click="answerDone()" v-show="AcceptAns">
              
              <div v-if="this.loading">
              <loadingItem small />
            </div>
            <div v-else>
              {{this.$store.state.msg.voteDetail.potwierdz_oddaj_glos}}
            </div>
              
              </button>
            <button class='blueBTN2 button_click'  v-on:click="sendFAns()" id="FVbtn" disabled v-show="this.falseVAlert">
                 <div v-if="this.loading3">
              <loadingItem small />
            </div>
            <div v-else>
              {{this.$store.state.msg.voteDetail.oddaje_glos_niewazny_button}}
            </div>


              
              </button>
            <button class="orangeBTN2 button_click" v-on:click="cancel()">{{this.$store.state.msg.voteDetail.anuluj}}</button>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="clockIcon"><img src="../assets/images/clock.svg" id="clockImg" alt="">
        </div>
        <div class="rightTxt">
          <h3 class="textMontserrat my_orange h3Header">
            {{this.$store.state.msg.voteDetail.termin}}
          </h3>
          <div class="dDiv">
            <h4 class="p10 dH">
              
              <div class="" v-if="this.dateStart==this.dateEnd">
                <span class="p10blue textMontserrat">{{this.$store.state.dni_tygodnia_caps[this.dayIndex]}}</span>
                <span class="p10blue textMontserrat">{{this.dateStart}} </span>


                <span class="flexSPAN">
                  <span class="textMontserrat innerFS">{{this.$store.state.msg.voteDetail.rozpoczecie}}<br>
                    <span class="p10blue1 textMontserrat">{{this.dateStartH}}</span>
                  </span>
                  <span class="textMontserrat innerFS">{{this.$store.state.msg.voteDetail.zakonczenie}}<br>
                    <span class="p10blue1 textMontserrat">{{this.dateEndH}}</span>
                  </span>
                </span>

              </div>
              <div v-else>
                

                <span class="flexSPAN">
                  <span class="textMontserrat innerFS">{{this.$store.state.msg.voteDetail.rozpoczecie}}<br>
                    <span class="p10blue1 textMontserrat">{{this.dateStart}}</span>
                    <span class="p10blue1 textMontserrat">{{this.dateStartH}}</span>
                  </span>
                  <span class="textMontserrat innerFS">{{this.$store.state.msg.voteDetail.zakonczenie}}<br>
                    <span class="p10blue1 textMontserrat">{{this.dateEnd}}</span>
                    <span class="p10blue1 textMontserrat">{{this.dateEndH}}</span>
                  </span>
                </span>


              </div>
              
              
              


            </h4>
          </div>
          <p>
          </p>
        </div>

      </div>
    </div>

<!--
    <div id="alert" style="display:none">
      <button class="blueBTN2 button_click" v-on:click="answerDone()">ODDAJ GŁOS</button>
      
      <button class="orangeBTN2 button_click" v-on:click="closeAlert()">ANULUJ</button>
    </div>
-->


    <!-- <resFC :voteID="this.vote.id" :info="this.allAns" :gg="this.updatingProps" :userIS="this.userIS && !this.isCanceled" :comIS="this.recVisible"/> -->
    
    </div>
    <div v-else>
      <LoadingItem medium /> 
    </div>
  </div>

</template>
<script>
  import axios from 'axios';
  //import resFC from "@/components/resForCom.vue";
  import LoadingItem from "@/components/loadingItem.vue";
 //import moment from 'moment';
  export default {
    name: "voteDetails",
    props: {
      vote: Object,
      onlyOneVote: Boolean,
    },
    data() {
      return {
        activeAns: false,
        actAnsBTN: true,
        isAlert: false,
        doneVote: false,
        AcceptAns: false,
        allAns:[],
        myAnswer: [],
        myAnswertxt: [],
        canVotenow: true,
        alertCOM: "",
        canFinish: true,
        comFromServ: "",
        failSend: false,
        doneVoteSucces:false,
        falseVAlert: false,
        falseAID:[],
        votingStarted:true,
        votingEnded:true,
        //resV:false,
        uID:3,
        recVisible:false,
        userIS:false,
        notStarted:false,
        updatingProps:0,
        loading2: false,
        loading: false,
        loading3:false,
        dayIndex: 0,
        isClockImgLoaded: false,
        voteIsToday: false,
      };
    },
    components: {
      //resFC,
      LoadingItem,
    },
    computed: {
      dateStart() {
        return this.vote.date_start.substr(8, 2) + "." + this.vote.date_start.substr(5, 2) + "." + this.vote.date_start
          .substr(0, 4);
      },
      limitAns() {
        return this.vote.multi_choice_limit;
      },
      dateStartH() {
        return this.vote.date_start.substr(11, 5);
      },
      dateEE(){
        return this.vote.date_end;
      },
      dateStartJson(){
        return this.vote.date_start;
      },
      dateEnd() {

        return this.vote.date_end.substr(8, 2) + "." + this.vote.date_end.substr(5, 2) + "." + this.vote.date_end
          .substr(0, 4);
      },
      dateEndH() {
        return this.vote.date_end.substr(11, 5);
      },
      voteType() {
        return this.vote.vote_type;
      },
      isMultichoice() {
        return this.vote.is_multi_choice;
      },
      isAnons() {
        return this.vote.is_anonymous;
      },
      options() {
        return this.vote.options;
      },
      userVoted() {
        return this.vote.vote_given;
      },
      description() {
        return this.vote.description;
      },
      voteGiven() {
        return this.vote.vote_given;
      },
      isStarted() {
        return this.vote.is_started;
      },
      ddescr(){
        if(this.description!=""){
          return true;
        } else {
          return false;
        }
      },
       isClosed() {
        return this.vote.is_closed;
      },
      isCanceled(){
         return this.vote.is_canceled;

      },
      commision() {
        return this.vote.commission;
      },
      userId() {
        return this.$func.getLoggedUserId(); //localStorage.getItem('USER_ID');
      },
      activeA(){
       return this.options.filter(function(u) {
         return u.is_valid;
        })
      },
      FalseA(){
          return this.options.filter(function(u) {
            return !u.is_valid;
        })
      },
      VotingID(){
        return this.vote.id;
      },
      communicatN() {
          if (this.isStarted){
            if (this.voteGiven) {
              return this.$store.state.msg.voteDetail.glos_juz_oddany;
            } else if(this.isCanceled){
              return this.$store.state.msg.voteDetail.glos_anulowane;
            } else if(this.isClosed){
              return this.$store.state.msg.voteDetail.glos_juz_zakonczone;//"GŁOSOWANIE JUŻ SIĘ ZAKONCZYLO"
            } 
          } 
            
          if ((this.notStarted==false)) {
            var time;
            if(this.voteIsToday)
              time = "o\xa0" + this.vote.date_start.substr(11, 5)+"!";
            else
              time = this.vote.date_start.substr(8, 2) + "." + this.vote.date_start.substr(5, 2)+"!"

            return this.$store.state.msg.voteDetail.glos_nierozpoczete + time;//"GŁOSOWANIE JESZCZE SIĘ NIE ZACZĘŁO, ZAPRASZAMY WKÓTCE";
          } 
          return this.$store.state.msg.voteDetail.glos_zakonczone;//"GŁOSOWANIE ZAKONCZONE"
            
          
      },
 },

 mounted(){
    this.isClockImgLoaded = true;
 },
    created: function () {
      var tmp = new Date();
      var dzisiaj = new Date(tmp.getTime() - 60000); // jest to obiekt z dzisiejsza data, ale przesuniety o minutę wstecz. Robię tak, ponieważ
        // serwer przez kilka sekund PO wybranej godzinie startu obsługuje automatyczne uruchamianie głosowania
        // W związku z tym przez kilka sekund warunek dzisiaj < dateOfStart zwracałby false -> wtedy, gdy system akurat uruchamiał głosowanie.
        // Dlatego "dzisiaj" jest zmienną cofniętą o minutę, przez co dajemy czas serwerowi na uruchomienie głosowania i wyświetlamy poprawny komunikat 
      var endDate = new Date(this.dateEE);
      var bpDay = new Date(this.vote.date_start);     //dodałem ~Bart
      this.dayIndex = bpDay.getDay();                 //dodałem ~Bart
     // console.log("Data zakończenia "+hg);

      var dateOfStart = new Date(this.dateStartJson);


      // minal czas glosowania (niezaleznie od faktycznego stanu glosowania na backendzie), zatem zapisujemy ze glosowanie minelo
      if(endDate < dzisiaj){
        this.notStarted = true;
      } else{
        // sprawdzamy czy glosowanie jeszcze sie nie rozpoczęło
        if(dzisiaj < dateOfStart){

          // jeśli głosowanie jest dzisiaj to zapisujemy to aby wyświetlić odpowiedni komunikat (godzine)
          if(dzisiaj.getDate() == dateOfStart.getDate() && dzisiaj.getMonth() == dateOfStart.getMonth() && dzisiaj.getFullYear() == dateOfStart.getFullYear())
            this.voteIsToday = true;
          // w przeciwnym razie wyswietlimy date
          else
            this.voteIsToday = false;

        //  console.log("ZAKONCZENIE TRUE");
        } 
      }

      this.options.forEach((n)=>{
          let b = {};
          b.name = n.name;
          b.id=n.id;
          b.votesNumber = 0;
          b.is_valid = n.is_valid;
        this.allAns.push(b);
      });
      //console.log("ID USER: " + this.userId);
      let bb;
      bb = this.commision.find(element => element.member == this.userId);
      //console.log("SZUKANIE"+bb);
    
      if(bb){
          this.recVisible = true;
 //         this.userIS = false;
      }
  //    else{
        if(this.isClosed){
        //console.log("prelacznik");
          this.userIS = true;
        }
   //   }

      if ((this.isStarted && (!this.voteGiven)&&(this.isClosed!=true))) {
       // console.log("shhagf");
        this.canVotenow = true;
      } else {
        this.canVotenow = false;
      //  console.log("NIE MOZENA")
      }
    },
    methods: {
      kjk(){
          this.updatingProps++;
          this.$root.$refs.A.dupa();
      },
      showAlert() {
        this.isAlert = true;
      },
      


      canFV(){
        let chb =  document.getElementById("FVchb");
        let btn = document.getElementById("FVbtn");
        if(chb.checked){
          //console.log("checked");
          //btn.style.filter = "none";
          btn.style.backgroundColor = "var(--my_blue)";
          btn.style.pointerEvents = 'auto';
          btn.disabled = false;

           //this.falseAID.push();
           //console.log(this.FalseA[0].id)
          this.falseAID.push(this.FalseA[0].id);
        }
        else{
          //console.log("nonchecked");
          btn.style.pointerEvents = 'none';
          btn.style.backgroundColor = "gray";
          btn.disabled = true;

        }
      },

      vote2(n){

        this.blockCard();

        //console.log("DWA");
          
          if ((this.isMultichoice === false) ) {
            if(n==1){
              this.alertCOM = this.$store.state.msg.voteDetail.alert_potwierdz_wybor;//"Potwierdź swój wybór";
              this.isAlert = true;
              this.canFinish = true;
              this.AcceptAns = true;
              this.falseVAlert = false;
              this.loading2 = false;
            }
            else{
              this.alertCOM = this.$store.state.msg.voteDetail.alert_tylko_1_odp;//"Zaznacz tylko jedną odpowiedź. W innym wypadku potwierdź, że oddajesz głos nieważny";
              this.isAlert = true; ///okno z alertem
              this.falseVAlert = true; // glos nieważny
              this.canFinish = false; //blokada guzika
              this.AcceptAns = false;
              this.loading2 = false;
            }
          }
            else{
              //console.log("nie multi");
              if(n==0){
                  if(this.limitAns!=0){
                    this.alertCOM = this.$store.state.msg.voteDetail.alert_limit_odp_1 + this.limitAns + this.$store.state.msg.voteDetail.alert_limit_odp_2;//"Prosze zaznacz do " + this.limitAns + " wybranych odpowiedzi. W innym wypadku oddajesz głos nieważny";
                    this.falseVAlert = true;
                    this.isAlert = true;
                    this.canFinish = false;
                    this.AcceptAns = false;
                    this.loading2 = false;
                  }
                  else{
                    this.alertCOM = this.$store.state.msg.voteDetail.alert_brak_odp;//"Prosze zaznacz odpowiedź/opowiedzi. W innym wypadku oddajesz głos nieważny";
                    this.falseVAlert = true;
                    this.isAlert = true;
                    this.canFinish = false;
                    this.AcceptAns = false;
                    this.loading2 = false;
                  }

              }
              else{
                  if((this.limitAns == 0)){
                      this.alertCOM = this.$store.state.msg.voteDetail.alert_potwierdz_wybor;//"Potwierdź swój wybór";
                      this.AcceptAns = true,
                      this.isAlert = true;
                      this.canFinish = true;
                      this.falseVAlert = false;
                      this.loading2 = false;

                  } else if(n<=this.limitAns){
                      this.alertCOM = this.$store.state.msg.voteDetail.alert_potwierdz_wybor;//"Potwierdź swój wybór";
                      this.AcceptAns = true,
                      this.isAlert = true;
                      this.canFinish = true;
                      this.falseVAlert = false;
                      this.loading2 = false;   

                  }
                  else{
                      this.alertCOM = this.$store.state.msg.voteDetail.alert_limit2_odp_1 + this.limitAns + this.$store.state.msg.voteDetail.alert_limit2_odp_2;// "Prosze zaznacz maksymalnie "+this.limitAns+" opowiedzi. W innym wypadku oddajesz głos nieważny";
                      this.falseVAlert = true;
                      this.isAlert = true;
                      this.canFinish = false;
                      this.AcceptAns = false;
                      this.loading2 = false;

                  }

              }

            }


      },






      vote1() {

        let n = this.myAnswer.length;
        this.loading2 = true;

        setTimeout(()=>{this.vote2(n)
        }, 500);
        
      },
      showCard() {
        this.activeAns = !this.activeAns;
        this.actAnsBTN = false;
        this.show();
      },
      cancel() {
        this.unblockCard();
        this.isAlert = false;
        let chb =  document.getElementById("FVchb");
        let btn = document.getElementById("FVbtn");   // dodałem Bart
        if(chb.checked){
          chb.checked=0;
          btn.style.pointerEvents = 'none';           // dodałem Bart
          btn.style.backgroundColor = "gray";         // dodałem Bart
          btn.disabled = true;

        }

      },
      checkedEl(o){
        let p = document.getElementById(o);
        if(p.checked){
          return true;
        }
        else{
          return false;
        }
      },
      blockCard() {
        let cardV = document.getElementById("voteCardMaster");
        cardV.style.pointerEvents = 'none';
        cardV.style.filter = "blur(2px)";

        let cardAnswers = document.getElementsByClassName("answers");
        cardAnswers.forEach(function(item) {
          let input = item.getElementsByTagName('input')[0];
          input.tabIndex = -1;
        });
        
      },
      unblockCard() {
        let cardV = document.getElementById("voteCardMaster");
        cardV.style.pointerEvents = 'auto';
        cardV.style.filter = "none";

        let cardAnswers = document.getElementsByClassName("answers");
        cardAnswers.forEach(function(item) {
          let input = item.getElementsByTagName('input')[0];
          input.removeAttribute('tabIndex');
        });

      },
      closeAlert() {
        this.isAlert = false;
        // this.actAnsBTN = false;    
      },
      answerDone2(){

          if (this.canFinish == true) {
            this.closeAlert();
            this.doneVote = true;
            this.activeAns = false;
            this.actAnsBTN = false;
            this.sendAns()
            // this.$root.$refs.A.getAgain();
            // this.$root.$refs.A.dupa();
            this.loading = false;
            
          } else {
            this.vote1();
            this.loading = false;
          }
      },
      answerDone() {
        this.loading = true;
       setTimeout(()=>{this.answerDone2();
        }, 500);

      },
        massageForUser(s) {
        this.comFromServ = s;
      },
      sendAns() {
        const token = this.$func.getLoggedToken(); //localStorage.getItem('JWT_TOKEN');
        //console.log(token);
        //console.log("wysylam"+this.myAnswer);
        var that = this;
        axios.post(process.env.VUE_APP_PUBLIC_VOTES+this.VotingID+"/vote/", {
         
          options: this.myAnswer,
        }, {
          headers: {
            'Authorization': `Token ${token}`
          }
        }).then(function() {
          //console.log(response+"poszlo1");
          that.doneVoteSucces = true;
          //console.log(typeof(response.status));
         /* if(((response.status) == 200)||((response.status) == 201)){
            console.log(response.vote[0]);
            that.doneVoteSucces = true;
          } else if (response.status === 400) {
            alert(response.vote[0])
          }else{
            console.log("3 opcja"+response.status);
          }*/
        }).catch(function (error) {
         
          if (error.response) {
            //console.log(typeof(error.status))
            if (error.response.status >= 200) {
             that.failSend = true;

              if (error.response.status == 401)                                       // dopisałem ~Bart
                that.massageForUser(that.$store.state.msg.voteDetail.logoutError);    // dopisałem ~Bart
              else                                                                    // dopisałem ~Bart

             //that.comFromServ = error.response.data.vote[0];
            that.massageForUser(error.response.data.vote[0]);
              //alert("BŁĄD"+error.response.data.vote[0]);
            }
            //console.log(error.response.data);
            //console.log(error.response.status);
            //console.log(error.response.headers);
            //console.log(error.response.data.vote[0]);
          }
        }).then(function(){
          that.$root.$refs.A.getAgain();
        })
      },
      sendFAns2(){

      },
      sendFAns() {
        this.loading3 = true;
        const token = this.$func.getLoggedToken(); //localStorage.getItem('JWT_TOKEN');
        //console.log(token);
         this.closeAlert();
          this.doneVote = true;
          this.activeAns = false;
          this.actAnsBTN = false;
        var that = this;
        axios.post(process.env.VUE_APP_PUBLIC_VOTES+this.VotingID+"/vote/", {
         
          options: this.falseAID,
        }, {
          headers: {
            'Authorization': `Token ${token}`
          }
        })//.then(response => function(response){
          .then(function(){
          //console.log(response);
          that.doneVoteSucces = true;
          /*
          if((response.status === 200)||(response.status === 201)) {
            console.log("POSZLO"+response.vote[0]);
            that.doneVoteSucces = true;
          } else{
          //else if (response.status === 400) {
            alert(response.vote[0]+"PYK")
          }*/
        }).catch(function (error) {
         that.loading3 = false;
          if (error.response) {
            if (error.response.status >= 200) {
             that.failSend = true;

              if (error.response.status == 401)                                       // dopisałem ~Bart
                that.massageForUser(that.$store.state.msg.voteDetail.logoutError);    // dopisałem ~Bart
              else                                                                    // dopisałem ~Bart

             //that.comFromServ = error.response.data.vote[0];
            that.massageForUser(error.response.data.vote[0]);
              //alert("BŁĄD"+error.response.data.vote[0]);
            }
            //console.log(error.response.data);
            //console.log(error.response.status);
            //console.log(error.response.headers);
            //console.log(error.response.data.vote[0]);
          }
        }).then(function(){
          that.$root.$refs.A.getAgain();
        })
      },
      show() {
        //console.log(this.vote)
      },
    
      selectAns(s) {
        // funkcja dla diva oraz labela
        // obsługa samego checkboxa poniżej
        if(event.target == event.currentTarget){

          let divS = document.getElementById(s + "Did");
          let h = document.getElementById(s + "id");
          let v = document.getElementById(s + "id").value;
          
          
          if (h.checked === false) {

            this.myAnswer.push(s);
            this.myAnswertxt.push(v);
            h.checked = true;

            divS.style.backgroundColor = "var(--my_orange)";
          } else {
            let pos = this.myAnswer.indexOf(s);
            h.checked = false;
            this.myAnswer.splice(pos, 1);
            this.myAnswertxt.splice(pos, 1);

            divS.style ='';

          }
        }
      },
      selectAnsBOX(s) {
        // tylko dla samego przycisku input type checkbox
        if(event.target == event.currentTarget){

          let divS = document.getElementById(s + "Did");
          let h = document.getElementById(s + "id");
          let v = document.getElementById(s + "id").value;
          
          // selectAnsBox zanim się wykona, to checkbox zmieni status, dlatego w tym przypadku if === true
          if (h.checked === true) {

            this.myAnswer.push(s);
            this.myAnswertxt.push(v);
            //h.checked = true; // nie potrzebujemy rowniez ustalac wartosci checked, bo juz sie ustawilo

            divS.style.backgroundColor = "var(--my_orange)";
          } else {
            let pos = this.myAnswer.indexOf(s);
            //h.checked = false; // nie potrzebujemy rowniez ustalac wartosci checked, bo juz sie ustawilo
            this.myAnswer.splice(pos, 1);
            this.myAnswertxt.splice(pos, 1);

            divS.style ='';
          }
        }
      },
  }}
</script>
<style scoped>

input[type=checkbox], label{
  cursor: pointer;
}

  h3,
  h4.p10 {
    padding: 10px;
    font-weight: bold;
    line-height: 1, 5;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  input#FVchb{
    width:20px;
    height:20px;
  }
  .flexSPAN{
    display: flex;
    flex-direction: row;
  }
  .innerFS{
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  li.infoItem::before {
  content: '';
  display: inline-block;
  height: 5px;
  width: 5px;
}
button#FVbtn{
  pointer-events: none;
    background-color: gray;
}
  #alert2 {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
.ognH{
  color:var(--my_blue);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom:30px;
  margin-top:20px;
}
.ognH > input{
  margin-right:5px;
}
  span.p10blue1 {
    color: var(--my_blue);
    font-weight: bold;
    font-size: 1.3rem;
  }

  span.p10blue {
    color: var(--my_blue);
    font-weight: bold;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;  
    }

  .robBold {
    font-weight: 1000;
    font-family: Roboto;
  }
  div.infoInner{
    justify-content: center;
    display: flex;
    flex-direction: column;
  }
  div.clockIcon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin-bottom: 5%;
  }
  .headerRob{
    font-family: Roboto;
    font-weight: bold;
  }
  .dDiv {
    display: flex;
    justify-content: center;
  }

  #communicatForUser {
    margin: 5%;
  }

 

  .descText {
    font-family: Roboto;
    font-weight: bold;
  }

  .VoteDetails {
    display: flex;
    justify-content: center;
    padding: 100px;
    flex-direction: column;
    padding: 50px;
    width: 100%;
    font-family: Roboto bold;
  }

  .VoteDetails2 {
    min-height: 300px;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .smallNavbar {
    width: 100%;
    margin-left: 100px;
    font-style: italic;
  }

  .communicat {
    color: green;
    font-size: 1.5rem;
    margin-top: 10px;
    text-align: center;
  }
#comForUser{
  margin-top:5%;
  text-align: center;

}
#comForUserH{
  color:red; 

}
  select {
    margin-right: 5px;
  }

  .answers.focused {
    background-color: var(--my_orange);
  }

  #alert {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 250px;
    width: 450px;
    border: 2px solid black;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
   
    flex-direction: column;
  }

  .answers {
    font-family: Roboto;
    font-weight: bold;
    border-radius: 2px;
    _height: 2rem;
    min-height: 50px;

  }

  .answers input {
    margin-left: 10px;
    margin-right: 5px;

  }

  
  .answersC{
    background-color: white;
  }

  .alertBG {
    width: 100vh;
    height: 100vh;
    background-color: white;
    position: absolute;
    z-index: 10;
  }

  .Alabel {
    font-weight: bold;
  }

  .left {
    width: 60%;
    min-height: 100%;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    /*align-items: center;*/
    margin-top:1%;
    padding-left:6%;
    padding-right: 6%;
  }

  .right {
    width: 40%;
    min-height: 100%;
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .answers {
    margin: 10px;
    font-family: Roboto;
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;

  }

  .h3Header {
    font-size: 1.5rem;
  }

  div .text {
    width: 100%;
    /*margin-left: 20%;*/
  }

  p {
    /* width: 100%; */
    margin-left: 20px;
  }

  button.blueBTN {
    margin: 20px;
    _width:220px;
    background-color: var(--my_blue);
    padding: 15px;
    font-family: "Montserrat";
    color: white;
    font-size: 1.3rem;
    /*margin: auto;*/
    margin: 50px;
  }

   button.blueBTN1 {
    margin: 20px;
    background-color: var(--my_blue);
    padding: 10px;
    font-family: "Montserrat";
    color: white;
    font-size: 1.3rem;
    /*margin: auto;*/
    margin: 50px;
  }

  button.orangeBTN2 {
    margin: 20px;
    background-color: var(--my_orange);
    padding: 10px;
    font-family: "Montserrat";
    color: white;
    font-size: 1.3rem;
    width: 300px;
  }

  button.blueBTN2 {
    /*margin: 20px;*/
    background-color: var(--my_blue);
    padding: 10px;
    font-family: "Montserrat";
    color: white;
    font-size: 1.3rem;
    width: 300px;
  }

  #voteCardMaster {
    margin: 10px;
    margin-top:5%;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    margin-top: 10% ;
  }
  form{
    width:100%;
  }

  .routerlink{
    text-decoration: underline;
    cursor: pointer;
  }

  /*
@media (min-width:1000px)  and (max-width:1030px){
.VoteDetails2{
  height:1000px;
  flex-wrap: wrap;
}
.left{
  height:50%;
}
}*/
@media only screen and (min-width: 768px){
  .answers:hover {
    background-color: var(--my_orange);
  }
}

  @media (max-width: 770px) {
    .VoteDetails2 {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      margin-bottom:0px;
    }
    h3.my_orange{
      font-size: 1.0rem;
    }
      .communicat {
        font-size:1.3rem;
      }
    .rightTxt {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    div.clockIcon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      flex-wrap: wrap;
      margin-bottom: 5%;
    }

    .VoteDetails {
      padding: 5%;
    }

    .left {
      display: flex;
      flex-wrap: wrap;
      border: 0;
      border-bottom: 1px solid #ccc;
      width: 100%;
      margin: 0px;
      display: flex;
      align-content: center;
      padding: 20px;
    }

    .right {
      width: 100%;
      display: flex;
      align-items: center;
      padding: 30px;
      _flex-wrap: wrap;
      justify-content: center;
    }

    div .text {
      margin: 0px;
    }

    button.blueBTN {
      font-size: 0.9rem;
    }

    .smallNavbar {
      margin-left: 0px;
    }

    h4.p10dH {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  h3.h3Header{
    font-size:1.3rem;
  }
    #alert {
      width: 350px;
    }

    button.orangeBTN2 {
      width: 230px;
      font-size: 0.9rem;
    }

    button.blueBTN2 {
      width: 230px;
      font-size: 0.9rem;
    }


   
  }
@media  all and (min-width:1000px) and (max-width:1025px) and (orientation: portrait){
  .VoteDetails2 {
      display: flex;
      flex-wrap: wrap; 
      flex-direction: column;
      justify-content: space-around;
      height:1000px;
    }
    .right{
      width: 100%;
      min-height:300px;
      margin:0;
    }
    .left{
      width:100%;
      min-height:300px;
      border:none;
      border-bottom: 1px solid #ccc;
    }

}
  @media only screen and (max-width: 400px) {

    button.blueBTN2,
    button.orangeBTN2 {
      font-size: 1rem;
      width: 200px;
    }

    #alert {
      min-height: 200px;
      width: 80%;
    }
    .communicat {
        font-size:1.2rem;
      }
      h3.h3Header{
        font-size:1.3rem ;
        text-align: center;
      }
      .right{
        padding:20px;
        padding-top:40px;
      }

    #clockImg{
      height: 70px;
    }
  }

  @media only screen and (min-width: 401px){
    img#clockImg {
      height: 100px;
    }
  }

  @media all and (max-width: 767px) and (orientation: landscape) {
    #alert {
      height: 200px;
      width: 40%;
    }

    button.blueBTN2,
    button.orangeBTN2 {
      font-size: 0.7rem;
      width: 200px;
    }

    .VoteDetails {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
</style>