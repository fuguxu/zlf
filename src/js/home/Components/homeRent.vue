<template>
    <div class="home_rent">
        <div class="title">
            租赁物品类
        </div>
        <div class="home_rent_pic" ref="color">
            <div class="home_rent_pic_list">
                <ul class="img_box">
                    <li class="item">
                        <img src="../../../img/u286.png" alt="">
                        <p class="desc"><span>家具</span></p>
                    </li>
                    <li class="item">
                        <img src="../../../img/u291.png" alt="">
                        <p class="desc"><span>家电</span></p>
                    </li>
                    <li class="item">
                        <img src="../../../img/u298.png" alt="">
                        <p class="desc"><span>主材</span></p>
                    </li>
                    <li class="item">
                        <img src="../../../img/u303.png" alt="">
                        <p class="desc"><span>机电设备</span></p>
                    </li>
                    <li class="item">
                        <img src="../../../img/u306.png" alt="">
                        <p class="desc"><span>弱电系统</span></p>
                    </li>
                    <li class="item">
                        <img src="../../../img/u311.png" alt="">
                        <p class="desc"><span>智能系统家具</span></p>
                    </li>
                </ul>
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
          var start=1348;
          var end =1848;
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
  },
  mounted(){
      AppUtil.addEventListener(this.$root.$el,'scroll',this.scroll);
  }
}
</script>
<style lang="scss" scoped>
    .home_rent{
        .title{
            padding-top:120px;
            padding-bottom: 50px;
            text-align: center;
            font-size: 33px;
        }
        .home_rent_pic{
            height:500px;
            // background:#eee;
        }
        .home_rent_pic_list,.title{
            width:1200px;
            margin:0 auto;
        }
        .home_rent_pic_list{
            height:100%; 
            display: flex;
            justify-content: center;
            .img_box{
                height:500px;
                width:792px;
                .item{
                    padding:30px 60px;
                    box-sizing: border-box;
                    float: left;
                    display: flex;
                    flex-flow: column;
                    justify-content: center;
                    text-align: center;
                    img{
                        width:144px;
                        height:144px;
                        transition: all 1s;
                        &:hover{
                            transform: scale(1.1);
                        }
                    }
                    img:hover +.desc{
                        color:rgb(242, 159, 51);
                    }
                    .desc{
                        color: rgba(41, 43, 44, 0.8);
                        font-size: 18px;
                        padding-top:12px;
                        span:hover{
                            color:rgb(242, 159, 51);
                        }
                    }
                }
            }         
        }
    }
</style>

