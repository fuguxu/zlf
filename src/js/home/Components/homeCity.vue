<template>
    <div class="home_city">
        <div class="title">
            <div>我们的服务已覆盖到以下城市</div>
            <div class="content content1">以深圳为总部</div>
            <div class="content content2">扩张至北京、上海、广州、杭州、苏州、南京、重庆、武汉、合肥、厦门、三亚......</div>
        </div>
        <div class="home_city_pic">
            <div class="home_city_pic_list">
                <img src="../../../img/u56.jpg" alt="">
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
    .home_city{
        .title{
            padding-top:120px;
            padding-bottom: 40px;
            text-align: center;
            font-size: 33px;
            font-weight: 600;
        }
        .content{
            font-size:18px;
            font-weight:normal;
            line-height:36px;
            &.content1{
                padding-top:50px;
            }
        }
        .home_city_pic{
            background:#eee;
        }
        .home_city_pic_list,.title{
            width:1200px;
            margin:0 auto;
        }
        .home_city_pic_list{
            height:100%; 
            text-align: center;
            img{
                height:565px;
            }         
        }
    }
</style>

