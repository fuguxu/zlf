<template>
  <div class="service_container">
     <div class="banner">优质供应商 解您所需</div>
     <div class="content">
        <div class="jiaju">
            <div class="title">家具</div>
            <div class="title_sub">八大家具风格  满足多样需求</div>
            <div class="img_box">
                <div class="img_left">
                    <div class="item_img" v-for="(item,index) in leftImg" :key="index" @mouseenter="mouseenter(item)" @mouseleave="mouseleave(item)" >
                        <img :src="item.url" alt="">
                        <div class="footer_title" :class="{show:item.showTitle,hidden:!item.showTitle}">现代工业风格</div>
                        <div class="img_desc" >
                            <div class="desc_footer_title" >现代工业风格</div>
                            <div style="height:35%;width:100%;"></div>
                            <p class="desc_title_sub">工业社会的产物，强调设计和工业生产的联系</p>
                            <p>注重发挥结构构成本身的形式美，造型简洁，反对多于装饰，崇尚合理的构成工艺，尊重材料特性</p>
                        </div>
                    </div>
                    
                </div>
                <div class="img_right">
                    <div class="item_img" v-for="(item,index) in rightImg" :key="index" @mouseenter="mouseenter(item)" @mouseleave="mouseleave(item)" >
                        <img :src="item.url" alt="">
                        <div class="footer_title" :class="{show:item.showTitle,hidden:!item.showTitle}">现代工业风格</div>
                        <div class="img_desc" >
                            <div class="desc_footer_title" >现代工业风格</div>
                            <div style="height:35%;width:100%;"></div>
                            <p class="desc_title_sub">工业社会的产物，强调设计和工业生产的联系</p>
                            <p>注重发挥结构构成本身的形式美，造型简洁，反对多于装饰，崇尚合理的构成工艺，尊重材料特性</p>
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
              showTitle:true
              
            },
            {
              url:require('../../../img/u166.png'),
              showTitle:true
            },
            {
              url:require('../../../img/u171.png'),
              showTitle:true
            },
             {
              url:require('../../../img/u198.png'),
              showTitle:true
            },
          ],
          rightImg:[
            {
              url:require('../../../img/u176.png'),
              showTitle:true
            },
            {
              url:require('../../../img/u187.png'),
              showTitle:true
            },           
            {
              url:require('../../../img/u181.png'),
              showTitle:true
            },
            {
              url:require('../../../img/u193.png'),
              showTitle:true
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
        .banner{
          height: 370px;
          background: url('../../../img/u659.jpeg') center no-repeat;
          background-size:cover; 
          text-align: center;
          line-height:370px;
          font-size: 40px;
          color: #FFFFFF;
        }
        .content{
          width:1200px;
          margin:0 auto;
          box-sizing: border-box;
          padding:0 140px;
          text-align: center;
          .title{
              font-size: 33px;
              color: rgb(41, 43, 44);
          }
          .title_sub{
              font-size: 18px;
              color: rgba(41, 43, 44, 0.898);
              line-height:33px;
          }
          .img_box{
              display: flex;
             .img_left{
               flex:1;
               margin-right:20px;
             }
             .img_right{
               flex:1;
             }
             .item_img{
               position: relative;
               color:#fff;
               font-size:0px;
               overflow: hidden;
               margin-bottom: 20px;
               .footer_title{
                 position: absolute;
                 left:0;
                 bottom:0px;
                 line-height: 30px;
                 background: rgba(0, 0, 0, 0.3);
                 font-size:16px;
                 width:100%;
                border-bottom-right-radius: 5px;
                border-bottom-left-radius: 5px;
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
                 font-size:14px;
                 width:100%;
                 height:100%;
                 padding:0 40px;
                 box-sizing: border-box;
                 background: rgba(0, 0, 0, 0.3);
                 transition: all 1s;
                 .desc_footer_title{
                   padding-top:10px;
                   font-size:16px;
                 }
                 .desc_title_sub{
                   padding-bottom: 20px;
                 }
                 p{
                   text-align: left;
                 }
               }
               &:hover{
                 .img_desc{
                   top:0px;
                   border-radius: 5px;
                 }
               }
             }
          }
        }
    }
</style>
