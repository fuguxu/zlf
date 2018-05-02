<template>
    <div class="home_brand">
        <div class="title">
            这些品牌，已与我们共同发展
        </div>
        <div class="home_brand_pic" ref="color">
            <div class="home_brand_pic_list">
                <img src="../../../img/u56.png" alt="">
            </div>
        </div>
        <div class="gif_container">
            <div class="pic_gif1">
                <div class="pic_text" :class="{showPic:showPic1}">
                    <p class="text text1">融资租赁，看得见的优势</p>
                    <!-- <p class="text text2">降低酒店、公寓等重资产企业项目前期70%以上采购投入，减税增收</p> -->
                    <p class="text text3">降低酒店、公寓等重资产企业项目前期70%以上采购投入，减税增收</p>
                    <p class="text text3">缓解企业资金链压力，盘活企业最大资金流，轻资产投资品牌扩张加快速度</p>
                    <p class="text text3">产品交付时间前置，快速开业，租后管理完善，省心更省时</p>
                </div>
                <div class="pic_img" :class="{showPic:showPic1}">
                    <img src="../../../img/youshiimage_u63.png" alt="">
                </div>
            </div>
            <div class="pic_gif2">
                <div class="pic_text" :class="{showPic:showPic2}">
                    <img src="../../../img/shiliimage_u74.png" alt="">
                </div>
                <div class="pic_img" :class="{showPic:showPic2}">
                    <p class="text text1">雄厚的资金实力与资金保障</p>
                    <img src="../../../img/u61.png" alt="">
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
          showPic2:false
      }
  },
  methods:{
      scroll(event){
          var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
          if(scrollTop>=4800){
              this.showPic1=true;
          }
          if(scrollTop>=5150){
              this.showPic2=true;
          }

          var start=4900;
          var end =4900+488;
          var el=this.$refs.color;
          if(el){
            if(scrollTop<start){
                this.$refs.color.style.background='';
            }else if(scrollTop==start){
                this.$refs.color.style.background='rgba(81,81,81,0.1)';
            }else if(scrollTop>start&&scrollTop<end){
                var opc= (0.4-0.1)/(end-start)*(scrollTop-start)
                this.$refs.color.style.background=`rgba(81,81,81,${opc})`;
            }else if(scrollTop>=end){
                this.$refs.color.style.background='rgba(81,81,81,0.4)';
            }
          }
      }
  },
  mounted(){
      AppUtil.addEventListener(window,'scroll',this.scroll);
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
        }
        .home_brand_pic{
            // background:#eee;
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
                height:488px;
                width:650px;
            }         
        }
        .gif_container{
            background: url('../../../img/u0_state0.png') center no-repeat;
            background-size:cover;
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
                padding-bottom: 30px;
            }
        }
        .pic_gif1{
            justify-content: space-around;
            .text2{
                font-size:24px;
                line-height: 75px;
            }
            .text3{
                font-size:18px;
                line-height:34px;
            }
            
        }
        .pic_gif2{
            justify-content: space-evenly;
            margin-top:120px;
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

