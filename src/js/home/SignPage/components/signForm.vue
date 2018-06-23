<template>
    <div class="sign_form_container">
        <stepBar :step="1" :role="role"></stepBar>
        <div class="form">
            <div class="input_box" :class="{active:activeMember}">
                <div class="label">昵称</div>
                <el-input class="input" v-model="form.userAbbr" @focus="activeMember=true" @blur="blurmemberName" placeholder="请输入公司简称作为昵称">
                    <i slot="suffix" class="iconfont icon-close" @click="form.userAbbr=''" v-if="form.userAbbr"></i>
                </el-input>
                <div class="error_message" v-if="memberNameErrorMessage">
                    <i class="icon el-icon-error"></i>
                    <span>{{memberNameErrorMessage}}</span>
                </div>
            </div>
            <div class="input_box" :class="{active:activeUserName}">
                <div class="label">用户名</div>
                <el-input class="input" :maxlength="11" v-model="form.loginName" @focus="activeUserName=true" @blur="bluruserName" placeholder="请输入常用手机号码作为用户名">
                    <i slot="suffix" class="iconfont icon-close" @click="form.loginName=''" v-if="form.loginName"></i>
                </el-input>
                <div class="error_message" v-if="userNameErrorMessage">
                    <i class="icon el-icon-error"></i>
                    <span>{{userNameErrorMessage}}</span>
                </div>
            </div>
            <div class="input_box" :class="{active:activeIdentifyCode}">
                <div class="label">验证码</div>
                <el-input class="input" :maxlength="6" v-model="form.code" @focus="activeIdentifyCode=true" @blur="blurIdentifyCode" placeholder="请输入验证码">
                    <i slot="suffix" @click="getCode" class="code button" :class="{getCoding:codeTime>0&&codeTime<120,getCoded:codeTime==0}">{{codeText}}</i>
                </el-input>
                <div class="error_message" v-if="identifyCodeErrorMessage">
                    <i class="icon el-icon-error"></i>
                    <span>{{identifyCodeErrorMessage}}</span>
                </div>
            </div>
            <div class="input_box" :class="{active:activepassWord}">
                <div class="label">密码</div>
                <el-input class="input" type="password"  v-model="form.loginPwd" @focus="activepassWord=true" @blur="blurpassWord" placeholder="请输入你的密码">
                    <i slot="suffix" class="iconfont icon-close" @click="form.loginPwd=''" v-if="form.loginPwd"></i>
                </el-input>
                <div class="error_message" v-if="passWordErrorMessage">
                    <i class="icon el-icon-error"></i>
                    <span>{{passWordErrorMessage}}</span>
                </div>
            </div>
            <div class="input_box" :class="{active:activepassWord2}">
                <div class="label">确认密码</div>
                <el-input class="input" type="password"  v-model="passWord2" @focus="activepassWord2=true" @blur="blurpassWord2" placeholder="请再次输入密码">
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
        <!-- <stepDialog :role="role" :visible.sync="visible" @nextStep="nextStep" :stepComponent="stepComponent"></stepDialog> -->
    </div>
</template>
<script>
import stepBar from './stepBar';
// import stepDialog from './stepDialog';
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
          activeMember:false,
          memberNameErrorMessage:'',

          activeUserName:false,
          userNameErrorMessage:'',

          activeIdentifyCode:false,
          identifyCodeErrorMessage:'',
          codeText:'获取验证码',
          codeTime:120,

          activepassWord:false,
          passWordErrorMessage:'',

          passWord2:'',
          activepassWord2:false,
          passWordErrorMessage2:'',

          form:{
              userAbbr:'',
              loginName:'',
              code:'',
              loginPwd:'',
          },

        //   visible:false,
          setTime:null
      }
  },
  methods:{
      blurmemberName(){//失去焦点 带验证
          this.activeMember=false;
          if(!this.form.userAbbr){
              this.memberNameErrorMessage='请输入公司简称！';
              return false;
          }else{
              this.memberNameErrorMessage='';
              return true
          }
      },
      checkMemberName(cb){//校验会员名 不能重复
            customerModule.checkInfo({
                userAbbr:this.form.userAbbr
            }).then(res=>{
                if(res.data){
                    this.memberNameErrorMessage='该简称已存在，请重新输入！';
                }else{
                    cb();
                }
            })
      },
      bluruserName(){
          this.activeUserName=false;
          if(!this.form.loginName){
              this.userNameErrorMessage='请输入常用手机号！';
              return false;
          }else if(this.form.loginName.length<11){
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
          if(!this.form.code){
              this.identifyCodeErrorMessage='请输入验证码！';
              return false;
          }else if(this.form.code.length<6){
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
                mobile:this.form.loginName
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
        this.getVerification();
        if(this.codeTime<=0){
            this.codeTime=120;
        }
      },
      blurpassWord(){
          this.activepassWord=false;
          var reg= /(?!^(\d+|[a-zA-Z]+|[!#%]+)$)^[A-Za-z0-9!#%]{6,13}$/
          if(!this.form.loginPwd){
              this.passWordErrorMessage="请输入密码！"
              return false
          }else if(this.form.loginPwd.length<6){
              this.passWordErrorMessage="密码长度不够！"
              return false
          }else if(!reg.test(this.form.loginPwd)){
              this.passWordErrorMessage="密码必须在6～12位之间，且至少包含英文字母、数字(0到9)及符号(如: !, #, %)中的任意两种！";
              return false
          }else{
              this.passWordErrorMessage="";
              return true;
          }
      },
      blurpassWord2(){
          this.activepassWord2=false;
          if(this.form.loginPwd!=this.passWord2){
              this.passWordErrorMessage2="两次密码不一致！"
              return false
          }else{
              this.passWordErrorMessage2="";
              return true;
          }
      },
      submitSign(){//点击注册
      this.nextStep();
    //   console.log(this.companyInfo)
    //   this.visible=true;
        if(this.blurmemberName()&&this.bluruserName()&&this.blurIdentifyCode()&&this.blurpassWord()&&this.blurpassWord2()){
               this.checkMemberName(this.postData);
        }
      },
      postData(){//发送请求
        if(this.role=='client'){
            this.registerCustorm({...this.companyInfo,...this.form});
        }else{
            this.registerSupplier({...this.companyInfo,...this.form});
        }
      },
      registerCustorm(parmars){//客户注册
         customerModule.registerCustorm(parmars).then(res=>{
             if(res.statusCode=='1'){
                 localStorage.setItem('role',this.role);
                 this.nextStep();
                //  this.visible=true;
             }else{
                 AppUtil.message(this,res.message,'warning');
             }
         })   
      },
      registerSupplier(parmars){//供应商注册
         customerModule.registerSupplier(parmars).then(res=>{
             if(res.statusCode=='1'){
                 localStorage.setItem('role',this.role);
                 this.nextStep();
                //  this.visible=true;
             }else{
                 AppUtil.message(this,res.message,'warning');
                 
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
    //   stepDialog
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
            margin-bottom: 16px;
            .label{
                width:80px;
                line-height: 40px;
                text-align: right;
                padding-right: 17px;
                box-sizing: border-box;
                // border-right: 1px solid #dbd8d3;
            }
            .input{
                flex: 1;
                // font-size: 15px;
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
                }
                .code{
                    font-style: normal;
                    width:124px;
                    line-height: 40px;
                    color: #fff;
                    cursor: pointer;
                    box-sizing: border-box;
                    &:hover{
                    }
                    &.getCoded{
                    }
                    &.getCoding{
                        color:rgba(102,102,102,1);
                        background:rgba(240,240,240,1);
                        &:hover{
                            background:rgba(240,240,240,1);
                        }
                    }
                }
            }
            .error_message{
                position: absolute;
                left: 100%;
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
                font-size: 16px;
                color: rgba(255, 255, 255, 1);
                width:296px;
                line-height: 40px;
                margin-left: 80px;
            }
        }
    }
</style>
