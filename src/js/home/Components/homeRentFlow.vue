<template>
    <div class="home_rent_flow">
        <div class="title">
            租赁流程
        </div>
        <div class="home_rent_flow_pic" ref="color">
            <div class="home_rent_flow_pic_list">
                <img src="../../../img/u41.png" alt="">
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
          var scrollTop=event.target.scrollTop;
          var start=2075;
          var end =2075+642;
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
        }
        .home_rent_flow_pic{
            height:642px;
            // background:#eee;
        }
        .home_rent_flow_pic_list,.title{
            width:1200px;
            margin:0 auto;
        }
        .home_rent_flow_pic_list{
            height:100%; 
            text-align: center;
            img{
                height:642px;
                width:700px;
            }         
        }
    }
</style>

