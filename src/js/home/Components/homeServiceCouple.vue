<template>
    <div class="home_service_couple">
        <div class="title">
            如果你是我们的服务对象
        </div>
        <div class="home_service_couple_pic">
            <div class="home_service_couple_pic_list">
                <div class="pic1">
                    <img src="../../../img/u48.jpg" alt="">
                </div>
                <div class="pic2">
                    <img src="../../../img/u50.jpg" alt="">
                </div>
                <div class="pic3">
                    <img src="../../../img/u52.jpg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return {
          showPic:false
      }
  },
  methods:{
      scroll(event){
          var scrollTop=event.target.scrollTop;
          var clientHeight=event.target.clientHeight;
          var scrollHeight=event.target.scrollHeight;
          if(scrollTop>=180){
              this.showPic=true;
          }
      }
  },
  mounted(){
      AppUtil.addEventListener(this.$root.$el,'scroll',this.scroll);
  }
}
</script>
<style lang="scss" scoped>
    .home_service_couple{
        .title{
            padding-top:130px;
            padding-bottom: 80px;
            text-align: center;
            font-size: 33px;
            font-weight: 600;
        }
        .home_service_couple_pic{
            background:#eee;
        }
        .home_service_couple_pic_list,.title{
            width:1200px;
            margin:0 auto;
        }
        .home_service_couple_pic_list{
            height:100%; 
            text-align: center;
            font-size:0px;
            img{
                width:654px;
            }
           .pic1 img{
                height:232px;
            }
            .pic2 img{
                height:260px;
            }  
            .pic2 img{
                height:262px;
            }       
        }
    }
</style>

