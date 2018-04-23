<template>
    <div class="banner">
        <div class="item"  v-for="(item,index) in banners" :key="index" 
                :class="renderBannerClass(item)"  :style="renderStyle(item)">
        </div>
        <div class="banner_button_list">
            <div class="banner_button" v-for="(item,index) in banners" :key="index" 
                :class="{'current_button':buttonIndex==item}" @click="slideChange(item)"></div>
        </div>
    </div>
</template>
<script>
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
            this.timeOut=setTimeout(()=>{
                    this.buttonIndex=this.bannerIndex;
                  },1000)
              }, 3000);
        },
        renderStyle(item){
          let imgSrc = require(`../../../img/home_banner${item}.jpg`);
          return {
            background:`url(${imgSrc}) no-repeat center`
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
        slideChange(item){//点击切换
          clearInterval(this.setIntervalTime);
          clearTimeout(this.timeOut);
          this.bannerIndex=item;
          setTimeout(()=>{
            this.buttonIndex=item;
          },1000)
          this.startChange();
        }
    },
    computed:{
    }
}
</script>
<style lang="scss" scoped>
  .banner{
    margin:0 auto;
    height:550px;
    position: relative;
    .banner_button_list{
      position: absolute;
      left:477px;
      top:436px;
      width:69px;
      height:21px;
      background: rgba(255, 255, 255,0.3);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content:space-evenly;
      .banner_button{
        width:19px;
        height: 19px;
        border-radius: 50%;
        background: rgba(255, 255, 255,0.8);
        cursor: pointer;
        &.current_button{
          background: rgb(255, 217, 52);
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


