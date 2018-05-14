<template>
    <div class="email_container">
        <div class="form_item">
            <div class="label">重新绑定邮箱</div>
            <div class="item_content">{{form.email}}</div>
        </div>
        <div class="edit_item" :class="{show:isEdit}" v-if="isEdit">
            <p class="tel_text">请获取13710353888手机验证码</p>
            <div class="form_item">
                <div class="item_content">
                    <el-input :maxlength="6" @blur="blurIdentifyCode"  v-model="form.code" placeholder="输入验证码">
                        <i slot="suffix" @click="getCode" class="identifyCode" :class="{getCoding:codeTime>0&&codeTime<120,getCoded:codeTime==0}">{{codeText}}</i>
                    </el-input>
                    <div class="error_message" v-if="codeErrorMessage">
                        <i class="icon el-icon-remove"></i>
                        <span>{{codeErrorMessage}}</span>
                    </div>
                </div>
            </div>
            <p class="tel_text">请输入新邮箱地址</p>
            <div class="form_item">
                <div class="item_content">
                    <el-input @blur="blurEmail"  v-model="form.newEmail" placeholder="输入正确的邮箱地址"></el-input>
                    <div class="error_message" v-if="emailErrorMessage">
                        <i class="icon el-icon-remove"></i>
                        <span>{{emailErrorMessage}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="form_item">
            <span  v-if="isEdit" @click="cancel" class="button cancel">取消</span>
            <span  v-if="isEdit" class="button sure">确认绑定</span>
            <span  v-if="!isEdit" @click="clickEdit" class="button bind" :class="{hide:isEdit}">重新绑定</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                email:'354480928@163.com',
                code:'',
                newEmail:''
            },
            isEdit:false,
            emailErrorMessage:'',
            codeErrorMessage:'',
            codeText:'获取验证码',
            codeTime:120,
        }
    },
    methods:{
        getCode(){//获取验证码
            if(this.codeTime<120&&this.codeTime>0) return;
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
        blurIdentifyCode(){
          if(!this.form.code){
              this.codeErrorMessage='请输入验证码！';
              return false;
          }else if(this.form.code.length<6){
              this.codeErrorMessage='验证码长度不够！'||'验证码不正确！';
              return false;
          } else{
              this.codeErrorMessage='';
              return true
          }
        },
        blurEmail(){
            var reg=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if(!reg.test(this.form.newEmail)){
               this.emailErrorMessage= '该邮箱将作为租赁服务的重要联系工具，请务必正确输入！';
               return false
            }else{
                this.emailErrorMessage='';
                return true
            }
        },
        clickEdit(){
            this.isEdit=true;
        },
        cancel(){
            this.isEdit=false;
        },
    }
}
</script>
<style lang="scss" scoped>
@import '../../../css/formItem.scss';
    .email_container{
        padding-left:60px;
        padding-top:40px;
        height:350px;
        .item_content{
            position: relative;
        }
        .identifyCode{
            font-style: normal;
            width:115px;
            line-height: 24px;
            color: #F29F33;
            font-size:14px;
            display: inline-block;
            border-radius: 5px;
            margin-top: 2px;
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
        .error_message{
            position: absolute;
            left: 100%;
            font-size: 13px;
            color: #FF6C72;
            top:0;
            height:100%;
            display: flex;
            align-items: center;
            width: 160%;
            margin-left: 15px;
            .icon{
                margin-right: 5px;
            }
        }
        .item_content .el-input{
            width:250px;
        }
        .label{
            width:120px;
        }
        .button{
            width:80px;
            // opacity:1;
            // transition: all 1s;
            // &.hide{
            //     opacity:0;
            //     // height:0px ;
            //     // overflow: hidden;
            // }
        }
        .tel_text{
            font-size:14px;
            color: #292B2C;
            line-height: 40px;
        }
        .edit_item{
            // opacity: 0;
            // height:0px;
            // overflow: hidden;
            // transition-delay: 1s;
            // &.show{
            //     transition: all 1s;
            //     opacity: 1;
            //     height:auto;
            // }
        }
    }
    
</style>
