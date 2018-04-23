<template>
    <div class="home_rent_flow">
        <div class="title">
            租赁流程
        </div>
        <div class="home_rent_flow_pic">
            <div class="home_rent_flow_pic_list">
                <img src="../../../img/u41.jpg" alt="">
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
    .home_rent_flow{
        .title{
            padding-top:120px;
            padding-bottom: 40px;
            text-align: center;
            font-size: 33px;
            font-weight: bold;
        }
        .home_rent_flow_pic{
            height:530px;
            background:#eee;
        }
        .home_rent_flow_pic_list,.title{
            width:1200px;
            margin:0 auto;
        }
        .home_rent_flow_pic_list{
            height:100%; 
            text-align: center;
            img{
                height:530px;
            }         
        }
    }
</style>

