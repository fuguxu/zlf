<template>
    <div style="padding-top:85px;">
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
        border:1px solid rgb(227,225,223);
        border-top: none;
        background: #fff;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        min-height: 300px;
        box-sizing: border-box;
        margin-bottom: 75px;
        .sign_role{
            display: flex;
            line-height: 42px;
            a{
                flex:1;
                font-size: 18px;
                color: #868686;
                text-align: center;
                background: linear-gradient(to right,#D7D7D7,rgba(215, 215, 215, 0.9),#D7D7D7);
                &.client{
                    border-top-left-radius: 8px;
                    border-bottom-left-radius: 8px;
                }
                &.supplior{
                    border-top-right-radius: 8px;
                    border-bottom-right-radius: 8px;
                }
                &.active{
                    color:#fff;
                    background: linear-gradient(to right,rgba(242,159,51, 0.7),rgba(242,159,51, 1),rgba(242,159,51, 0.7));
                }
            }
        }
    }
</style>
