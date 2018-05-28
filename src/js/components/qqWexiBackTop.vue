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
                <div class="erWeiMa_border" :class="{show:showErWeiMa}">
                   <img class="erWeiMa_icon" src="../../img/u225.png"  alt="">
                   <div class="jangle"></div> 
                </div>
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
        z-index: 1000;
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
            z-index: 1000;
            position: absolute;
            font-size: 0px;
            width:150px;
            height:140px;
            top:50%;
            margin-top:-70px;
            left:-160px;
            cursor: default;
            overflow: hidden;
            .erWeiMa_border{
                // position: relative;
                position: absolute;
                top:0px;
                left:174px;
                transition: all 1s;
                z-index: 1000;
                &.show{
                    left:0px;
                }
                .jangle{
                    position: absolute;
                    border-width:10px 0 10px 10px;
                    border-style:solid;
                    border-color:transparent transparent transparent rgba(41,43,44,1);
                    right: -10px;
                    top:50%;
                    margin-top:-5px;
                }
            }
            .erWeiMa_icon{
                border:10px solid rgba(41,43,44,1);
                border-radius:8px;
                
            }
        }
    }
</style>
