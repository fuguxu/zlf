<template>
  <div class="about_us_container">
      <banner>
          <div class="slot">
              <div class="title">关于我们</div>
              <div class="desc">我们的初心有温度，希望将我们的温度，传递向更多的人</div>
          </div>
      </banner>
      <div class="content">
          <div class="content_detail">
              <div class="content_top">
                  <div class="content_left">
                      <div class="title">租立方</div>
                      <div class="sub">“专业，更专注”</div>
                      <div class="sub_text">租立方是招商局集团（股票代码：00144）旗下家居融资租赁互联网平台，成立于2015年，于2016年6月正式上线，向公寓、酒店、办公场所等重资产投资企业提供供应链金融服务。引入招商局战略合作资源，进一步推动租立方在房地产、金融、科技、家居等板块全面布局，仅用一年半时间完成以深圳至全国的战略布局，2018年租立方业务扩张至北京、上海、广州、杭州、苏州、南京、重庆、武汉、合肥、厦门、三亚等地。</div>
                      <div class="sub">“金融租赁，快速扩张”</div>
                      <div class="sub_text">租立方通过融资租赁的方式，致力于解决企业重资产投入痛点，无需一次性投入资金采购家具、家电、机电、弱电系统、智能系统等，缓解企业资金链压力，大幅度盘活企业现金流；助跑酒店、公寓等品牌规模化扩张速度，减税增收；产品交付时间前置，快速开业；完善的租后管理，省心更省时。</div>
                      <img class="logo" src="../../../img/u3372.png" alt="">
                  </div>
                  <div class="content_right">
                      <img class="content_img" src="../../../img/u3360.jpg" alt="">
                  </div>
              </div>
              <div class="content_bottom">
                  <div class="content_left">
                      <img class="content_img" src="../../../img/u3418.jpg" alt="">
                  </div>
                  <div class="content_right">
                      <img class="logo" src="../../../img/u3372.png" alt="">
                      <div class="sub">我们的初心 | 应当有温度</div>
                      <div class="sub_text">为了未来的年轻人身心健康，与有价值的美好生活</div>
                      <div class="sub_text">为了付出一生的上一辈能够颐养天年</div>
                      <div class="sub">美学无界 | 质有标准</div>
                      <div class="sub_text">以安全环保的产品作为支撑点，用金融与科技</div>
                      <div class="sub_text">为用户创造高品质的健康生活</div>
                      <div class="sub_text">用极致的服务，创造更优越的体验</div>
                      <div class="sub">如家人般呵护 | 如管家式极致</div>
                      <div class="sub_text">聆听，知您所需；保障，享受服务；养护，长久陪伴</div>
                      <div class="sub">服务不分国界 | 服务不分群体</div>
                      <div class="sub_text">从南到北，从全国至全世界</div>
                      <div class="sub_text">我们希望服务更多城市</div>
                      <div class="sub_text">将我们的温度，传递向更多的人</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import banner from '../Components/aboutBanner.vue';
export default {
  data(){
      return{
          
      }
  },
  components:{
      banner
  }
}
</script>
<style lang="scss" scoped>
  .slot{
    text-align: center;
    .title{
        font-family: 'SimHei';
        font-size: 40px;
        color: #FFFFFF;
        padding-top: 168px;
        padding-bottom: 10px;
    }
    .desc{
        font-family: 'SimSun';
        font-size: 18px;
        color: rgba(255, 255, 255, 0.95);
    }
  }
  .content,.slot{
    width:1200px;
    margin:0 auto;
  }
  .content{
    padding: 0 20px 80px;
    box-sizing: border-box;
    margin-top:-145px;
    
  }
  .content_detail{
    box-shadow: 0 0 5px rgba(0,0,0,0.5);
    background: #fff;
  }
  .content_top,.content_bottom{
    display: flex;
    text-align: center;
  }
  .content_top{
    .content_left{
      padding:0 35px;
      position: relative;
    }
    .title{
      font-size: 55px;
      color: rgba(0, 0, 0, 0.8);
      padding-top:90px;
    }
    .sub{
      font-family: 'SimHei';
      font-size: 14px;
      color: #000000;
      padding:30px 0px;
    }
    .sub_text{
      font-family:'SimHei';
      font-size: 15px;
      color: rgba(0, 0, 0, 0.65);
      text-align: left;
      line-height: 24px;
    }
    .logo{
      width:57px;
      height:30px;
      position: absolute;
      right: 25px;
      bottom: 25px;
    }
    .content_right{
      font-size:0px;
    }
    .content_img{
      width:580px;
      height:672px;
    }
  }
  .content_bottom{
    .content_left{
      font-size:0px;
    }
    .content_img{
      width:580px;
      height:721px;
    }
    .content_right{
      flex: 1;
      padding:20px 35px 0;
      position: relative;
    }
    .sub{
      font-family: 'SimHei';
      font-size: 20px;
      color: rgba(0, 0, 0, 0.8);
      padding-bottom: 22px;
      padding-top:50px;
    }
    .sub_text{
      font-family: 'SimHei';
      font-size: 15px;
      color: rgba(0, 0, 0, 0.8);
      padding-bottom: 10px;
    }
    .logo{
      width:57px;
      height:30px;
      position: absolute;
      top: 25px;
      left: 25px;
    }
  }
</style>


