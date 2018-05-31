<template>
  <div class="service_container">
     <div class="banner"></div>
     <div class="content">
        <div class="jiaju">
            <div class="title">家具</div>
            <div class="title_sub">八大家具风格&nbsp;&nbsp;&nbsp;&nbsp;满足多样需求</div>
            <div class="img_box">
                <div class="img_left">
                    <div class="item_img" v-for="(item,index) in leftImg" :key="index" @mouseenter="mouseenter(item)" @mouseleave="mouseleave(item)" >
                        <img :src="item.url" alt="">
                        <div class="footer_title" :class="{show:item.showTitle,hidden:!item.showTitle}">{{item.styleTitle}}</div>
                        <div class="img_desc" >
                          <div class="item_content">
                            <div class="desc_footer_title font18" >{{item.styleTitle}}</div>
                            <p class="desc_title_sub font16">{{item.text1}}</p>
                            <p class="text2 font14" v-html="item.text2"></p>
                          </div>
                            
                        </div>
                    </div>
                    
                </div>
                <div class="img_right">
                    <div class="item_img" v-for="(item,index) in rightImg" :key="index" @mouseenter="mouseenter(item)" @mouseleave="mouseleave(item)" >
                        <img :src="item.url" alt="">
                        <div class="footer_title" :class="{show:item.showTitle,hidden:!item.showTitle}">{{item.styleTitle}}</div>
                        <div class="img_desc" >
                          <div class="item_content">
                            <div class="desc_footer_title font18" >{{item.styleTitle}}</div>
                            <p class="desc_title_sub font16">{{item.text1}}</p>
                            <p class="text2 font14" v-html="item.text2"></p>
                          </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
     
  </div>
</template>
<script>
export default {
  data(){
      return{
          leftImg:[
            {
              url:require('../../../img/u161.png'),
              showTitle:true,
              styleTitle:'现代简约风格',
              text1:'行走在流行时尚前沿，简洁、没有多余的造型，但又不简单',
              text2:`在满足功能的基础上做到最大程度的简洁，注重空间界面和装饰<br />的构成形式，线条干净利落，铿锵有力`
            },
            {
              url:require('../../../img/u166.png'),
              showTitle:true,
              styleTitle:'欧式风格',
              text1:'以手工雕刻见长，以镶嵌细工见长',
              text2:`轮廓和转折部分由对称而富有节奏感的曲线或曲面构成，并装饰镀金<br />铜饰、仿皮等，结构简练，线条流畅，色彩富丽，艺术感强`
            },
            {
              url:require('../../../img/u171.png'),
              showTitle:true,
              styleTitle:'新中式风格',
              text1:'继承了中式古典家具的气质，又巧妙地删繁就简',
              text2:`新中式风格加入更适合现代人生活的功能和新材料，以简约的<br />艺术造型和工艺，体现出传统文化的韵味和精髓`
            },
             {
              url:require('../../../img/u198.png'),
              showTitle:true,
              styleTitle:'现代工业风格',
              text1:'工业社会的产物，强调设计和工业生产的联系',
              text2:`注重发挥结构构成本身的形式美，造型简洁，反对多余装<br />饰，崇尚合理的构成工艺，尊重材料特性`
            },
          ],
          rightImg:[
            {
              url:require('../../../img/u176.png'),
              showTitle:true,
              styleTitle:'田园风格',
              text1:'不同的田园有不同的自然，衍生出多样田园风格',
              text2:`以田地和园圃特有的自然特征为基本形式，能够表现出带有一定<br />程度乡村生活或乡村艺术特色，自然中带有闲适`
            },
            {
              url:require('../../../img/u187.png'),
              showTitle:true,
               styleTitle:'北欧风格',
              text1:'抛弃传统家具的繁复，直角的线和面勾画出一种简单的美',
              text2:`材质上精挑细选，工艺上尽善尽美，回归自然，崇尚原木韵味，现代、<br />实用、精美的设计风格，反映出都市人进入后现代社会的另一种思考`
            },           
            {
              url:require('../../../img/u181.png'),
              showTitle:true,
              styleTitle:'欧式古典风格',
              text1:'融入浓厚的欧洲古典文化，已然成为一种经典',
              text2:`以华丽的装饰、浓烈的色彩、精美的造型达到雍容华贵的装饰效果，<br />通常给人以高档气派、尊贵典雅的视觉冲击`
            },
            {
              url:require('../../../img/u193.png'),
              showTitle:true,
              styleTitle:'地中海风格',
              text1:'享受碧海蓝天的清爽，地中海风格独特的美学特点',
              text2:`选择自然的柔和色彩,在组合设计上注意空间搭配,在组合搭配上避免<br />琐碎,显得大方、自然,散发出古老尊贵的田园气息和文化品位`
            },
          ]
      }
  },
   methods:{
      mouseleave(item){
        item.showTitle=true;
      },
      mouseenter(item){
        item.showTitle=false;
      }
    }
}
</script>
<style lang="scss" scoped>
    .service_container{
        background: #fff;
        .banner{
          height: 600px;
          background: url('../../../img/product_banner.png') center no-repeat;
          background-size:cover; 
        }
        .content{
          width:1200px;
          margin:0 auto;
          box-sizing: border-box;
          padding:0 20px;
          text-align: center;
          .title{
              font-size: 30px;
              padding-top:55px;
          }
          .title_sub{
              font-size: 16px;
              padding-top:25px;
              padding-bottom: 68px;
          }
          .img_box{
              display: flex;
             .img_left{
               flex:1;
               margin-right:40px;
             }
             .img_right{
               flex:1;
             }
             .item_img{
               position: relative;
               color:#fff;
               font-size:0px;
               overflow: hidden;
               margin-bottom: 40px;
               .footer_title{
                 position: absolute;
                 left:0;
                 bottom:0px;
                 line-height: 40px;
                 background: rgba(0, 0, 0, 0.5);
                 font-size:18px;
                 width:100%;
                border-bottom-right-radius: 10px;
                border-bottom-left-radius: 10px;
                &.hidden{
                   opacity: 0;
                 }
                &.show{
                  opacity: 1;
                  transition: all 0.5s;
                  transition-delay: 1s;
                }
                
               }
               .img_desc{
                 position: absolute;
                 top:100%;
                 left: 0px;
                 display: flex;
                 align-items: center;
                 justify-content: center;
                 width:100%;
                 height:100%;
                 box-sizing: border-box;
                 background: rgba(0, 0, 0, 0.5);
                 transition: all 1s;
                 .item_content{
                   text-align: left;
                 }
                 .desc_footer_title{
                  text-align: center;
                 }
                 .desc_title_sub{
                   padding-top:35px;
                   padding-bottom: 24px;
                 }
                 .text2{
                   line-height: 24px;
                 }
               }
               &:hover{
                 .img_desc{
                   top:0px;
                   border-radius: 10px;
                 }
               }
             }
          }
        }
    }
</style>
