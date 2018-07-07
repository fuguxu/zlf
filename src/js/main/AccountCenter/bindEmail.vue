<template>
    <div class="email_container">
        <div class="form_item">
            <div class="label">重新绑定邮箱</div>
            <div class="item_content">{{form.email}}</div>
        </div>
        <transition name="fade" @before-enter="beforeEnter">
            <div class="edit_item"  v-if="isEdit">
                <p class="tel_text">请获取{{form.loginName}}手机验证码</p>
                <div class="form_item">
                    <div class="item_content">
                        <el-input :maxlength="6" @blur="blurIdentifyCode"  v-model="code" placeholder="输入验证码">
                            <i slot="suffix" @click="getCode" class="identifyCode button" :class="{getCoding:codeTime>0&&codeTime<120,getCoded:codeTime==0}">{{codeText}}</i>
                        </el-input>
                        <div class="error_message" v-if="codeErrorMessage">
                            <i class="icon el-icon-error"></i>
                            <span>{{codeErrorMessage}}</span>
                        </div>
                    </div>
                </div>
                <p class="tel_text">请输入新邮箱地址</p>
                <div class="form_item">
                    <div class="item_content">
                        <el-input @blur="blurEmail"  v-model="newEmail" placeholder="输入正确的邮箱地址"></el-input>
                        <div class="error_message" v-if="emailErrorMessage">
                            <i class="icon el-icon-error"></i>
                            <span>{{emailErrorMessage}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <div class="form_item">
            <transition name="fade" @before-enter="beforeEnterButton">
                <span v-if="isEdit">
                    <span  @click="cancel" class="button cancel">取消</span>
                    <span  @click="sureBind" class="button sure">确认绑定</span>
                </span>
             </transition>
             <transition name="fade">
                <span  v-if="!isEdit" @click="clickEdit" class="button bind" >重新绑定</span>
             </transition>
        </div>
    </div>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
    data(){
        return {
            form:{   
            },
            newEmail:'',
            code:'',
            isEdit:false,
            emailErrorMessage:'',
            codeErrorMessage:'',
            codeText:'获取验证码',
            codeTime:120,
            setTime:null
        }
    },
    methods:{
        beforeEnter(el){
            el.style.height=0+'px';
            setTimeout(()=>{
                el.style.height='auto';
            },800)
        },
        beforeEnterButton(el){
            el.style.width=0+'px';
            setTimeout(()=>{
                el.style.width='auto';
            },800)
        },
        initData(){
            this.newEmail='';
            this.code='';
            clearInterval(this.setTime);
            this.codeText='获取验证码';
            this.codeTime=120;
            this.emailErrorMessage='';
            this.codeErrorMessage='';
        },
        getCode(){//获取验证码
            if(this.codeTime<120&&this.codeTime>0) return;
            if(this.codeTime<=0){
                this.codeTime=120;
            }
            this.getVerification();//调接口
        },
        getVerification(){//获取验证码接口
            customerModule.verificationMail({
                mobile:this.form.loginName
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.codeErrorMessage='';
                    this.setTime= setInterval(()=>{
                        if(this.codeTime==0){
                            this.codeText='重新获取验证码';
                            clearInterval(this.setTime);
                        }else{
                            this.codeTime--;
                            this.codeText=this.codeTime+'秒后可重发';
                        }
                    },1000)
                }else{
                    this.codeErrorMessage='获取验证码失败，请重新获取！';
                }
            })
        },
        blurIdentifyCode(){
          if(!this.code){
              this.codeErrorMessage='请输入验证码！';
              return false;
          }
          else if(this.code.length<6){
              this.codeErrorMessage='验证码长度不够！'||'验证码不正确！';
              return false;
          } else{
              this.codeErrorMessage='';
              return true
          }
        },
        blurEmail(){
            var reg=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if(!reg.test(this.newEmail)){
               this.emailErrorMessage= '该邮箱是重要的联系工具，请务必正确输入！';
               return false
            }else{
                this.emailErrorMessage='';
                return true
            }
        },
        sureBind(){//确认绑定
            if(this.blurIdentifyCode()&&this.blurEmail()){
                this.changeMail();
            }
        },
        changeMail(){//重新绑定接口
            customerModule.changeMail({
                email:this.newEmail,
                code:this.code
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.isEdit=false;
                    this.codeErrorMessage='';
                    this.form.email=this.newEmail;
                    AppUtil.setCurrentUserInfo(this.form);
                    this.initData();
                }else{
                    this.codeErrorMessage=res.message;
                }
            })
        },
        clickEdit(){
            this.isEdit=true;
        },
        cancel(){
            this.isEdit=false;
            this.initData();
        },
    },
    created(){
        AppUtil.getCurrentUserInfo(user=>{
            this.form={...this.form,...user}
        })
    }
}
</script>
<style lang="scss" scoped>
@import '../../../css/formItem.scss';
    .email_container{
        padding-left:43px;
        padding-top:40px;
        height:350px;
        .item_content{
            position: relative;
        }
        .identifyCode{
            font-style: normal;
            width:120px !important;
            line-height: 40px;
            height:40px;
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
        /deep/ .el-input__suffix{
            right:0px;
        }
        .error_message{
            position: absolute;
            left: 100%;
            top:0;
            height:100%;
            display: flex;
            align-items: center;
            width: 160%;
            // margin-left: 15px;
            .icon{
                // margin-right: 5px;
            }
        }
        .item_content .el-input{
            width:296px;
        }
        .label{
            width:120px;
        }
        .button{
            width:148px;
            line-height: 40px;
        }
        .tel_text{
            line-height: 40px;
        }
        .edit_item{
            
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 0.8s;
    }
    .fade-enter-active{
        transition-delay: 0.8s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
    
</style>
