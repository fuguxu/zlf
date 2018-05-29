<template>
    <div class="sign_form_container">
        <stepBar :step="1" :role="role"></stepBar>
        <div class="form">
            <div class="input_box" :class="{active:activeMember}">
                <div class="label">会员名</div>
                <el-input class="input" v-model="memberName" @focus="activeMember=true" @blur="blurmemberName" placeholder="请输入公司简称作为用户名">
                    <i slot="suffix" class="iconfont icon-close" @click="memberName=''" v-if="memberName"></i>
                </el-input>
                <div class="error_message" v-if="memberNameErrorMessage">
                    <i class="icon el-icon-error"></i>
                    <span>{{memberNameErrorMessage}}</span>
                </div>
            </div>
            <div class="input_box" :class="{active:activeUserName}">
                <div class="label">用户名</div>
                <el-input class="input" :maxlength="11" v-model="userName" @focus="activeUserName=true" @blur="bluruserName" placeholder="请输入常用手机号码作为用户名">
                    <i slot="suffix" class="iconfont icon-close" @click="userName=''" v-if="userName"></i>
                </el-input>
                <div class="error_message" v-if="userNameErrorMessage">
                    <i class="icon el-icon-error"></i>
                    <span>{{userNameErrorMessage}}</span>
                </div>
            </div>
            <div class="input_box" :class="{active:activeIdentifyCode}">
                <div class="label">手机验证码</div>
                <el-input class="input" :maxlength="6" v-model="identifyCode" @focus="activeIdentifyCode=true" @blur="blurIdentifyCode" placeholder="请输入验证码">
                    <i slot="suffix" @click="getCode" class="identifyCode" :class="{getCoding:codeTime>0&&codeTime<120,getCoded:codeTime==0}">{{codeText}}</i>
                </el-input>
                <div class="error_message" v-if="identifyCodeErrorMessage">
                    <i class="icon el-icon-error"></i>
                    <span>{{identifyCodeErrorMessage}}</span>
                </div>
            </div>
            <div class="input_box" :class="{active:activepassWord}">
                <div class="label">密码</div>
                <el-input class="input" type="password"  v-model="passWord" @focus="activepassWord=true" @blur="blurpassWord" placeholder="请输入你的密码">
                    <i slot="suffix" class="iconfont icon-close" @click="passWord=''" v-if="passWord"></i>
                </el-input>
                <div class="error_message" v-if="passWordErrorMessage">
                    <i class="icon el-icon-error"></i>
                    <span>{{passWordErrorMessage}}</span>
                </div>
            </div>
            <div class="input_box" :class="{active:activepassWord2}">
                <div class="label">确认密码</div>
                <el-input class="input" type="password"  v-model="passWord2" @focus="activepassWord2=true" @blur="blurpassWord2" placeholder="请输入你的密码">
                    <i slot="suffix" class="iconfont icon-close" @click="passWord2=''" v-if="passWord2"></i>
                </el-input>
                <div class="error_message" v-if="passWordErrorMessage2">
                    <i class="icon el-icon-error"></i>
                    <span>{{passWordErrorMessage2}}</span>
                </div>
            </div>
            <div class="sign_button">
                <div class="button" @click="submitSign">立即注册</div>
            </div>
        </div>
        <stepDialog :role="role" :visible.sync="visible" @nextStep="nextStep" :stepComponent="stepComponent"></stepDialog>
    </div>
</template>
<script>
import stepBar from './stepBar';
import stepDialog from './stepDialog';
import {customerModule} from '../../../api/main';
export default {
    props:{
        stepComponent:{

        },
        role:{

        },
        companyInfo:{
            default(){
                return {}
            }
        }
    },
  data(){
      return {
          memberName:'',
          activeMember:false,
          memberNameErrorMessage:'',

          userName:'',
          activeUserName:false,
          userNameErrorMessage:'',

          identifyCode:'',
          activeIdentifyCode:false,
          identifyCodeErrorMessage:'',
          codeText:'获取验证码',
          codeTime:120,

          passWord:'',
          activepassWord:false,
          passWordErrorMessage:'',

          passWord2:'',
          activepassWord2:false,
          passWordErrorMessage2:'',

          visible:false
      }
  },
  methods:{
      blurmemberName(){//失去焦点 带验证
          this.activeMember=false;
          if(!this.memberName){
              this.memberNameErrorMessage='请输入公司简称！';
              return false;
          }else{
              this.memberNameErrorMessage='';
              return true
          }
      },
      bluruserName(){
          this.activeUserName=false;
          if(!this.userName){
              this.userNameErrorMessage='请输入常用手机号！';
              return false;
          }else if(this.userName.length<11){
              this.userNameErrorMessage='您输入的手机号码长度不够！';
              return false;
          }
          else{
              this.userNameErrorMessage='';
              return true
          }
      },
      blurIdentifyCode(){
          this.activeIdentifyCode=false;
          if(!this.identifyCode){
              this.identifyCodeErrorMessage='请输入验证码！';
              return false;
          }else if(this.identifyCode.length<6){
              this.identifyCodeErrorMessage='验证码长度不够！'||'验证码不正确！';
              return false;
          }
          else{
              this.identifyCodeErrorMessage='';
              return true
          }
      },
      getVerification(){//获取验证码接口
            customerModule.getVerification({
                mobile:this.userName
            })
      },
      getCode(){//获取验证码
        if(this.codeTime<120&&this.codeTime>0) return;
        this.getVerification();
        if(this.codeTime<=0){
            this.codeTime=120;
        }
        var set= setInterval(()=>{
             if(this.codeTime==0){
                 this.codeText='重新获取验证码';
                 clearInterval(set);
             }else{
                this.codeTime--;
                this.codeText=this.codeTime+'秒后可重发';
             }
         },1000)
      },
      blurpassWord(){
          this.activepassWord=false;
          var reg= /(?!^(\d+|[a-zA-Z]+|[!#%]+)$)^[A-Za-z0-9!#%]{6,13}$/
          if(!this.passWord){
              this.passWordErrorMessage="请输入密码！"
              return false
          }else if(this.passWord.length<6){
              this.passWordErrorMessage="密码长度不够！"
              return false
          }else if(!reg.test(this.passWord)){
              this.passWordErrorMessage="密码必须在6～12位之间，且至少包含英文字母、数字(0到9)及符号(如: !, #, %)中的任意两种！";
              return false
          }else{
              this.passWordErrorMessage="";
              return true;
          }
      },
      blurpassWord2(){
          this.activepassWord2=false;
          if(this.passWord!=this.passWord2){
              this.passWordErrorMessage2="两次密码不一致！"
              return false
          }else{
              this.passWordErrorMessage2="";
              return true;
          }
      },
      submitSign(){//点击注册
      console.log(this.companyInfo)
    //   this.visible=true;
        if(this.blurmemberName()&&this.bluruserName()&&this.blurIdentifyCode()&&this.blurpassWord()&&this.blurpassWord2()){
              let parmars={
                  userAbbr:this.memberName,
                  loginName:this.userName,
                  code:this.identifyCode,
                  loginPwd:this.passWord,
                  
              }
              console.log(this.role)
              if(this.role=='client'){
                  this.registerCustorm({...this.companyInfo,...parmars});
              }else{
                  this.registerSupplier({...this.companyInfo,...parmars});
              }
        }
      },
      registerCustorm(parmars){//客户注册
         customerModule.registerCustorm(parmars).then(res=>{
             if(res.statusCode==1){
                 localStorage.setItem('role',this.role);
                 this.visible=true;
             }else{
                 
             }
         })   
      },
      registerSupplier(parmars){//供应商注册
         customerModule.registerSupplier(parmars).then(res=>{
             if(res.statusCode==1){
                 localStorage.setItem('role',this.role);
                 this.visible=true;
             }
         })  
      },
      nextStep(){//到完善联系人信息一步
        if(this.role=='client'){
            this.$emit('updateStep',this.stepComponent);
        }else if(this.role=='supplier'){//供应商还有一个选择供应商类型的一步 再到联系人信息一步
            this.$emit('updateStep','kindSupplier');
        }
        
      }
  },
  mounted(){
      
  },
  components:{
      stepBar,
      stepDialog
  }
}
</script>
<style lang="scss" scoped>
    .form{
        padding-top:50px;
        .input_box{
            width:376px;
            margin-left: calc(50% - 189px);
            display: flex;
            height: 40px;
            align-items: center;
            border-radius: 5px;
            margin-bottom: 25px;
            .label{
                font-size: 16px;
                color: #515151;
                width:86px;
                line-height: 36px;
                text-align: center;
                border-right: 1px solid #dbd8d3;
            }
            .input{
                flex: 1;
                font-size: 15px;
                .icon{
                    width:40px;
                    height:40px;
                    line-height: 40px;
                    cursor: pointer;
                    background: #edebe9;
                    font-size:12px;
                    color:#86837e;
                }
                /deep/ .el-input__suffix{
                    right:0; 
                }
                .icon-close{
                    line-height: 40px;
                    margin-right:10px;
                    font-size:12px;
                }
                .identifyCode{
                    font-style: normal;
                    width:115px;
                    line-height: 28px;
                    color: #F29F33;
                    font-size:14px;
                    display: inline-block;
                    margin-top: 5px;
                    cursor: pointer;
                    box-sizing: border-box;
                    border:1px solid #ffe9d3;
                    &:hover{
                        background: #ffe9d3;
                    }
                    &.getCoded{
                        color:#ff6c72;
                    }
                    &.getCoding{
                        color:rgb(174,174,174);
                        &:hover{
                            background: #fff;
                        }
                    }
                }
            }
            .error_message{
                position: absolute;
                left: 100%;
                font-size: 13px;
                color: #FF6C72;
                height:100%;
                display: flex;
                align-items: center;
                width: 88%;
                margin-left: 15px;
                .icon{
                    margin-right: 5px;
                }
            }
        }
        .sign_button{
            text-align: center;
            padding:20px 0px 50px;
            .button{
                cursor: pointer;
                display: inline-block;
                font-size: 18px;
                color: rgba(255, 255, 255, 0.9);
                width:130px;
                line-height: 40px;
                background: #ff9829;
                border-radius: 5px;
                &:hover{
                  background:  #ffa64c;
                }
            }
        }
    }
</style>
