<template>
    <div class="home_city">
        <div class="title">
            <div>我们的服务已覆盖到以下城市</div>
            <div class="content content1">以深圳为总部</div>
            <div class="content content2">扩张至北京、上海、广州、杭州、苏州、南京、重庆、武汉、合肥、厦门、三亚......</div>
        </div>
        <div class="home_city_pic_list">
            <img class="img" src="../../../img/map_pic.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return {
      }
  },
  methods:{
      
  },
  mounted(){
      
  }
}
</script>
<style lang="scss" scoped>
    .home_city{
        background: #fff;
        padding-bottom: 120px;
        position: relative;
        .title{
            top:0px;
            position: absolute;
            padding-top:95px;
            text-align: center;
            font-size: 30px;
            left:50%;
            margin-left:-600px;
            color:rgba(51, 51, 51, 1);
            z-index: 1000;
        }
        .content{
            font-size:18px;
            font-weight:normal;
            line-height:36px;
            color:rgba(136, 136, 136, 1);
            &.content1{
                padding-top:40px;
            }
        }
        .home_city_pic_list,.title{
            width:1200px;
        }
        .img{
            position: relative;
            left:-180px;
        }
    }
</style>

