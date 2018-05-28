<template>
    <div class="login_box" @mouseleave="mouseleave">
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
                <!-- <div class="icon_before">

                </div> -->
                <el-input type="text" ref="user"  @focus="userActive=true" @blur="userActive=false" class="input user_input" v-model="userName" placeholder="请输入您的手机号">
                    <i slot="suffix" class="iconfont icon-close" @click="userName=''" v-if="userName"></i>
                </el-input>
            </div>
            <div class="user_item user_password" :class="{userActive:passwordActive}">
                <!-- <div class="icon_before">

                </div> -->
                <el-input type="password" ref="password" @focus="passwordActive=true" @blur="passwordActive=false" class="input password_input" v-model="password" placeholder="请输入您的密码">
                    <i slot="suffix" class="iconfont icon-close" @click="password=''" v-if="password"></i>
                </el-input>
            </div>
            <div class="error_message" v-if="errorMessage">
                <i class="icon el-icon-warning"></i>
                <span>{{errorMessage}}</span>
            </div>
        </div>
        <div class="login_button" :class="{buttonGong:role==2}" @click="submit">登录</div>
        <div class="sign_forget" :class="{activeRole:role==2}">
            <a class="sign" href="#/sign">免费注册</a>
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
            isChange:false
        }
    },
    methods:{
        changeRole(role){
            this.role=role;
            this.isChange=true;
            this.$emit('stopBannerSlide',role);
            this.userName='';
            this.password='';
            this.errorMessage='';
        },
        changeRoleByParent(role){
            this.role=role;
            this.userName='';
            this.password='';
        },
        mouseleave(){//点击过 鼠标移出 就让背景图循环
            if(this.isChange){
                this.$emit('startBannerSlide',this.role);
            }
            this.isChange=false;
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
        width:366px;
        box-sizing: border-box;
        position: absolute;
        right: 20px;
        top:165px;
        background: #fff;
        border-radius: 6px;
        box-shadow: 0 0 7px rgba(134,134,134, 0.45);
        // &.clientWidth{
        //     left: 420px;
        // }
        // &.clientHeight{
        //     top: 60px;
        // }
        .login_role{
            display: flex;
            line-height: 40px;
            background: #dbd8d3;
            cursor: pointer;
            border-top-left-radius: 6px;
            border-top-right-radius: 6px;
            .item{
                flex: 1;
                text-align: center;
                font-size: 16px;
                color: rgba(159,159,159,1);
                &.custorm{
                    border-top-left-radius: 6px;
                }
                &.gong{
                    border-top-right-radius: 6px;
                }
                &.active{
                    background: rgba(255, 166, 50, 1);
                    color:#fff;
                }
                // &.gong.active{
                //     background: #ffd934;
                //     color:#fff;
                // }
            }
        }
        .role_text{
            // font-weight: 700;
            font-size: 16px;
            line-height: 52px;
            // padding:18px 0 20px;
            text-align: center;
            color:rgba(102,102,102,1);
            // &.active1{
            //     color: #F29F33;
            // }
            // &.active2{
            //     color: #FFC11E;
            // }
        }
        .login_form{
            width:320px;
            padding-bottom: 30px;
            margin-left:23px;
            position: relative;
            .user_item{
                height: 40px;
                // border: 1px solid rgb(219,216,211);
                display: flex;
                border-radius: 4px;
                
                &.userActive{
                    box-shadow: 0 0 5px #D7D7D7;
                }
                &.user_name{
                    margin-bottom: 30px;
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
                    background:rgba(241,241,241,1);
                    &:-webkit-autofill {
                        -webkit-box-shadow:0 0 0px 1000px white inset;
                        background-color: rgba(241,241,241,1);
                        background-image: none;
                    }
                    &::-webkit-input-placeholder{
                        color:rgba(153,153,153,1);
                    }
                    &::-moz-placeholder{
                        color:rgba(153,153,153,1);
                    }
                    &:-ms-input-placeholder{
                        color:rgba(153,153,153,1);
                    }
                }
                .icon-close{
                    font-size: 12px;
                    cursor: pointer;
                }
            }
        }
        .login_button{
            width:318px;
            line-height: 40px;
            border-radius:5px;
            text-align: center;
            cursor: pointer;
            margin-left:24px;
            font-weight: 700;
            font-size: 16px;
            color:#fff;
            background: rgba(255, 166, 50, 1);
            &:hover{
                background: rgba(242,159,51,0.8);
            }
            // &.buttonGong{
            //     background: #ffd934;
            //     &:hover{
            //         background: rgba(252,217,51,0.8);
            //     }
            // }
        }
        .sign_forget{
            line-height: 48px;
            display: flex;
            justify-content: space-between;
            padding:0 23px;
            color: rgba(153,153,153,1);
            font-size: 0px;
            a{
                font-size: 14px;
                &:hover{
                   color: rgb(242, 159, 51);
                }
            }
            // &.activeRole a:hover{
            //     color: rgb(252, 217, 51);
            // }
            .forget{
                margin-left:20px;
            }
        }
        .error_message{
            font-size: 14px;
            color: rgba(255, 68, 68, 1);
            line-height: 34px;
            position: absolute;
            bottom: 0px;
            width:100%;
            .icon{
                // margin-left: 20px;
                margin-right: 7px;
            }
        }
    }
</style>

