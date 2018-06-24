<template>
    <div class="home_rent_flow">
        <div class="content">
            <div class="title">
                租赁流程
            </div>
            <div class="home_rent_flow_pic" >
                <ul class="img_box">
                    <li class="item">
                        <img src="../../../img/certified_icon.png" alt="">
                        <p class="text">提交资料</p>
                        <p class="text">审核立项</p>
                    </li>
                    <li class="item">
                        <img src="../../../img/program_icon.png" alt="">
                        <p class="text">租赁期限 : 1、2、3、5年</p>
                        <p class="text">保证金：租赁总额20%</p>
                        <p class="text">服务费：租赁总额5%</p>
                    </li>
                    <li class="item">
                        <img src="../../../img/execute_icon.png" alt="">
                        <p class="text">租立方向供应商采购</p>
                        <p class="text">承租人向租立方每月预付租金</p>
                        <p class="text">合同期满，租赁物归属权</p>
                        <p class="text">转为客户方</p>
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
}
</script>
<style lang="scss" scoped>
    .home_rent_flow{
        background: #fff;
        padding-bottom: 85px;
        .content{
            width:1200px;
            margin:0 auto;
            .img_box{
                display: flex;
                justify-content: space-between;
                .item{
                    text-align: center;
                    img{
                        margin-bottom: 50px;
                    }
                    .text{
                        margin-bottom:10px;
                        font-size:14px;
                        color:rgba(51,51,51,1);
                    }
                }
            }
        }
        .title{
            padding-top:95px;
            padding-bottom: 100px;
            text-align: center;
            font-size: 30px;
            color:rgba(51, 51, 51, 1);
        }
    }
</style>

