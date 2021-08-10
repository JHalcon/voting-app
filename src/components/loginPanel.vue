<template>
  <div id="main_frame">
                        <div class="main_frame_text textRoboto login_txt">
                            By się zalogować, <br id="main_text_br1">podaj uczelniany adres email:
                        
                        </div>
                        <form>
                            <input type="text" required placeholder="np. bartlomiej.pietras1@student.up.krakow.pl" class="textRoboto" id="email"
                            pattern="[a-z,A-Z]+[.][a-z,A-Z]+[0-9]*@student.up.krakow.pl">
                            <input type="submit" value="Zaloguj się" class="textRoboto login_btn">

                        </form>
                    </div>
</template>

<script>


export default {
  name: "loginPanel",
  components: {
  },
};
</script>
