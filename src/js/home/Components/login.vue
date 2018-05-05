<template>
    <div class="login_box" :class="{clientWidth:clientWidth<1190,clientHeight:clientHeight<528}">
        <div class="login_role">
            <div class="item custorm" @click="changeRole(1)" :class="{active:role==1}">
                客户
            </div>
            <div class="item gong" @click="changeRole(2)" :class="{active:role==2}">
                供应商
            </div>
        </div>
        <div class="role_text" :class="{active1:role==1,active2:role==2}">{{roleText}}</div>
        <div class="login_form">
            <div class="user_item user_name" :class="{userActive:userActive}">
                <div class="icon_before">

                </div>
                <el-input type="text" ref="user"  @focus="userActive=true" @blur="userActive=false" class="input user_input" v-model="userName" placeholder="手机号">
                    <i slot="suffix" class="iconfont icon-close" @click="userName=''" v-if="userName"></i>
                </el-input>
            </div>
            <div class="user_item user_password" :class="{userActive:passwordActive}">
                <div class="icon_before">

                </div>
                <el-input type="password" ref="password" @focus="passwordActive=true" @blur="passwordActive=false" class="input password_input" v-model="password" placeholder="密码">
                    <i slot="suffix" class="iconfont icon-close" @click="password=''" v-if="password"></i>
                </el-input>
            </div>
            <div class="error_message" v-if="errorMessage">
                <i class="icon el-icon-remove"></i>
                <span>{{errorMessage}}</span>
            </div>
        </div>
        <div class="login_button" :class="{buttonGong:role==2}" @click="submit">登 陆</div>
        <div class="sign_forget" :class="{activeRole:role==2}">
            <a class="sign" href="">免费注册</a>
            <a class="forget" href="">忘记密码</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            role:1,
            userName:'',
            password:'',
            userActive:false,
            passwordActive:false,
            clientWidth:'',
            clientHeight:'',
            errorMessage:'',
        }
    },
    methods:{
        changeRole(role){
            this.role=role;
            this.$emit('stopBannerSlide',role);
        },
        submit(){
            if(!this.userName&&!this.password){
                this.errorMessage='请输入账号名和密码';
                this.$refs.user.focus();
            }else if(!this.userName){
                this.errorMessage='请输入账号名';
                this.$refs.user.focus();
            }else if(!this.password){
                this.errorMessage='请输入密码';
                this.$refs.password.focus();
            }else{
                this.errorMessage='';
            }
        },
    },
    mounted(){
        window.onresize=(ev)=>{
            this.clientWidth=document.documentElement.clientWidth;
            this.clientHeight=document.documentElement.clientHeight;
        }
        window.onresize();
    },
    computed:{
        roleText(){
            return this.role==1?'客户会员登录':'供应商会员登录'
        }
    }
}
</script>
<style lang="scss" scoped>
    .login_box{
        width:350px;
        height: 391px;
        box-sizing: border-box;
        position: absolute;
        left: 840px;
        top:70px;
        background: #fff;
        box-shadow: 0 0 7px rgba(134,134,134, 0.45);
        &.clientWidth{
            left: 420px;
        }
        &.clientHeight{
            top: 10px;
        }
        .login_role{
            display: flex;
            line-height: 64px;
            background: #dbd8d3;
            cursor: pointer;
            .item{
                flex: 1;
                text-align: center;
                font-size: 22px;
                color: #868686;
                &.custorm.active{
                    background: #ff9829;
                    color:#fff;
                }
                &.gong.active{
                    background: #ffd934;
                    color:#fff;
                }
            }
        }
        .role_text{
            font-weight: 700;
            font-size: 20px;
            line-height: 28px;
            padding:18px 0 20px;
            text-align: center;
            &.active1{
                color: #F29F33;
            }
            &.active2{
                color: #FFC11E;
            }
        }
        .login_form{
            width:300px;
            height:155px;
            margin-left:25px;
            .user_item{
                height: 40px;
                border: 1px solid rgb(219,216,211);
                display: flex;
                &.userActive{
                    box-shadow: 0 0 5px #D7D7D7;
                }
                &.user_name{
                    margin-bottom: 35px;
                }
            }
            .icon_before{
                width:50px;
                height: 100%;
                background: rgb(219,216,211);
            }
            .input{
                flex: 1;
                border:none;
                line-height: 40px;
               /deep/ .el-input__inner{
                    border: none;
                    padding-left:7px;
                    font-size: 14px;
                    color: rgb(0, 0, 0);
                }
                .icon-close{
                    font-size: 20px;
                    cursor: pointer;
                }
            }
        }
        .login_button{
            width:300px;
            line-height: 40px;
            border-radius:5px;
            text-align: center;
            cursor: pointer;
            margin-left:25px;
            font-weight: 700;
            font-size: 17px;
            color:#fff;
            background: #ff9829;
            &:hover{
                background: rgba(242,159,51,0.8);
            }
            &.buttonGong{
                background: #ffd934;
                &:hover{
                    background: rgba(252,217,51,0.8);
                }
            }
        }
        .sign_forget{
            padding:26px 25px 0px;
            text-align: right;
            color: #949494;
            font-size: 0px;
            a{
                font-size: 14px;
                &:hover{
                   color: rgb(242, 159, 51);
                }
            }
            &.activeRole a:hover{
                color: rgb(252, 217, 51);
            }
            .forget{
                margin-left:20px;
            }
        }
        .error_message{
            font-size: 14px;
            color: #FF6C72;
            line-height: 34px;
            .icon{
                margin-left: 20px;
                margin-right: 20px;
            }
        }
    }
</style>

