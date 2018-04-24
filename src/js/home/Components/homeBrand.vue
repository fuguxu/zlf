<template>
    <div class="home_brand">
        <div class="title">
            这些品牌，已与我们共同发展
        </div>
        <div class="home_brand_pic">
            <div class="home_brand_pic_list">
                <img src="../../../img/u60.jpg" alt="">
            </div>
        </div>
        <div class="pic_gif1">
            <div class="pic_text" :class="{showPic:showPic1}">
                <p class="text text1">融资租赁，看得见的优势</p>
                <p class="text text2">轻资产投资快速扩张</p>
                <p class="text text3">解决项目前期70%采购投入</p>
                <p class="text text3">盘活最大资金流</p>
                <p class="text text3">加速规模扩张，减税增收</p>
            </div>
            <div class="pic_img" :class="{showPic:showPic1}">
                <img src="../../../img/u67.png" alt="">
            </div>
        </div>
        <div class="pic_gif2">
            <div class="pic_text" :class="{showPic:showPic2}">
                <img src="../../../img/u80.png" alt="">
            </div>
            <div class="pic_img" :class="{showPic:showPic2}">
                <p class="text text1">雄厚的资金实力与资金保障</p>
                <img src="../../../img/u65.jpg" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return {
          showPic1:false,
          showPic2:false
      }
  },
  methods:{
      scroll(event){
          var scrollTop=event.target.scrollTop;
          var clientHeight=event.target.clientHeight;
          var scrollHeight=event.target.scrollHeight;
          if(scrollTop>=4800){
              this.showPic1=true;
              
          }
          if(scrollTop>=5150){
              this.showPic2=true;
          }
      }
  },
  mounted(){
      AppUtil.addEventListener(this.$root.$el,'scroll',this.scroll);
  }
}
</script>
<style lang="scss" scoped>
    .home_brand{
        .title{
            padding-top:150px;
            padding-bottom: 60px;
            text-align: center;
            font-size: 33px;
            font-weight: 650;
        }
        .home_brand_pic{
            background:#eee;
            margin-bottom:230px;
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
                height:416px;
                width:650px;
            }         
        }
        .pic_gif1,.pic_gif2{
            display: flex;
            color:#292B2C;
            .pic_text,.pic_img{
                position: relative;
                opacity:0;
                transition: all 1s;
            }
            .pic_text{
                left:-120px;
                &.showPic{
                    left:0;
                }
            }
            .pic_img{
                right:-120px;
                &.showPic{
                    right:0;
                }
            }
            .showPic{
                opacity:1;
            }
            .text1{
                font-size:28px;
                font-weight: 650;
            }
        }
        .pic_gif1{
            justify-content: space-around;
            .text2{
                font-size:24px;
                font-weight: 500;
                line-height: 75px;
            }
            .text3{
                font-size:18px;
                font-weight: 500;
                line-height:34px;
            }
            
        }
        .pic_gif2{
            justify-content: space-evenly;
            margin-top:150px;
            .pic_img{
                img{
                    width:337px;
                    height:144px;
                    margin-top:15px;
                }
            }
        }
    }
</style>

