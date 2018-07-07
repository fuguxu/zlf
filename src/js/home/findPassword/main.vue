<template>
    <div class="find_pass_word">
        <div class="content">
            <div class="detail">
                <div class="item img">
                    <img src="../../../img/safe_icon.png" alt="">
                </div>
                <div class="item">
                    <el-input v-model="form.mobile" :maxlength="11" @blur="blurMobile" placeholder="请输入手机号"></el-input>
                    <div class="error_message" v-if="mobileErrorMessage">
                        <i class="icon el-icon-error"></i>
                        <span>{{mobileErrorMessage}}</span>
                    </div>
                </div>
                <div class="item">
                    <el-input class="input"  @blur="blurCode" v-model="form.code" :maxlength="6"   placeholder="请输入手机验证码">
                        <i slot="suffix"  class="code button" @click="getCode" :class="{getCoding:codeTime>0&&codeTime<120,getCoded:codeTime==0}">{{codeText}}</i>
                    </el-input>
                    <div class="error_message" v-if="codeErrorMessage">
                        <i class="icon el-icon-error"></i>
                        <span>{{codeErrorMessage}}</span>
                    </div>
                </div>
                <div class="item">
                     <div class="label font16">请输入新密码</div>
                    <el-input type="password" v-model="form.password" @blur="blurpassWord" placeholder="请输入你的密码"></el-input>
                    <div class="error_message" v-if="passWordErrorMessage">
                        <i class="icon el-icon-error"></i>
                        <span>{{passWordErrorMessage}}</span>
                    </div>
                </div>
                 <div class="item">
                    <el-input type="password" v-model="form.password2" @blur="blurpassWord2"  placeholder="请再次输入你的密码"></el-input>
                    <div class="error_message" v-if="passWordErrorMessage2">
                        <i class="icon el-icon-error"></i>
                        <span>{{passWordErrorMessage2}}</span>
                    </div>
                </div>
                <div class="item">
                    <span @click="changePwd" class="button confirm font16">确认</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
    data(){
        return {
            form:{
                mobile:'',
                code:'',
                password:'',
                password2:''
            },
            mobileErrorMessage:'',
            codeErrorMessage:'',
            passWordErrorMessage:'',
            passWordErrorMessage2:'',
            codeTime:0,
            codeText:'获取验证码',
            setTime:'',
        }
    },
    methods:{
        blurMobile(){//验证手机号
            if(!this.form.mobile){
              this.mobileErrorMessage='请输入手机号!';
              return false;
          }else if(''+(+this.form.mobile)=='NaN'){
              this.mobileErrorMessage='您输入的手机号码格式不正确!';
              return false;
          }
          else if(this.form.mobile.length<11){
              this.mobileErrorMessage='手机号长度不够!';
              return false;
          }
          else{
              this.mobileErrorMessage='';
              return true
          }
        },
        getVerification(){//获取验证码接口
            customerModule.verificationPass({
                mobile:this.form.mobile
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.setTime= setInterval(()=>{
                        if(this.codeTime==0){
                            this.codeText='重新获取验证码';
                            clearInterval(this.setTime);
                        }else{
                            this.codeTime--;
                            this.codeText=this.codeTime+'秒后可重发';
                        }
                    },1000)
                }
            })
      },
      getCode(){//获取验证码
          if(this.codeTime<120&&this.codeTime>0) return;
          if(this.blurMobile()){
                AppUtil.checkUserLoginName(this.form.mobile,(data=>{
                    if(data){
                        this.mobileErrorMessage='';
                        this.getVerification();
                        if(this.codeTime<=0){
                            this.codeTime=120;
                        }
                    }else{
                       this.mobileErrorMessage= '该手机号还未注册!';
                    }
                }))

          }
      },
        blurCode(){
            if(!this.form.code){
                this.codeErrorMessage='请输入验证码！';
                return false;
            }else if(this.form.code.length<6){
                this.codeErrorMessage='验证码长度不够！';
                return false;
            }else{
                this.codeErrorMessage='';
                return true
            }
        },
        blurpassWord(){
          var reg= /(?!^(\d+|[a-zA-Z]+|[!#%]+)$)^[A-Za-z0-9!#%]{6,13}$/
          if(!this.form.password){
              this.passWordErrorMessage="请输入密码！"
              return false
          }else if(this.form.password.length<6){
              this.passWordErrorMessage="密码长度不够！"
              return false
          }else if(!reg.test(this.form.password)){
              this.passWordErrorMessage="密码必须在6～12位之间，且至少包含英文字母、数字(0到9)及符号(如: !, #, %)中的任意两种！";
              return false
          }else{
              this.passWordErrorMessage="";
              return true;
          }
      },
      blurpassWord2(){
          if(this.form.password!=this.form.password2){
              this.passWordErrorMessage2="两次密码不一致！"
              return false
          }else{
              this.passWordErrorMessage2="";
              return true;
          }
      },
      valate(){
          return this.blurMobile()&&this.blurCode()&&this.blurpassWord()&&this.blurpassWord2()
      },
      changePwd(){
          if(this.valate()){
              AppUtil.checkUserLoginName(this.form.mobile,(data=>{
                    if(data){
                        this.mobileErrorMessage='';
                        customerModule.changePwd(this.form).then(res=>{
                            if(res.statusCode=='1'){
                                AppUtil.message(this,'修改成功','success');
                                setTimeout(()=>{
                                    this.$router.push('/home');
                                },1500)
                            }else{
                                AppUtil.message(this,res.message,'error');
                            }
                        })
                    }else{
                       this.mobileErrorMessage= '该手机号还未注册!';
                    }
                }))
              
          } 
      }
    }
}
</script>
<style lang="scss" scoped>
    .find_pass_word{
        width:1160px;
        margin:0 auto;
        padding:20px 0px;
        .content{
            background: #fff;
            border-radius:6px;
            display: flex;
            justify-content: center;
            .detail{
                width:373px;
            }
        }
        .item{
            position: relative;
            margin-bottom: 23px;
            &.img{
                text-align: center;
                font-size: 0px;
                padding-top:50px;
                padding-bottom: 20px;
            }
            .label{
                line-height:30px;
            }
            .confirm{
                width:100%;
                line-height: 40px;
                text-align: center;
                margin:25px 0px 100px 0px;
            }
            .error_message{
                position: absolute;
                display: flex;
                align-items: center;
                left: 100%;
                bottom: 0;
                height: 40px;
                width:85%;
                .icon{
                    // margin:0 5px 0 15px;
                }
            }
        }
        .code{
            font-style: normal;
            width:124px;
            line-height: 40px;
            color: #fff;
            cursor: pointer;
            box-sizing: border-box;
            &.getCoding{
                color:rgba(102,102,102,1);
                background:rgba(240,240,240,1);
                &:hover{
                    background:rgba(240,240,240,1);
                }
            }
        }
        /deep/ .el-input__suffix{
            right:0; 
        }
    }
</style>
