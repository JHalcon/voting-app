<template>
    <div id="footer">
        <div id="footer_hr"></div>
        <footer>
            <a href="https://samorzad.up.krakow.pl">Samorząd Studentów</a> 
            · 
            <a href="https://skni.up.krakow.pl">Studenckie Koło Naukowe Informatyków</a>
            · 
            <a href="https://www.up.krakow.pl">Uniwersytet Pedagogiczny im. KEN w Krakowie</a>
            · 2021
        </footer>
    </div>
</template>

<script>
export default {
  name: "Footer",
  components: {
  },
};
</script>
<style lang="scss">
#footer{
    min-height:70px;
    position:absolute;
	bottom:0;
    width: 100%;
    //////////
    padding: 15px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    color: gray;
}
footer{
    //width: 95%;
    //margin: auto;
    padding: 10px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    font-weight:bold;
    color: gray;
    //min-height:10vh;
}

footer a{
    color: gray;
    font-weight:bold;
    text-decoration: inherit;
}
footer a:hover{
    color: var(--my_magenda);
    text-decoration: underline;
}
#footer_hr{
    height: 1px;
    background-color: #ccc;
    border: none;
    width: 100%;
    margin: auto;
}
@media only screen and (min-width: 1400px){
    footer, footer a{
        font-size: 20px;
    }
}

</style>
