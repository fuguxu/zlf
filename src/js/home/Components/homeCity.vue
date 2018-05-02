<template>
    <div class="home_city">
        <div class="title">
            <div>我们的服务已覆盖到以下城市</div>
            <div class="content content1">以深圳为总部</div>
            <div class="content content2">扩张至北京、上海、广州、杭州、苏州、南京、重庆、武汉、合肥、厦门、三亚......</div>
        </div>
        <div class="home_city_pic" ref="color">
            <div class="home_city_pic_list">
                <img src="../../../img/u52.png" alt="">
            </div>
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
      scroll(event){
          var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
          var start=4100;
          var end =4100+553;
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
    .home_city{
        .title{
            padding-top:120px;
            padding-bottom: 40px;
            text-align: center;
            font-size: 33px;
        }
        .content{
            font-size:18px;
            font-weight:normal;
            line-height:36px;
            color:rgba(41,43,44,0.9);
            &.content1{
                padding-top:50px;
            }
        }
        .home_city_pic{
            // background:#eee;
        }
        .home_city_pic_list,.title{
            width:1200px;
            margin:0 auto;
        }
        .home_city_pic_list{
            height:100%; 
            text-align: center;
            img{
                width:750px;
                height:550px;
            }         
        }
    }
</style>

