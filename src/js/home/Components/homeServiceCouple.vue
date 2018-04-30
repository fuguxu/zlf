<template>
    <div class="home_service_couple">
        <div class="title">
            如果你是我们的服务对象
        </div>
        <div class="home_service_couple_pic" ref="color">
            <div class="home_service_couple_pic_list">
                <div class="pic1">
                    <img @mouseenter="mouseEnter" @mouseleave="mouseLeave" src="../../../img/u46.png" alt="">
                </div>
                <div class="pic2">
                    <img  @mouseenter="mouseEnter" @mouseleave="mouseLeave" src="../../../img/u44.png" alt="">
                </div>
                <div class="pic3">
                    <img  @mouseenter="mouseEnter" @mouseleave="mouseLeave" src="../../../img/u48.png" alt="">
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
      scroll(event){
          var scrollTop=event.target.scrollTop;
          var start=2926;
          var end =2926+864;
          var el=this.$refs.color;
          if(el){
            if(scrollTop<start){
                this.$refs.color.style.background='';
            }else if(scrollTop==start){
                this.$refs.color.style.background='rgba(81,81,81,0.1)';
            }else if(scrollTop>start&&scrollTop<end){
                var opc= (0.4-0.1)/(end-start)*(scrollTop-start)
                this.$refs.color.style.background=`rgba(81,81,81,${opc})`;
            }else if(scrollTop>=end){
                this.$refs.color.style.background='rgba(81,81,81,0.4)';
            }
          }
      },
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
        }
        .home_service_couple_pic{
            // background:#eee;
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
                width:650px;
                height:282px;
                // transition: all 0.5s;
                &:hover{
                    // transform: scale(1.01)
                }
            }
        //    .pic1 img{
        //         height:232px;
        //     }
        //     .pic2 img{
        //         height:260px;
        //     }  
        //     .pic2 img{
        //         height:262px;
        //     }       
        }
    }
</style>

