<template>
  <div class="coorperation_detail">
    <div class="head">
        <div class="head_box">
            <div class="name">{{data.name}}</div>
            <div class="decs">{{data.desc}}</div>
            <div class="info_box">
                <ul class="info">
                  <li class="nu">{{data.rentNumber}}</li>
                  <li class="it">租赁额</li>
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
                  <div class="title">项目背景</div>
                  <p class="text">{{data.itemBackground}}</p>
                </div>
                <div class="item">
                  <div class="title">项目概括</div>
                  <p class="text">{{data.itemAbout}}</p>
                </div>
                <div class="item">
                  <div class="title">项目类型</div>
                  <p class="text">·{{data.type}}</p>
                </div>
                <div class="item">
                  <div class="title">关键字</div>
                  <p class="text">·{{data.keyWord}}</p>
                </div>
                <div class="item">
                  <div class="title">项目所在城市</div>
                  <p class="text">·{{data.area}}</p>
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
          activeIndex:0
      }
  },
  mounted(){
    this.data=filterCoorperation('order',this.$route.query.id)[0];
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
    background:rgb(250,250,250);
    padding-bottom:40px;
    .head{
      width:100%;
      height:481px;
      background:rgb(242,242,242);
      .head_box{
        width:1200px;
        margin:0 auto;
        text-align: center;
        .name{
            padding-top:86px;
            padding-bottom: 10px;
            font-family: 'SimSun';
            font-size: 48px;
            color: rgba(81, 81, 81, 0.95);
        }
        .decs{
            font-family: 'SimSun';
            font-size: 24px;
            color: rgba(107, 107, 107, 0.92);
            padding-bottom: 40px;
        }
        .info_box{
          display: flex;
          width:640px;
          border-top:1px solid rgba(107, 107, 107,0.45);
          margin:0 auto;
          .info{
            flex: 1;
            display: flex;
            flex-flow: column;
            .nu{
              color: rgba(81, 81, 81, 0.95);
              font-size: 16px;
              margin-top:42px;
              margin-bottom: 10px;
            }
            .it{
              font-size:15px;
              font-family: 'SimSun';
              color: rgb(181, 180, 179);
            }
          }
        }
      }
    }
    .content_box{
      width:1200px;
      margin:0 auto;
      .content{
        width:1123px;
        box-sizing:border-box;
        margin:0 auto;
        background:#fff;
        margin-top:-60px;
        padding-left:120px;
        padding-top:40px;
        .img_box{
          width:880px;
          height:473px;
          img{
            width:880px;
            height:473px;
          }
        }
        .text_box{
          width:880px;
          padding-bottom:35px;
          .title{
            font-family: 'SimHei';
            font-size: 22px;
            color: #FFD800;
            margin-top:56px;
            margin-bottom:22px;
          }
          .text{
            word-wrap: break-word;
            font-family: 'SimSun';
            font-size: 17px;
            color: rgba(51, 51, 51, 0.9);
            line-height: 30px;
          }
        }
      }
    }
  }
</style>

