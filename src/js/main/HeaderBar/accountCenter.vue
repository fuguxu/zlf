<template>
    <div class="account_center">
        <span class="user_name">您好，新派公寓 <i class="icon el-icon-arrow-down"></i></span>
        <div class="center_box">
            <div class="center">
                <img class="user_icon" src="../../../img/u1388.png" alt="">
                <a class="account_text" :href="renderHref()">账号中心</a>
                <span class="line"></span>
                <a class="account_text" href="javascript:;">退出</a>
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
        renderHref(){
          return  localStorage.getItem('role')=='client'?'#/account/information':'#/account/company'
        }
    }
}
</script>
<style lang="scss" scoped>
    .account_center{
        position: relative;
        margin-left:50px;
        cursor: pointer;
        height:100%;
        display: flex;
        align-items: center;
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
            width:190px;
            height: 60px;
            overflow: hidden;
            .center{
                width:190px;
                height: 60px;
                position: absolute;
                background: rgb(25, 25, 25);
                top:-60px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                .user_icon{
                    width:45px;
                    height: 45px;
                }
                .account_text{
                    font-size: 14px;
                    &:hover{
                        color: rgba(255, 255,255, 0.75);
                    }
                }
                .line{
                    display: inline-block;
                    width:1px;
                    height: 18px;
                    background: rgba(255, 255,255, 0.75);
                }
            }
        }   
    }
</style>
