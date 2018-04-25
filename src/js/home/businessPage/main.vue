<template>
  <div class="business_containar">
      <div class="banner banner1"></div>
      <div class="content_box">
          <div class="role">如果您是</div>
          <div class="role_detail">富于创意，注重功能实用性，以及对品质有高要求的供应商</div>
          <div class="role_action">我们可以一起合作，将优质的产品租赁给更多有需求的客户</div>
          <div class="role_img">
            <img class="img1" src="../../../img/u3152.png" alt="">
          </div>
          <div class="role_coorperation">我们已与森源家具、华日家具、七彩人生、左右沙发、华源轩等上千家优质的供应商达成战略供应合作</div>
          <div class="role_link">供应商限时进驻</div>
      </div>
      <div class="banner banner2"></div>
      <div class="content_box">
          <div class="role">如果您是</div>
          <div class="role_detail">互联网、电视、平面、或广告类媒体</div>
          <div class="role_action">我们非常乐意与您进行媒体合作，将优质的服务广为传播</div>
          <div class="role_img">
            <img class="img2" src="../../../img/u3164.png" alt="">
          </div>
          <div class="role_coorperation">我们已接受了36kr、猎云网、铅笔道、创业邦、IT桔子、今日头条、百度百家、新浪乐居、腾讯家居等媒体的报道</div>
          <div class="role_link">媒体合作</div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
      return{
          
      }
  }
}
</script>
<style lang="scss" scoped>
    .business_containar{
        .banner{
          height:601px;
          &.banner1{
            background: url('../../../img/u3170.jpg') center no-repeat;
            background-size: cover;
          }
          &.banner2{
            background: url('../../../img/u3171.jpg') center no-repeat;
            background-size: cover;
          }
        }
        .content_box{
          width:1200px;
          margin:0 auto;
          text-align: center;
          .role{
            padding-top:50px;
            font-family: 'SimSun';
            font-size: 22px;
            color: rgba(0, 0, 0, 0.85);
          }
          .role_detail{
            padding-top:48px;
            font-size: 34px;
            color: rgba(0, 0, 0, 0.92);
            font-family: 'SimSun';
          }
          .role_img{
            font-size:0px;
            padding-top:12px;
            .img1{
                width:827px;
                height:70px;
            }
            .img2{
              width:1159px;
              height:46px;
            }
          }
          .role_action,.role_coorperation{
            padding-top:14px;
            font-size: 16px;
            color: rgba(0, 0, 0, 0.75);
            font-family: 'SimHei';
            line-height: 32px;
          }
          .role_link{
            display: inline-block;
            font-size: 20px;
            color: #FED800;
            line-height: 45px;
            border-radius: 45px;
            padding:0 25px;
            border:1px solid #FED800;
            cursor: pointer;
            margin-top:37px;
            margin-bottom: 97px;
            &:hover{
              color:#fff;
              background:#ffda15;
            }
          }
        }
    }
</style>

