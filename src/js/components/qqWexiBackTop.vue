<template>
    <div class="tips_container" :class="{positionShow:showBackTop}">
        <div class="erweima">
            <img src="../../img/u225.png" :class="{show:showErWeiMa}" alt="">
        </div>
        <div class="qq">
            <img class="qq_img" src="../../img/u189.png" alt="">
            <div class="text">在线客服</div>
        </div>
        <div class="wexin" @mouseenter="mouseenter" @mouseleave="mouseleave">
            <div class="line"></div>
            <img class="wexin_img" src="../../img/u196.png" alt="">
            <div class="text">关注微信</div>
        </div>
        <div class="move" :class="{show:showBackTop}" @click="toTop">
            <div class="backtop" :class="{show:showBackTop}">
                <div class="line"></div>
                <img class="backtop_img" src="../../img/u207.png" alt="">
                <div class="text backtop_text">返回顶部</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            showBackTop:false,
            showErWeiMa:false,
            scrollTop:0
        }
    },
    methods:{
        scroll(event){
          this.scrollTop=event.target.scrollTop;
          if(this.scrollTop>=600){
              this.showBackTop=true;
          }else{
              this.showBackTop=false;
          }
       },
       mouseenter(){
           this.showErWeiMa=true;
       },
       mouseleave(){
           this.showErWeiMa=false;
       },
       toTop(){
           var el=this.$root.$el;
         var st= setInterval(()=>{
               this.scrollTop-=20;
               if(this.scrollTop<=2){
                   this.scrollTop=0;
                   clearInterval(st);
               }
               el.scrollTop=this.scrollTop;
           },1)
       }
    },
    mounted(){
        AppUtil.addEventListener(this.$root.$el,'scroll',this.scroll);
    }
}
</script>
<style lang="scss" scoped>
    .tips_container{
        position: fixed;
        width:70px;
        right: 17px;
        top:245px;
        background: #fff;
        box-shadow: 0 0 5px #222;
        text-align: center;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.6);
        transition-delay: 1s;
        &.positionShow{
            top:285px;
        }
        .line{
            width:24px;
            height: 2px;
            margin-bottom:10px;
            margin-left:23px;
            background:rgba(103, 102,98,1.0);
        }
        .text{
            line-height: 20px;
            margin-bottom:10px;
        }
        .qq:hover,.wexin:hover,.backtop:hover{
            color: rgba(0, 0, 0, 0.847);
        }
        .move{
            position: relative;
            width:100%;
            background: #fff;
            height:0px;
            overflow: hidden;
            transition: all 1s;
            &.show{
                height:93px;
            }
        }
        .backtop{
            cursor: pointer;
            width:100%;
            position: absolute;
            top:-93px;
            background: #fff;
            transition: top 1s;
            &.show{
                top:0;
            }
        }
        img{
            margin-bottom:10px;
        }
        .qq_img{
            margin-top: 10px;
        }
        .qq_img,.backtop_img{
            width:38px;
            height:38px;
        }
        .wexin_img{
            width:46px;
            height:46px;
        }
        .erweima{
            position: absolute;
            width:90px;
            height: 90px;
            right:0;
            top:-100px;
            overflow: hidden;
            img{
                position: absolute;
                width:90px;
                height: 90px;
                top:100%;
                right: 0;
                transition: all 1s;
                &.show{
                    top:0;
                }
            }
        }
    }
</style>
