<template>
    <div style="padding-top:20px;">
        <div class="sign_container">
            <div class="sign_role">
                <a class="client" :class="{active:$route.path=='/sign/client'}"  href="home.html#/sign/client">客户注册</a>
                <a class="supplior" :class="{active:$route.path=='/sign/supplier'}" href="home.html#/sign/supplier">供应商注册</a>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            active:1
        }
    },
    methods:{
    },
    mounted(){
    }
}
</script>
<style lang="scss" scoped>
    .sign_container{
        width:1160px;
        margin:0 auto;
        background: #fff;
        padding:25px 81px 0px 81px;
        border-radius: 6px;
        min-height: 700px;
        box-sizing: border-box;
        margin-bottom: 75px;
        .sign_role{
            display: flex;
            line-height: 50px;
            a{
                flex:1;
                font-size: 18px;
                color: rgba(153,153,153,1);
                text-align: center;
                background:rgba(240,240,240,1);
                &.client{
                    border-top-left-radius: 6px;
                    border-bottom-left-radius: 6px;
                }
                &.supplior{
                    border-top-right-radius: 6px;
                    border-bottom-right-radius: 6px;
                }
                &.active{
                    color:#fff;
                    background: rgba(255,166,50,1);
                }
            }
        }
    }
</style>
