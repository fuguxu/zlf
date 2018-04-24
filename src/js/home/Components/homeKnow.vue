<template>
    <div class="home_know">
        <div class="title">
            上千供应商  解你所需
        </div>
        <div class="home_know_pic">
            <div class="home_know_pic_list">
                <div>
                    <img src="../../../img/u90.jpg" alt="">
                </div>
                <div>
                    <img src="../../../img/u84.jpg" alt="">
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
    .home_know{
        .title{
            padding-top:200px;
            padding-bottom: 80px;
            text-align: center;
            font-size: 33px;
        }
        .home_know_pic{
            background:#eee;
            padding-bottom: 180px;
        }
        .home_know_pic_list,.title{
            width:1200px;
            margin:0 auto;
        }
        .home_know_pic_list{
            height:100%; 
            text-align: center;
            img{
                width:650px;
            }         
        }
    }
</style>

