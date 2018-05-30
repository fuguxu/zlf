<template>
  <div class="coorperation_detail">
    <div class="head" :style="{'background-size':'cover',background:`url(${data.bannerUrl}) center no-repeat`}">
        <div class="head_box">
            <div class="name">{{data.name}}</div>
            <div class="decs font30">{{data.desc}}</div>
            <div class="info_box">
                <ul class="info">
                  <li class="nu">{{data.rentNumber}}</li>
                  <li class="it">租赁总额</li>
                </ul>
                <ul class="info">
                  <li class="nu">{{data.roomNumber}}</li>
                  <li class="it">{{data.belong=='company'?'场所面积':'房间数'}}</li>
                </ul>
                <ul class="info">
                  <li class="nu">{{data.productStyle}}</li>
                  <li class="it">产品风格</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="content_box">
        <div class="content">
            <div class="img_box">
                <img v-if="activeIndex==index" v-for="(item,index) in data.children" :key="index" :src="item.url" alt="">
            </div>
            <div class="text_box">
                <div class="item">
                  <div class="title">
                    <span class="line"></span>
                    <span>项目背景</span>
                    <span class="line"></span>
                    </div>
                  <p class="text">{{data.itemBackground}}</p>
                </div>
                <div class="item">
                  <div class="title">
                      <span class="line"></span>
                      <span>项目概括</span>
                      <span class="line"></span>
                    </div>
                  <p class="text">{{data.itemAbout}}</p>
                </div>
                <div class="item">
                  <div class="title">
                     <span class="line"></span>
                      <span>项目类型</span>
                      <span class="line"></span>
                    </div>
                  <p class="text">{{data.type}}</p>
                </div>
                <div class="item">
                  <div class="title">
                    <span class="line"></span>
                      <span>关键字</span>
                      <span class="line"></span>
                    </div>
                  <p class="text">{{data.keyWord}}</p>
                </div>
                <div class="item">
                  <div class="title">
                      <span class="line"></span>
                      <span>项目所在城市</span>
                      <span class="line"></span>
                    </div>
                  <p class="text">{{data.area}}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import filterCoorperation from './coorperationData';
export default {
  data(){
      return{
          data:{},
          activeIndex:0,
          headStyle:{}
      }
  },
  mounted(){
    this.data=filterCoorperation('order',this.$route.query.id)[0];
    // this.headStyle={
    //   background:`url(${this.data.bannerUrl}) center no-repeat`,
    //   backgroundSize:'cover'
    // }
    setInterval(()=>{
        if(this.activeIndex==this.data.children.length-1){
          this.activeIndex=0;
        }else{
          this.activeIndex++;
        }
        
    },2000)
  }
}
</script>
<style lang="scss" scoped>
  .coorperation_detail{
    width:100%;
    padding-bottom:146px;
    .head{
      width:100%;
      height:600px;
      .head_box{
        width:1200px;
        margin:0 auto;
        text-align: center;
        color:#fff;
        .name{
            padding-top:132px;
            padding-bottom: 32px;
            font-size: 50px;
        }
        .decs{
            padding-bottom: 27px;
        }
        .info_box{
          display: flex;
          width:850px;
          box-sizing: border-box;
          padding:0 100px;
          border-top:1px solid #fff;
          margin:0 auto;
          .info{
            flex: 1;
            display: flex;
            flex-flow: column;
            .nu{
              font-size: 18px;
              margin-top:62px;
              margin-bottom: 22px;
            }
            .it{
              font-size:16px;
            }
          }
        }
      }
    }
    .content_box{
      width:1100px;
      margin:0 auto;
      .content{
        width:100%;
        box-sizing:border-box;
        background:#fff;
        border-radius: 5px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        margin-top:-82px;
        text-align: center;
        padding-top:129px;
        .img_box{
          img{
            width:618px;
            height:343px;
          }
        }
        .text_box{
          // width:880px;
          padding-bottom:35px;
          .item{
            width:480px;
            margin:0 auto;
          }
          .title{
            // font-family: 'SimHei';
            display: flex;
            font-size: 16px;
            color:rgba(255,166,50,1);
            margin-top:56px;
            margin-bottom:35px;
             justify-content: center;
              align-items: center;
              span:nth-child(2){
                margin:0 32px;
              }
            .line{
              width:64px;
              height: 1px;
              background:rgba(255,166,50,0.3);
             
            }
          }
          .text{
            word-wrap: break-word;
            // font-family: 'SimSun';
            font-size: 14px;
            // color: rgba(51, 51, 51, 0.9);
            line-height: 36px;
          }
        }
      }
    }
  }
</style>

