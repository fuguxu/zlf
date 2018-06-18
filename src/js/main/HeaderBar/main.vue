<template>
    <div class="header_bar">
        <div class="header_container">
            <div class="logo_container">
               <img src="../../../img/logo.png" alt="">
            </div>
            <positionCity></positionCity>
            <accountCenter></accountCenter>
            <clientRight v-if="role=='client'"></clientRight>
            <supplierRight v-if="role=='supplier'"></supplierRight>
            <messageCenter></messageCenter>
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
    import {customerModule} from '../../api/main';
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
                customerModule.logout().then(res=>{
                    if(res.statusCode=='401'){
                        localStorage.removeItem('role');
                        localStorage.removeItem('zlfuserInfo');
                        window.location.href='/home.html';
                    }
                })
                
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
        background-color: rgba(41,43,44,1);
        position: fixed;
        top:0;
        left:0;
        z-index:999;
        .header_container{
            width:1160px;
            height: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            color:#fff;
        }
        .logo_container{
            // margin-left:67.5px;
            display: flex;
            align-items: center;
        }
        .login_out{
            display: flex;
            height:100%;
            align-items: center;
            img{
                // width:28px;
                // height:28px;
            }
            .text{
                cursor: pointer;
                margin-left:5px;
                &:hover{
                    color:  rgba(255, 255,255, 0.7);
                }
            }
        }
    }
</style>

