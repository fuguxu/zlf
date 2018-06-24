<template>
  <div class="team_container">
      <div class="about_banner"></div>
      <div class="content_container">
          <leftContent></leftContent>
          <div class="content_right">
                <div class="font18 title_text">团队荣誉</div>
                <div class="font16 title_en">TEAM HONOR</div>
                <div class="font0" style="margin-bottom:20px;">
                    <img src="../../../img/lbs_frame.png" alt="">
                </div>
                <div class="font0">
                    <img src="../../../img/hlf_frame.png" alt="">
                </div>
                <div class="font18 title_text">荣获奖牌</div>
                <div class="font16 title_en">WON THE MEDAL</div>
                <div class="font0" style="margin-bottom:60px;">
                    <img src="../../../img/zs_01.png" alt="">
                </div>
                <div class="font0">
                    <img src="../../../img/zs_02.png" alt="">
                </div>
          </div>
      </div>
  </div>
</template>
<script>
import banner from '../Components/aboutBanner.vue';
import leftContent from './leftContent.vue';
export default {
  data(){
      return{
          
      }
  },
  created(){
      var scrollTop=0;
      var st= setInterval(()=>{
        scrollTop+=10;
        if(scrollTop>=600){
            scrollTop=600;
            clearInterval(st);
        }
        document.body.scrollTop=scrollTop;
       document.documentElement.scrollTop=scrollTop;
    },10)
      
  },
  components:{
      banner,
      leftContent
  }
}
</script>
<style lang="scss" scoped>
.team_container{
  background: #fff;
  padding-bottom: 140px;
}
.about_banner{
    width:100%;
    height: 600px;
    background: url('../../../img/about_us_team.png') center no-repeat;
    background-size: cover;
}
    .content_container{
      width:1160px;
      margin:0 auto;
      box-sizing: border-box;
      display: flex;
      .content_right{
        flex: 1;
      }
      .title_text{
          padding-top:132px;
          padding-bottom: 18px;
      }
      .title_en{
          font-family:'Adobe Heiti Std R';
          color:rgba(0,0,0,1);
          padding-bottom: 45px;
      }
    }
</style>

