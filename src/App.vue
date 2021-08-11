<template>
  <div id="app">
   
      
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
////

::after, ::before {
    box-sizing: border-box;
}
*{
  margin: 0;
	padding: 0;
  border: none;
  box-sizing: border-box;
  

  font-weight: 400;
  line-height: 1.5;

}
  
body, html {
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	overflow-x: hidden;
	scroll-behavior:smooth;
  
}

#app{
  width:100%;
  height:100%; //ej rozjeżdza mi się main jak tu dam min-height
}
.scroll-container {
	width: 100%;
	height: 100%;
	position: relative;
	margin: 0;
	padding: 0;
}

.scroll-container section {
	width: 100%;
	height: 100%;
}

/////
:root {
    --my_magenda: #D03372;
    --my_blue: #2700B6;
    --my_orange: #F7B252;
    --my_magenda_light: #faeaf1;
    --my_magenda_dark: #a62659;
    --my_orange_light: #fef4e7;
    --my_blue_light: #ebe6ff; 
    --my_blue_light2: #5f33ff; 
    --my_blue_dark: #160066;

}
.my_blue{
    color: var(--my_blue);
}
.my_orange{
    color: var(--my_orange);
}
.my_magenda{
    color: var(--my_magenda);
}

.textMontserrat{
    font-family: "Montserrat";
}
.textRoboto{
    font-family: "Roboto", sans-serif;
}
hr.solid {
    border-top: 2px solid lightgrey;
  }


</style>
