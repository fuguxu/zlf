<template>
    <div class="tips_container" :class="{positionShow:showBackTop}">
        <div class="toTop">
            <img class="top_icon" src="../../img/arrow_up.png" @click="toTop" :class="{show:showBackTop}" alt="">
        </div>
        <div class="qq square">
            <div class="text">在线<br />客服</div>
        </div>
        <div class="wexin square">
            <div class="text" @mouseenter="mouseenter" @mouseleave="mouseleave">关注<br />微信</div>
            <div class="erWeiMa_box">
                <img class="erWeiMa_icon" src="../../img/u225.png" :class="{show:showErWeiMa}" alt="">
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
          this.scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
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
           var st= setInterval(()=>{
               this.scrollTop=9/10*this.scrollTop;
               if(this.scrollTop<=5){
                   this.scrollTop=0;
                   clearInterval(st);
               }
               document.documentElement.scrollTop=document.body.scrollTop=this.scrollTop;
           },10)
       }
    },
    mounted(){
        AppUtil.addEventListener(window,'scroll',this.scroll);
    }
}
</script>
<style lang="scss" scoped>
    .tips_container{
        position: fixed;
        width:70px;
        right: 0px;
        bottom:70px;
        text-align: center;
        font-size: 18px;
        .toTop{
            width:70px;
            height: 70px;
            position: relative;
            font-size: 0px;
            margin-bottom: 10px;
            overflow: hidden;
            .top_icon{
                width:70px;
                height:70px;
                position: absolute;
                left: 0px;
                top: 90px;
                cursor: pointer;
                transition: all 1s;
                &.show{
                    top:0px;
                }
            }
        }
        .square{
            width:70px;
            height: 70px;
            border-radius:8px;
            color:#fff;
            cursor: pointer;
            position: relative;
            .text{
                width:100%;
                height:100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &.qq{
                background:rgba(255,166,50,1);
                margin-bottom: 10px;
            }
            &.wexin{
                background:rgba(41,43,44,1);
            }
        }
        .erWeiMa_box{
            position: absolute;
            font-size: 0px;
            width:144px;
            height:144px;
            top:50%;
            margin-top:-72px;
            left:-150px;
            cursor: default;
            overflow: hidden;
            .erWeiMa_icon{
                width:144px;
                height:144px;
                position: absolute;
                top:0px;
                left:144px;
                transition: all 1s;
                &.show{
                    left:0px;
                }
            }
        }
    }
</style>
