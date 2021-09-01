<template>
  <div class="main_frame">
    <div class="main_frame_text textRoboto login_txt">
      By się zalogować, <br id="main_text_br1" />podaj uczelniany adres email:
    </div>
    <form>
      <input
        type="text"
        required
        placeholder="np. bartlomiej.pietras1@student.up.krakow.pl"
        class="textRoboto"
        id="email"
        pattern="[a-z,A-Z]+[.][a-z,A-Z]+[0-9]*@student.up.krakow.pl"
      />
      <input type="submit" value="Zaloguj się" class="textRoboto login_btn" />
    </form>



    <div id="login_with_password"  @click="login_with_password">
        <div v-if="switch_to_login_with_password == true" class="sk-chase">
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
          <div class="sk-chase-dot"></div>
        </div>
        <div class="login_with_password_link textRoboto" v-else>
          DO<br>USUNIĘCIA
        </div>
      
      </div>

  </div>
</template>

<script>
export default {
  name: "loginPanel",
  components: {},
  data(){
    return {
      loading: false,
      error: false,
      switch_to_login_with_password: false,
    }
  },
  methods: {
    login_with_password(){
      this.switch_to_login_with_password = true;
          this.$router.push('/home');

    }
  },
};
</script>

<style lang="scss" scoped>

.main_frame{
  background-color: white;
  border-style: solid;
  border-color: var(--my_magenda);
  border-radius: 40px;
  text-align: center;
  position: relative; 
  z-index: 4;

}

.login_txt {
  margin-bottom: 30px;
  font-weight: bold;
  color: gray;
}

.main_frame input[type="text"]{
	background: rgba(255,255,255,.1);
	border: 2px solid lightgrey;
	border-radius: 10px;
	margin: 0;
	outline: 0;
	padding: 10px;
	margin-bottom: 30px;
  font-weight:bold;
  color: gray;
    
}

.main_frame input[type="text"]:focus{
	background-color: #e8eeef;
}

.login_btn{
 
    display: inline-block;
    padding: 15px 25px;
    font-weight:bold;
    cursor: pointer;
    text-align: center;
    color: #fff;
    background-color: var(--my_magenda);
    border: none;
    border-radius: 15px;
    box-shadow: 2px 5px 5px #999;
}

.login_btn:hover {background-color: var(--my_magenda_dark);}

.login_btn:active {
  background-color: var(--my_magenda_dark);
  box-shadow: 1px 5px 1px #666;
  transform: translateY(4px);
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: gray;
    opacity: 0.6; /* Firefox */
  }

  .login_with_password_link {
  font-style: italic;
  font-weight: bold;
  color: gray;
  text-decoration: underline;
  cursor: pointer;
}

.login_with_password_link:hover{
  color: black;
}

@media only screen and (min-width: 1300px) {
  .login_btn {
    font-size: 24px;
    width:40%;
    height: 70px;
  }
  .main_frame_text{
      font-size: 30px;
    }
}

@media only screen and (min-width: 860px) and (max-width: 1299px) {
  .login_btn {
    font-size: 20px;
    width: 200px;
    height: 60px;
  }
  .main_frame_text{
      font-size: 24px;
    }

}

@media only screen and (min-width: 860px) {


  .main_frame {
    border-width: 6px;
    padding: 60px;
    margin: auto;
    width: 800px;
  }

  .main_frame input[type="text"] {
    font-size: 20px;
    width: 500px;
  }

  .login_btn {
    margin: 20px 30px 0px;
  }

  #main_text_br1{
    display:none;
  }

  #login_with_password{
      position: absolute;
      right: 40px;
      bottom: 75px;
      margin:15px 15px 0px;
    }
  

}

@media only screen and (max-width: 859px) {
    .main_frame{
        border-width: 3px;
        padding:3vw;
        padding-top:8vw;
        margin: 3%;
        width: 94%;

    }

    .main_frame input[type="text"]{
        font-size: 16px;  
        width: 100%;
    }

    .main_frame .login_btn{
        margin: 10px 30px 30px;
        width: 160px;
        height: 50px;
    }

    #login_with_password{
      margin: 0px 15px 20px;
    }
  }

@media only screen and (max-width: 330px) {
    .main_frame .login_btn{
        margin-left: 0;
        margin-right: 0;
        width: 90%;
        max-width: 160px;
    }
}

</style>
