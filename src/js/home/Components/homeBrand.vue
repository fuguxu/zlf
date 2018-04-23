<template>
    <div class="home_brand">
        <div class="title">
            这些品牌，已与我们共同发展
        </div>
        <div class="home_brand_pic">
            <div class="home_brand_pic_list">
                <img src="../../../img/u65.jpg" alt="">
            </div>
        </div>
        <div class="pic_gif1">
            <div class="pic_text">
                <p>融资租赁，看得见的优势</p>
                <p>轻资产投资快速扩张</p>
                <p>解决项目前期70%采购投入</p>
                <p>盘活最大资金流</p>
                <p>加速规模扩张，减税增收</p>
            </div>
            <div class="pic_img">
                <img src="../../../img/u67.png" alt="">
            </div>
        </div>
        <div class="pic_gif2">
            
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
    .home_brand{
        .title{
            padding-top:150px;
            padding-bottom: 60px;
            text-align: center;
            font-size: 33px;
            font-weight: bold;
        }
        .home_brand_pic{
            background:#eee;
            margin-bottom:250px;
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
        .pic_gif1{
            display: flex;
        }
    }
</style>

