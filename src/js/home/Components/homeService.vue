<template>
    <div class="home_service">
        <div class="content">
            <div class="title">
                互联网家居整体租赁解决方案服务商
            </div>
            <div class="home_service_pic">
                <div class="home_service_pic_list">
                    <div class="pic">
                        <img class="pic_img" src="../../../img/sort_icon.png" alt="">
                        <div class="pic_title">六大租赁品类</div>
                        <div class="pic_dec">家具 , 家电 , 主材 , 机电 , 弱电 , 智能系统</div>
                    </div>
                    <div class="pic">
                        <img class="pic_img" src="../../../img/step_icon.png" alt="">
                        <div class="pic_title">灵活的金融产品</div>
                        <div class="pic_dec">以租代售,售后返租,售后回购</div>
                    </div>
                    <div class="pic">
                        <img class="pic_img" src="../../../img/money_icon.png" alt="">
                        <div class="pic_title">租赁三步走</div>
                        <div class="pic_dec">简单三步，轻松开启租赁服务</div>
                    </div>
                </div>
            </div>
            <div class="title title2">
                金融解决方案
            </div>
            <div class="home_service_pic">
                <div class="home_service_pic_list">
                    <div class="pic">
                        <img class="pic_img" src="../../../img/time_icon.png" alt="">
                        <div class="pic_title">租赁期限</div>
                        <div class="pic_dec">12个月、24个月、36个月、60个月</div>
                    </div>
                    <div class="pic">
                        <img class="pic_img" src="../../../img/house_icon.png" alt="">
                        <div class="pic_title">租赁方式</div>
                        <div class="pic_dec">直租、售后回租、经营性租赁</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return {
          showPic:false
      }
  },
  methods:{
      
  },
  mounted(){
   
  }
}
</script>
<style lang="scss" scoped>
    .home_service{
        background: #fff;
        padding-bottom: 100px;
        .content{
            width:1200px;
            margin:0 auto;
        }
        .title{
            padding-top:95px;
            padding-bottom: 95px;
            text-align: center;
            font-size: 30px;
            color:rgba(51, 51, 51, 1);
            &.title2{
                padding-top:115px;
            }
        }
        .home_service_pic_list{
            height:100%;
            display: flex;
            box-sizing: border-box;
            .pic{
                flex:1;
                position: relative;
                text-align: center;
                .pic_img{
                    width:78px;
                    height:78px;
                }
                .pic_title{
                    font-size:18px;
                    padding:38px 0px 20px 0px;
                    color:rgba(51,51,51,1);
                }
                .pic_dec{
                    color:rgba(102,102,102,1);
                    font-size:14px;
                }
            }
        }
    }
</style>

