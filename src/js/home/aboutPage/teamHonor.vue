<template>
  <div class="team_container">
      <banner>
          <div class="slot">租立方 | HONOR</div>
      </banner>
      <div class="content_container">
          <div class="content_team">
              <div class="team_item">
                <div class="img_box">
                  <img src="../../../img/u3533.png" alt="">
                  <div class="img_text_box">
                    <div class="img_text">
                      <div>
                        <p class="name">罗森柏</p>
                        <p class="desc">创始人兼CEO</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text_box">
                    <p class="content_text">曾创立“尼威斯”钢木家具并出任CEO，为七斗星设计研发家具产品，后被如家以3.4亿收购；曾与新加坡MUNKII设计公司（曾得过德国红点设计Jaren）联合为国内原创设计公司ACF设计产品；有13年家居行业经验。</p>
                </div>
              </div>
              <div class="team_item">
                <div class="img_box">
                  <img src="../../../img/u3548.png" alt="">
                  <div class="img_text_box">
                    <div class="img_text">
                      <div>
                        <p class="name">洪来发</p>
                        <p class="desc">联合创始人兼CMO</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text_box">
                    <p class="content_text">曾创立“尼威斯”钢木家具并出任CEO，为七斗星设计研发家具产品，后被如家以3.4亿收购；曾与新加坡MUNKII设计公司（曾得过德国红点设计Jaren）联合为国内原创设计公司ACF设计产品；有13年家居行业经验。</p>
                </div>
              </div>
              <div class="team_item">
                <div class="img_box">
                  <img src="../../../img/u3563.png" alt="">
                  <div class="img_text_box">
                    <div class="img_text">
                      <div>
                        <p class="name">方行</p>
                        <p class="desc">首席风控管CRO</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text_box">
                    <p class="content_text">曾任职中山市物质集团财务经理；曾任职香港富力公司（证券）风控总监。熟悉法务、合同、审计、风险控制管理，在财税管理及风控方面工作有着多年从业经验，有效防范风险。</p>
                </div>
              </div>
              <div class="content_honor">
                  <div class="honor_pic">
                      <img src="../../../img/u3579.png" alt="">
                      <p class="honor_text">- 最佳金融服务奖 -</p>
                  </div>
                  <div class="honor_pic">
                      <img src="../../../img/u3591.png" alt="">
                      <p class="honor_text">- 第一届专家委员会委员聘任证书 -</p>
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
      width:1200px;
      margin:0 auto;
      text-align: center;
      font-family: 'SimHei';
      font-size: 40px;
      color: #FFFFFF;
      padding-top: 172px;
    }
    .content_container{
      width:1200px;
      margin:0 auto;
      margin-top:-145px;
      padding:0 20px;
      box-sizing: border-box;
    }
    .team_item{
      display: flex;
      background: #fff;
      box-sizing: border-box;
      padding:32px 215px;
      margin-bottom: 20px;
      border-radius: 5px;
      .img_box{
        position: relative;
        font-size: 0px;
        img{
          width:267px;
          height:300px;
        }
        &:hover .img_text{
          top:0px;
        }
        .img_text_box{
          position: absolute;
          height:100%;
          width: 100%;
          top:0;
          overflow: hidden;
        }
        .img_text{
          position: absolute;
          width:100%;
          height: 100%;
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          background: rgba(67,67,67,0.5);
          top:100%;
          transition: all 1s;
          .name{
            font-family: 'SimHei';
            font-size:32px;
            color:rgba(255,255,255,0.9);
          }
          .desc{
            font-size: 20px;
            color:rgba(255,255,255,0.9);
          }
        }
      }
      .text_box{
        padding-left:40px;
        display: flex;
        flex-flow: column-reverse;
        .content_text{
          font-family: 'SimHei';
          font-size: 16px;
          color: rgba(0, 0, 0, 0.65);
          line-height: 32px;
        }
      }
    }
    .content_honor{
      background: #fff;
      box-sizing: border-box;
      padding:0 180px;
      padding-bottom: 50px;
      .honor_pic{
        position: relative;
        font-size: 0px;
        padding-top:50px;
        img{
          width:800px;
          height:468px;
        }
        .honor_text{
          position: absolute;
          top:50px;
          width: 100%;
          background: rgba(0,0,0,0.3);
          font-size: 28px;
          color: rgba(255, 255, 255, 0.9);
          line-height: 62px;
          font-family: 'SimHei';
          text-align: center;
        }
      }
    }
</style>

