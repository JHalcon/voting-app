<template>
  <div class="main_page_images">
        <img src="../assets/images/orange.svg" alt="" class="orange_img bottom_0">
        <img src="../assets/images/orange2.svg"  alt="" class="orange2_img bottom_0">
        <img src="../assets/images/blue.svg" alt="" class="blue_img bottom_0">
        <img src="../assets/images/3students_1.svg" alt="" class="students_1_img bottom_0">
        <img src="../assets/images/3students_2.svg" alt="" class="students_2_img bottom_0">
        <img src="../assets/images/studentlaptop.svg" alt="" class="studentlaptop_img bottom_1">
        <img src="../assets/images/studentlaptop2.svg" alt="" class="studentlaptop2_img bottom_1">
  </div>
</template>

<script>
export default {
  name: "MainPageImages",
  components: {},
};
</script>
<style lang="scss" scoped>

.main_page_images .bottom_0{
    bottom: 0rem;
}
.main_page_images .bottom_1{
    bottom: 0rem;
}

.main_page_images{
    display: none;
}

@media only screen and (orientation: landscape) and (min-height: 600px) and (max-aspect-ratio: 23/9){ //(min-width: 860px) and (orientation: landscape) {
    .main_page_images{
        display: block;
    }

    .orange2_img{
        display: none;
    }
    .students_2_img{
        display: none;
    }
    .studentlaptop2_img{
        display: none;
    }

    .blue_img{
        position: absolute;
        width: 45%;
        z-index: 2;
    }
    .orange_img{
        position: absolute;
        width: 60%;
        _height: 50%;
        right: 0px;
        z-index: 1;
    }
    .students_1_img{
        position: absolute;
        width: 30%;
        z-index: 2;
    }
    .studentlaptop_img{
        position: absolute;
        width: 25%;
        //max-height: 48%;



        right: 0px;
        //bottom: -2px;
        transform: scaleX(-1);

        z-index: 1;
    }

    img{
        _max-height: 60vh;
    }

    

}
@media only screen and (orientation: portrait){//(max-width: 859px) {
    .main_page_images{
        display: block;
    }
    .blue_img{
        display: none;
    }
    .orange_img{
        display: none;
    }
    .students_1_img{
        display: none;
    }
    .studentlaptop_img{
        display: none;
    }

    .orange2_img{
        position: absolute;
        width: 105%;
        
        left: 0px;
        z-index: 1;
  

    }

    .students_2_img{
        position: absolute;
        width: 55%;
        right: 0px;

        z-index: 2;
    }
    .studentlaptop2_img{
        position: absolute;
        width: 60%;
        //bottom: -2px;
        left: -40px;

        z-index: 1;
    }


}

</style>
