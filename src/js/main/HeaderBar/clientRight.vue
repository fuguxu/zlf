<template>
    <div class="client_header_right">
        <div class="new_rent item">
            <img src="../../../img/u1374.png" alt="">
            <span class="account_text">发起新租赁</span>
        </div>
        <div class="account_center item">
            <span class="user_name">租赁中心 <i class="icon el-icon-arrow-down"></i></span>
            <div class="center_box">
                <ul class="center">
                    <li class="account_text">租赁服务</li>
                    <li class="account_text">合同执行</li>
                    <li class="account_text">后续租金</li>
                    <li class="account_text">售后服务</li>
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
    }
}
</script>
<style lang="scss" scoped>
    .client_header_right{
        flex: 1;
        align-items: center;
        height:100%;
        display: flex;
        justify-content: flex-end;
        .item{
             height:100%;
            display: flex;
            align-items: center;
            .account_text{
                font-size: 14px;
                cursor: pointer;
                &:hover{
                    color: rgba(255, 255,255, 0.75);
                }
            }
        }
        .new_rent{
            img{
                width:25px;
                height:23px;
                margin-right:5px;
            }
        }
        .account_center{
            position: relative;
            margin:0 50px;
            cursor: pointer;
            overflow: hidden;
            &:hover{
                overflow: inherit;
                .user_name{
                    color:rgba(255, 255,255, 0.75);
                }
                .center_box{
                    box-shadow: 0px 0px 15px #333;
                    transition-delay: 0.5s;
                    .center{
                        top:0px;
                        transition: all 0.5s;
                    }
                }  
            }
            .icon{
                color:rgba(255, 255,255, 0.75);
                margin-left:5px;
            }
            .center_box{
                position: absolute;
                top:100%;
                width:90px;
                height: 140px;
                overflow: hidden;
                .center{
                    width:90px;
                    height: 140px;
                    position: absolute;
                    background: rgb(25, 25, 25);
                    top:-140px;
                    box-sizing: border-box;
                    padding-top:10px;
                    .account_text{
                        text-align: center;
                        line-height: 30px;
                    }
                }
            }   
        }
    }
</style>
