<template>
  <div class="business_containar">
      <div class="banner banner1"></div>
      <div class="content_box">
          <div class="role font14">如果您是</div>
          <div class="role_detail font18">富于创意，注重功能实用性，以及对品质有高要求的<span class="font22">供应商</span></div>
          <div class="role_action font14">我们可以一起合作，将优质的产品租赁给更多有需求的客户</div>
          <div class="role_img font0">
            <img class="img1" src="../../../img/u3152.png" alt="">
          </div>
          <div class="role_coorperation">我们已与金凤凰家具、森源家具、长江家具、华日家居、全友家居、比特家具等优质供应商达成战略供应合作</div>
          <div class="role_link">供应商限时进驻</div>
      </div>
      <div class="banner banner2"></div>
      <div class="content_box">
          <div class="role font14">如果您是</div>
          <div class="role_detail font18">互联网、电视、平面、或广告类媒体</div>
          <div class="role_action font14">我们非常乐意与您进行媒体合作，将优质的服务广为传播</div>
          <div class="role_img font0">
            <img class="img2" src="../../../img/u3164.png" alt="">
          </div>
          <div class="role_coorperation">我们已接受了网易新闻、凤凰网、新浪乐居、腾讯家居、迈点、今日头条、财经网、36Kr、铅笔道、创业邦等媒体的报道</div>
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
      background: #fff;
        .banner{
          height:600px;
          &.banner1{
            background: url('../../../img/u3170.png') center no-repeat;
            background-size: cover;
          }
          &.banner2{
            background: url('../../../img/u3171.png') center no-repeat;
            background-size: cover;
          }
        }
        .content_box{
          width:1160px;
          margin:0 auto;
          text-align: center;
          padding:100px 0px;
          .role{
            // padding-top:50px;
          }
          .role_detail{
            padding:22px 0px;
          }
          .role_img{
            padding:24px 0px;
          }
          .role_coorperation{
            padding-bottom:47px;
          }
          .role_link{
            display: inline-block;
            font-size: 14px;
            color: #fff;
            line-height: 40px;
            border-radius: 10px;
            width:200px;
            text-align: center;
            background:rgba(255,166,50,1);
            cursor: pointer;
            &:hover{
              // color:#fff;
            }
          }
        }
    }
</style>

