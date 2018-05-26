<template>
    <div class="home_rent">
        <div class="content">
            <div class="title">
                租赁物品类
            </div>
            <div class="home_rent_pic">
                <img class="img" src="../../../img/sofa_nor_icon.png" alt="">
                <img class="img" src="../../../img/device_nor_icon.png" alt="">
                <img class="img" src="../../../img/material_nor_icon.png" alt="">
                <img class="img" src="../../../img/sofa_nor_icon.png" alt="">
                <img class="img" src="../../../img/system_nor_icon.png" alt="">
                <img class="img" src="../../../img/intelligent_nor_icon.png" alt="">
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
      
  },
  mounted(){
    
  },
}
</script>
<style lang="scss" scoped>
    .home_rent{
        background:rgba(244,244,244,1);
        padding-bottom: 80px;
        .content{
            width:1200px;
            margin:0 auto;
            .home_rent_pic{
                display: flex;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                height:600px;
                .img{
                    width:392px;
                    height:290px;
                }
            }
        }
        .title{
            padding-top:95px;
            padding-bottom: 65px;
            text-align: center;
            font-size: 30px;
            color:rgba(51, 51, 51, 1);
        }    
    }
</style>

