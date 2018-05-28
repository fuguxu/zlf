<template>
    <div class="home_know">
        <div class="rate">
            <div class="title">
                精准把控交货周期
            </div>
            <div class="home_know_pic_list">
                <div class="sub_title">交付流程全程把控</div>
                <ul class="img_list">
                    <li class="item" v-for="(item,index) in imgData" :key="index">
                        <img :src="item.url" alt="">
                        <p class="text">{{item.text}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="safe">
            <div class="sub_title">安全效率运输安装</div>
            <div class="safe_img">
                <img src="../../../img/city_icon.png" alt="">
                <img src="../../../img/county_icon.png" alt="">
                <img src="../../../img/global_icon.png" alt="">
            </div>
        </div>
        <div class="banner1"></div>
        <div class="banner2"></div>
    </div>
</template>
<script>
export default {
  data(){
      return {
          showPic:false,
          imgData:[
              {
                  url:require('../../../img/match_icon.png'),
                  text:'供应商匹配'
              },
              {
                  url:require('../../../img/model_icon.png'),
                  text:'样板确认'
              },
              {
                  url:require('../../../img/schedule_icon.png'),
                  text:'生产进度'
              },
              {
                  url:require('../../../img/sampl_icon.png'),
                  text:'出货抽检'
              },
              {
                  url:require('../../../img/safety_icon.png'),
                  text:'安装监督'
              },
              {
                  url:require('../../../img/deliver_icon.png'),
                  text:'验收交付'
              }
          ]
      }
  },
  methods:{
      scroll(event){
          var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
      }
  },
  mounted(){
      AppUtil.addEventListener(window,'scroll',this.scroll);
  }
}
</script>
<style lang="scss" scoped>
    .home_know{
        text-align: center;
        .sub_title{
            color:rgba(136, 136, 136, 1);
            font-size:18px;
            padding-bottom: 52px;
        }
        .rate{
            background: #fff;
            padding-bottom: 120px;
        }
        .safe{
            background: rgba(244, 244, 244, 1);
            padding-top:100px;
            padding-bottom: 114px;
            .safe_img{
                width:1200px;
                margin:0 auto;
                display: flex;
                justify-content: space-around;
            }
        }
        .home_know_pic_list,.title{
            width:1200px;
            margin:0 auto;
        }
        .img_list{
            display: flex;
            justify-content: space-around;
            .text{
                color:rgba(51, 51, 51, 1);
                font-size:14px;
                padding-top:32px;
            }
        }
        .title{
            padding-top:95px;
            padding-bottom: 48px;
            font-size: 30px;
            color:rgba(51, 51, 51, 1);
        }
        .banner1{
            height:550px;
            background: url('../../../img/sale_service.png') center no-repeat;
            background-size: cover;
        }
        .banner2{
            height:484px;
            background: url('../../../img/one_one.png') center no-repeat;
            background-size: cover;
        }
    }
</style>

