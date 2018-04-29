<template>
  <div class="contact_container">
      <banner>
          <div class="slot">
              <div class="title">联系我们</div>
              <div class="desc">期待您的每一次垂询，期待您的实地来访</div>
          </div>
      </banner>
      <div class="content_container">
          <div class="content">
              <div class="header">
                  <div class="item item1">
                      <img class="img" src="../../../img/u4567.png" alt="">
                      <div class="line"></div>
                      <div class="text_box">
                          <div class="title">深圳总部</div>
                          <div class="text">广东省 深圳市 南山区</div>
                          <div class="text">蛇口沿山路22号火炬创业大厦3F</div>
                      </div>
                  </div>
                  <div class="item item2">
                      <img class="img" src="../../../img/u4587.png" alt="">
                      <div class="line"></div>
                      <div class="text_box">
                          <div class="title">联系方式</div>
                          <div class="text">电话 400-880-4604</div>
                          <div class="text">邮箱 service@zulifang.co</div>
                      </div>
                  </div>
                  <div class="item item3">
                      <img class="img" src="../../../img/u4578.png" alt="">
                      <div class="line"></div>
                      <div class="text_box">
                          <div class="title">工作时间</div>
                          <div class="text">工作日 9：00-18：30</div>
                      </div>
                  </div>
              </div>
              <div class="map_box">
                  <div id="zlfMap">

                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script type="text/javascript" src='http://api.map.baidu.com/api?v=2.0&ak=cUAEBMmM1FY4tplq45Q1ANZrdnNB5WAG&callback=init'></script>
<script>
import banner from '../Components/aboutBanner.vue';
export default {
  data(){
      return{
          
      }
  },
  mounted(){
      var map = new BMap.Map("zlfMap",{enableMapClick:true});
      // 初始化地图,设置中心点坐标和地图级别
      map.centerAndZoom(new BMap.Point(116.4035,39.915), 11);
      // 添加地图类型控件
      map.addControl(new BMap.MapTypeControl());  
      // 设置地图显示的城市 此项是必须设置的
      map.setCurrentCity("杭州");    
      // 开启鼠标滚轮缩放      
      map.enableScrollWheelZoom(true);
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
.content_container{
    width:1200px;
    margin:0 auto;
    box-sizing: border-box;
    padding:0 20px;
    margin-top:-145px;
    .content{
      background: #fff;
      border-radius: 5px;
      .header{
        display: flex;
        padding-bottom: 93px;
        .item{
          display: flex;
          height:93px;
          margin-top:57px;
          &.item1{
            margin-left:80px;
          }
          &.item2{
            margin-left:50px;
          }
          &.item3{
            margin-left:53px;
          }
          .img{
            width:55px;
            height:55px;
          }
          .line{
            width:1px;
            height: 84px;
            background: #000;
            opacity: 0.25;
            margin-top:5px;
          }
          .text_box{
            padding-left:27px;
          }
          .title{
            line-height: 26px;
            padding-top:5px;
            padding-bottom: 10px;
            font-family: 'SimHei';
            font-size: 19px;
            color: rgba(0, 0, 0, 0.7);
          }
          .text{
            font-family: 'SimHei';
            font-size: 17px;
            color: rgba(0, 0, 0, 0.5);
            line-height: 26px;
          }
        }
      }
      .map_box{
        width:1010px;
        height:550px;
        #zlfMap{
          width:100%;
          height:100%;
        }
      }
    }
} 
</style>

