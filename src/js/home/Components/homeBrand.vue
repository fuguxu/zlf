<template>
    <div class="home_brand">
        <div class="title">
            这些品牌，已与我们共同发展
        </div>
        <div class="home_brand_pic">
            <img v-for="(item,index) in data" :src="require(`../../../img/logo_0${item}.png`)" :key="index" alt="">
        </div>
        <div style="background:#fff;">
            <div class="title">
                <img src="../../../img/good_supplier.png" alt="">
            </div>
        </div>
        <div class="gif_container">
            <div class="pic_gif1">
                <div class="pic_text" :class="{showPic:showPic1}">
                    <p class="text text1">家居租赁，看得见的优势</p>
                    <p class="text text2">解决项目前期70%采购投入</p>
                    <p class="text text3">盘活最大资金流</p>
                    <p class="text text3">加速规模扩张，减税增收</p>
                </div>
                <div class="pic_img" :class="{showPic:showPic1}">
                    <img src="../../../img/notebook_icon.png" alt="">
                </div>
            </div>
            <div class="pic_gif2">
                <div class="pic_text" :class="{showPic:showPic2}">
                    <img src="../../../img/gold_icon.png" alt="">
                </div>
                <div class="pic_img" :class="{showPic:showPic2}">
                    <p class="text text1">雄厚的资金来源</p>
                    <p class="text text2">中国建设银行、招商银行、兴业银行、宝生村镇银行</p>
                    <p class="text text3">招商金融租赁、广发租赁、平安租赁</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return {
          showPic1:false,
          showPic2:false,
          data:[1,2,3,4,5,6,7,8,9,10,11,12]
      }
  },
  methods:{
      
  },
  mounted(){
    
  }
}
</script>
<style lang="scss" scoped>
    .home_brand{
       background: rgba(244, 244, 244, 1);
       
        .title{
            padding-top:140px;
            padding-bottom: 57px;
            text-align: center;
            font-size: 30px;
            color:rgba(51, 51, 51, 1);
        }
        .home_brand_pic{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            padding-bottom: 100px;
            width: 1200px;
            margin: 0 auto;
            height: 360px;
            img{
                height: 166px;
                width:174px;
            }
        }
        .home_brand_pic_list,.title,.pic_gif1,.pic_gif2{
            width:1200px;
            margin:0 auto;
        }
        .home_brand_pic_list{
            font-size:0px;
            height:100%; 
            text-align: center;
            img{
                height:488px;
                width:650px;
            }         
        }
        .gif_container{
            // background: url('../../../img/u0_state0.png') center no-repeat;
            // background-size:cover;
            padding-top:107px;
            padding-bottom: 102px;
        }
        .pic_gif1,.pic_gif2{
            display: flex;
            color:rgba(102, 102, 102, 1);
            font-size:14px;
            .pic_text,.pic_img{
                position: relative;
                // opacity:0;
                transition: all 1s;
            }
            .pic_text{
                // left:-120px;
                &.showPic{
                    left:0;
                }
            }
            .pic_img{
                // right:-120px;
                &.showPic{
                    right:0;
                }
            }
            .showPic{
                opacity:1;
            }
            .text1{
                font-size:24px;
                color:rgba(51, 51, 51, 1);
            }
        }
        .pic_gif1{
            justify-content: space-around;
            margin-bottom: 70px;
            .text1{
                margin-top:22px;
            }
            .text2{
                margin-top:41px;
                margin-bottom: 23px;
            }
            .text3{
                margin-bottom: 23px;
            }
            
        }
        .pic_gif2{
            justify-content: space-around;
            .text1{
                margin-top:25px;
                margin-bottom: 52px;
            }
            .text2{
                margin-bottom: 18px;
            }
        }
    }
</style>

