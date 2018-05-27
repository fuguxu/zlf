<template>
    <div class="banner">
        <div class="item"  v-for="(item,index) in banners" :key="index" 
                :class="renderBannerClass(item)"  :style="renderStyle(item)">
        </div>
        <div class="content_box">
            <div class="banner_button_list">
                <div class="banner_button" v-for="(item,index) in banners" :key="index" 
                    :class="{'current_button':buttonIndex==item}" @click="slideChange(item)"></div>
            </div>
            <login ref="login" @stopBannerSlide="stopBannerSlide" @startBannerSlide="startBannerSlide"></login>
        </div>
    </div>
</template>
<script>
import login  from  './login.vue';
export default {
   data(){
     return {
            bannerIndex: 1,
            buttonIndex:1,
            banners:[1,2],
            setIntervalTime:null,
            timeOut:null
        }
   },
    mounted () {
        this.startChange();
    },
    methods: {
        startChange () {
           this.setIntervalTime=setInterval( ()=> {
              if(this.bannerIndex==this.banners.length){
                  this.bannerIndex=1
              }else{
                this.bannerIndex++;
              }
            // this.timeOut=setTimeout(()=>{
                    this.buttonIndex=this.bannerIndex;
                  // },0)
              }, 3000);
        },
        renderStyle(item){
          let imgSrc = require(`../../../img/banner_${item}.png`);
          return {
            background:`url(${imgSrc}) no-repeat center`,
            'background-size': 'cover',
          }
        },
        renderBannerClass(item){
          let bannberObj={};
          let banner='banner'+item;
          bannberObj[banner]=true;
          return {
            'current_item':item==this.bannerIndex,
            ...bannberObj
          }
        },
        clearChange(index){
            clearInterval(this.setIntervalTime);
            clearTimeout(this.timeOut);
            this.bannerIndex=index;
            // setTimeout(()=>{
              this.buttonIndex=index;
            // },0)
        },
        slideChange(item){//点击切换
          this.clearChange(item);
          this.startChange();
          this.$refs.login.changeRoleByParent(item);
        },
        stopBannerSlide(index){//切换登录框时 背景图片不轮播
          this.clearChange(index);
        },
        startBannerSlide(index){
          this.startChange();
        }
    },
    components:{
      login
    }
}
</script>
<style lang="scss" scoped>
  .banner{
    width:100%;
    height:600px;
    position: relative;
    .content_box{
      width:1200px;
      margin:0 auto;
      height:100%;
      position: absolute;
      left:50%;
      margin-left:-600px;
    }
    .banner_button_list{
      position: absolute;
      left:50%;
      margin-left:-24px;
      bottom:24px;
      width:48px;
      height:21px;
      background: rgba(255, 255, 255,0.3);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content:space-around;
      .banner_button{
        width:12px;
        height: 12px;
        border-radius: 50%;
        background: rgba(255, 255, 255,0.8);
        cursor: pointer;
        &.current_button{
          background: rgba(255, 166, 50, 1)
        }
      }
    }
    .item{
      height:100%;
      width: 100%;
      position: absolute;
      opacity: 0;
      transition: all 1s;
    }
    .current_item{
      opacity: 1;
    }
  }
</style>


