<template>
    <div class="home_service">
        <div class="title">
            互联网家居整体租赁解决方案服务商
        </div>
        <div class="home_service_pic">
            <div class="home_service_pic_list">
                <div class="pic" :class="{pic1:showPic}">
                    <img class="pic_img" src="../../../img/u15.png" alt="">
                    <div class="pic_title">灵活的金融产品</div>
                    <div class="pic_dec">以租代售、售后返租、售后回购</div>
                </div>
                <div class="pic" :class="{pic2:showPic}">
                    <img class="pic_img" src="../../../img/u15.png" alt="">
                    <div class="pic_title">集团总授信</div>
                    <div class="pic_dec">以租代售、售后返租、售后回购</div>
                </div>
                <div class="pic" :class="{pic3:showPic}">
                    <img class="pic_img" src="../../../img/u15.png" alt="">
                    <div class="pic_title">项目报备制</div>
                    <div class="pic_dec">以租代售、售后返租、售后回购</div>
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
      scroll(event){
          var scrollTop=event.target.scrollTop;
          var clientHeight=event.target.clientHeight;
          var scrollHeight=event.target.scrollHeight;
          if(scrollTop>=180){
              this.showPic=true;
          }
      }
  },
  mounted(){
      AppUtil.addEventListener(this.$root.$el,'scroll',this.scroll);
  }
}
</script>
<style lang="scss" scoped>
    .home_service{
        .title{
            padding-top:150px;
            padding-bottom: 50px;
            text-align: center;
            font-size: 33px;
            font-weight: 600;
        }
        .home_service_pic{
            height:320px;
            background:#eee;
        }
        .home_service_pic_list,.title{
            width:1200px;
            margin:0 auto;
        }
        .home_service_pic_list{
            height:100%;
            display: flex;
            padding-top:35px;
            box-sizing: border-box;
            overflow: hidden;
            .pic{
                flex:1;
                position: relative;
                top:100%;
                transition:all 1.5s;
                text-align: center;
                color:#292B2C;
                .pic_title{
                    font-size:20px;
                    padding:30px 20px;
                }
                .pic_dec{
                    font-size:16px;
                }
            }
            .pic1,.pic2,.pic3{
                top:0px;
            }
            .pic2{
                transition-delay:0.5s;
            }
            .pic3{
                transition-delay:1s;
            }
        }
    }
</style>

