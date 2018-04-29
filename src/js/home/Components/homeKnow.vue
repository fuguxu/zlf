<template>
    <div class="home_know">
        <div class="title">
            上千供应商  解你所需
        </div>
        <div class="home_know_pic">
            <div class="home_know_pic_list">
                <div>
                    <img class="img1" src="../../../img/u315.png" alt="">
                </div>
                <div>
                    <img class="img2" src="../../../img/u317.png" alt="">
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
      }
  },
  mounted(){
      AppUtil.addEventListener(this.$root.$el,'scroll',this.scroll);
  }
}
</script>
<style lang="scss" scoped>
    .home_know{
        .title{
            padding-top:200px;
            padding-bottom: 80px;
            text-align: center;
            font-size: 33px;
        }
        .home_know_pic{
            // background:#eee;
            padding-bottom: 180px;
        }
        .home_know_pic_list,.title{
            width:1200px;
            margin:0 auto;
        }
        .home_know_pic_list{
            height:100%; 
            text-align: center;
            .img1{
                width:700px;
                height:292px;
            }
            .img2{
                width:700px;
                height:350px;
            }         
        }
    }
</style>

