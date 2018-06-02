<template>
    <div class="header_bar">
        <div class="header_container">
            <div class="logo_container">
               <img src="../../../img/logo.png" alt="">
            </div>
            <positionCity></positionCity>
            <accountCenter></accountCenter>
            <messageCenter></messageCenter>
            <clientRight v-if="role=='client'"></clientRight>
            <supplierRight v-if="role=='supplier'"></supplierRight>
            <div class="login_out">
                <img src="../../../img/u1393.png" alt="">
                <span @click="loginOut" class="text">退出</span>
            </div>
        </div>
    </div>
</template>
<script>
    import positionCity from './positionCity.vue';
    import accountCenter from './accountCenter.vue';
    import messageCenter from './messageCenter.vue';
    import clientRight from './clientRight.vue';
    import supplierRight from './supplierRight.vue';
    export default{
        data(){
            return{
                menus:[],
                role:0
            }
        },
        mounted(){
           this.role=localStorage.getItem('role');
        },
        methods:{
            loginOut(){
                localStorage.removeItem('role');
                localStorage.removeItem('userInfo');
                window.location.href='home.html';
            }
        },
        components:{
            positionCity,
            accountCenter,
            messageCenter,
            clientRight,
            supplierRight
        }
    }
</script>
<style lang="scss" scoped>
    .header_bar{
        height: 51px;
        width:100%;
        background-color: rgba(13, 13, 13, 0.92);
        position: fixed;
        top:0;
        left:0;
        z-index:999;
        .header_container{
            width:1200px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            color:#fff;
            font-size: 14px;
        }
        .logo_container{
            margin-left:67.5px;
            display: flex;
            align-items: center;
        }
        .login_out{
            display: flex;
            height:100%;
            align-items: center;
            img{
                width:28px;
                height:28px;
            }
            .text{
                cursor: pointer;
                margin-left:5px;
                &:hover{
                    color:  rgba(255, 255,255, 0.75);
                }
            }
        }
    }
</style>

