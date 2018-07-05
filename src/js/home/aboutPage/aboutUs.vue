<template>
  <div class="about_us_container">
      <div class="about_banner"></div>
      <div class="content">
          <leftContent></leftContent>
          <div class="content_right">
              <div>
                  <div class="font18 title_text">品牌精神</div>
                  <div class="font16 title_en">BRAND SPIRIT</div>
                  <div class="logo_box">
                      <img style="width:38px;height:34px;" src="../../../img/u3372.png" alt="">
                      <span style="font-size:24px;">租立方</span>
                  </div>
              </div>
              <div class="item item_top">
                  <div class="left">
                        <div class="font16 item_title item_title1">"专业，更专注"</div>
                        <p class="font14 text">租立方是招商局集团（股票代码：00144）旗下家居租赁互联网平台，成立于2015年，于2016年6月正式上线，向公寓、酒店、办公场所等重资产投资企业提供租赁服务。引入招商局战略合作资源，进一步推动租立方在房地产、金融、科技、家居等板块全面布局，仅用一年半时间完成深圳至全国的战略布局，2018年租立方业务扩张至北京、上海、广州、杭州、苏州、南京、重庆、武汉、合肥、厦门、三亚等地。</p>
                        <div class="font16 item_title item_title2">"家居租赁，快速扩张"</div>
                        <p class="text text2">租立方通过家居租赁的方式，致力于解决企业重资产投入痛点，无需一次性投入资金采购家具、家电、机电、弱电系统智能系统等，缓解企业资金链压力，大幅度盘活企业现金流；助跑酒店、公寓等品牌规模化扩张速度，减税增收；产品交付时间前置，快速开业；完善的租后管理，省心更省时。</p>
                  </div>
                  <div class="right font0">
                      <img src="../../../img/u3360.png" alt="">
                  </div>
              </div>
              <div class="item item_bottom">
                  <div class="left font0">
                      <img src="../../../img/u3418.png" alt="">
                  </div>
                  <div class="right">
                      <div class="font14 bottom_title">企业愿景  <span class="line"></span>  让美好生活来得更容易点</div>
                      <div class="font14 bottom_title">品牌精神  <span class="line"></span>  我们只做好一件事</div>
                      <div class="item_text">
                          <div class="item_text_title">我们的初心，应当有温度</div>
                          <p class="item_bottom_text">为了未来的年轻人身心健康，与有价值的美好生活<br />为了付出一生的上一辈能够颐养天年</p>
                      </div>
                      <div class="item_text">
                          <div class="item_text_title">美学无界，质有标准</div>
                          <p class="item_bottom_text">以安全环保的产品作为支撑点，用金融与科技<br>为用户创造高品质的健康生活<br>用极致的服务，创造更优越的体验</p>
                      </div>
                      <div class="item_text item_text2">
                          <div class="item_text_title">如家人般呵护，如管家式极致</div>
                          <p class="item_bottom_text">聆听，知您所需；保障，享受服务；养护，长久陪伴</p>
                      </div>
                      <div class="item_text item_text2">
                          <div class="item_text_title">服务不分国界，服务不分群体</div>
                          <p class="item_bottom_text">从南到北，从全国至全世界<br>我们希望服务更多城市<br>将我们的温度，传递向更多的人</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import banner from '../Components/aboutBanner.vue';
import leftContent from './leftContent.vue';
export default {
  data(){
      return{
          
      }
  },
  mounted(){
    var scrollTop=0;
      var st= setInterval(()=>{
        scrollTop+=10;
        if(scrollTop>=600){
            scrollTop=600;
            clearInterval(st);
        }
        document.body.scrollTop=scrollTop;
       document.documentElement.scrollTop=scrollTop;
    },10)
  },
  components:{
      banner,
      leftContent
  }
}
</script>
<style lang="scss" scoped>
.about_us_container{
  background: #fff;
  padding-bottom: 178px;
}
.about_banner{
    width:100%;
    height: 600px;
    background: url('../../../img/about_us_logo.png') center no-repeat;
    background-size: cover;
}
  .content{
    width:1160px;
    margin:0 auto;
    min-height: 500px;
    display: flex;
    .content_right{
      flex: 1;
      padding-top:120px;
      padding-left: 3px;
      .title_text{
        padding:10px 0 20px 0px;
      }
      .logo_box{
        margin:68px 0px 40px 0px;
      }
      .item{
        display: flex;
        &.item_top{
          border-bottom:1px solid rgba(231,231,231,1);
          padding-bottom: 40px;
          .text{
            color:rgba(102, 102, 102, 1);
            line-height: 32px;
          }
          .item_title{
            margin-bottom: 13px;
          }
          .item_title1{
            font-weight: bold;
          }
          .item_title2{
            padding-top:56px;
            margin-bottom: 28px;
          }
          .right{
            padding-top:21px;
          }
        }
        &.item_bottom{
          padding-top:50px;
          .bottom_title{
            font-weight: bold;
            font-size: 14px;
            padding:2px 0 10px 0px;
            .line{
              display: inline-block;
              width:1px;
              height:12px;
             background:rgba(51,51,51,1); 
            }
          }
          .item_text{
            padding-top:30px;
            &.item_text2{
              padding-top:40px;
            }
          }
          .item_text_title{
            padding-bottom: 10px;
          }
          .item_bottom_text{
            color:rgba(102,102,102,1);
            line-height:23px;
            font-size:12px;
          }
        }
        .left{
          width:400px;
          margin-right:13px;
        }
      }
    }
  }
</style>


