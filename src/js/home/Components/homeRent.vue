<template>
    <div class="home_rent">
        <div class="content">
            <div class="title">
                租赁物品类
            </div>
            <div class="home_rent_pic">
                <div class="item">
                   <img class="img defalut" src="../../../img/sofa_nor_icon.png" alt="">
                   <img class="img hover" src="../../../img/sofa_sel_icon.png" alt="">
                   <span class="text">家具</span> 
                </div>
                <div class="item">
                    <img class="img defalut" src="../../../img/device_nor_icon.png" alt="">
                    <img class="img hover" src="../../../img/device_sel_icon.png" alt="">                   
                    <span class="text">家电</span> 
                </div>
                <div class="item">
                    <img class="img defalut" src="../../../img/material_nor_icon.png" alt="">
                    <img class="img hover" src="../../../img/material_sel_icon.png" alt="">
                     <span class="text">主材</span>
                </div>
                <div class="item">
                    <img class="img defalut" src="../../../img/machine_nor_icon.png" alt="">
                    <img class="img hover" src="../../../img/machine_sel_icon.png" alt="">
                    <span class="text">机电设备</span>
                </div>
                <div class="item">
                    <img class="img defalut" src="../../../img/system_nor_icon.png" alt="">
                    <img class="img hover" src="../../../img/system_sel_icon.png" alt="">
                    <span class="text">弱电系统</span>
                </div>
                <div class="item">
                    <img class="img defalut" src="../../../img/intelligent_nor_icon.png" alt="">
                    <img class="img hover" src="../../../img/intelligent_sel_icon.png" alt="">
                    <span class="text">智能系统</span>
                </div>
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
            padding:0 20px;
            box-sizing: border-box;
            .home_rent_pic{
                display: flex;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                height:610px;
                .item{
                    font-size:0px;
                    position: relative;
                    text-align: center;
                    .text{
                        position: absolute;
                        bottom: 33px;
                        color:rgba(136,136,136,1);
                        font-size:16px;
                        width:100%;
                        display: inline-block;
                        left:0px;
                    }
                    &:hover{
                        .text{
                            color:#fff;
                        }
                        .defalut{
                            display: none;
                        }
                        .hover{
                            display: inline-block;
                        }
                    }
                }
                .img{
                    width:372px;
                    height:290px;
                }
                .hover{
                    display: none;
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

