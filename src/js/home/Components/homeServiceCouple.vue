<template>
    <div class="home_service_couple">
        <div class="title">
            如果您是我们的服务对象
        </div>
        <div class="home_service_couple_pic">
            <div class="home_service_couple_pic_list">
                <div class="pic1 pic">
                    <img @mouseenter="mouseEnter" @mouseleave="mouseLeave" src="../../../img/flats_pic.png" alt="">
                </div>
                <div class="pic2 pic">
                    <img  @mouseenter="mouseEnter" @mouseleave="mouseLeave" src="../../../img/hotel_pic.png" alt="">
                </div>
                <div class="pic3 pic">
                    <img  @mouseenter="mouseEnter" @mouseleave="mouseLeave" src="../../../img/pension_pic.png" alt="">
                </div>
                <div class="pic4 pic">
                    <img  @mouseenter="mouseEnter" @mouseleave="mouseLeave" src="../../../img/office_pic.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return {
      }
  },
  methods:{
      mouseEnter(ev){
          ev.target.style.transform='scale(1.01)';
          setTimeout(()=>{
              ev.target.style.transform='scale(1.005)';
          },100)
          setTimeout(()=>{
              ev.target.style.transform='scale(1.01)';
          },200)
      },
      mouseLeave(ev){
          ev.target.style.transform='scale(1)';
          setTimeout(()=>{
              ev.target.style.transform='scale(1.005)';
          },100)
          setTimeout(()=>{
              ev.target.style.transform='scale(1)';
          },200)
      }
  },
  mounted(){
    
  }
}
</script>
<style lang="scss" scoped>
    .home_service_couple{
        background: rgba(244, 244, 244, 1);
        padding-bottom: 100px;
        .title{
            padding-top:95px;
            padding-bottom: 70px;
            text-align: center;
            font-size: 30px;
            color:rgba(51, 51, 51, 1);
        }
        .home_service_couple_pic_list,.title{
            width:1200px;
            margin:0 auto;
        }
        .home_service_couple_pic_list{
            height:100%; 
            text-align: center;
            font-size:0px;
            .pic{
                margin-bottom: 20px;
            }      
        }
    }
</style>

