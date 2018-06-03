<template>
    <div class="contact_info">
        <stepBar :step="2" :role="role"></stepBar>
        <div class="form">
            <div class="input_box" :class="{active:activeContactName}">
                <div class="label">联系人</div>
                <el-input class="input" v-model="contactName" @focus="activeContactName=true" @blur="blurContactName" placeholder="请输入联系人姓名">
                    <i slot="suffix" class="iconfont icon-close" @click="contactName=''" v-if="contactName"></i>
                </el-input>
                <div class="error_message" v-if="contactNameErrorMessage">
                    <i class="icon el-icon-error"></i>
                    <span>{{contactNameErrorMessage}}</span>
                </div>
            </div>
            <div class="input_box" :class="{active:activePositionJob}">
                <div class="label">职位</div>
                <el-input class="input" v-model="positionJob" @focus="activePositionJob=true" @blur="blurPositionJob" placeholder="请输入在贵公司所担任职位">
                    <i slot="suffix" class="iconfont icon-close" @click="positionJob=''" v-if="positionJob"></i>
                </el-input>
                <div class="error_message" v-if="positionJobErrorMessage">
                    <i class="icon el-icon-error"></i>
                    <span>{{positionJobErrorMessage}}</span>
                </div>
            </div>
            <div class="input_box sex_box" >
                <div class="label">性别</div>
                <el-select v-model="sex" placeholder="请选择">
                    <el-option
                    v-for="item in sexOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <div class="error_message sex_error_message" v-if="sexErrorMessage">
                    <i class="icon el-icon-error"></i>
                    <span>{{sexErrorMessage}}</span>
                </div>
            </div>
            <div class="input_box" :class="{active:activeEmail}">
                <div class="label">邮箱</div>
                <el-input class="input" v-model="email" @focus="activeEmail=true" @blur="blurEmail" placeholder="请务必输入正确的邮箱地址">
                    <i slot="suffix" class="iconfont icon-close" @click="email=''" v-if="email"></i>
                </el-input>
                <div class="error_message" v-if="emailErrorMessage">
                    <i class="icon el-icon-error"></i>
                    <span>{{emailErrorMessage}}</span>
                </div>
            </div>
            <div class="footer">
                <span class="button" @click="updateStep">提交</span>
            </div>
        </div>
    </div>
</template>
<script>
import stepBar from './stepBar';
import {customerModule} from '../../../api/main';
export default {
    props:{
        role:{

        }
    },
    data(){
        return {
            sexOption:[
                {
                    value:'0',
                    label:'男'
                },
                {
                    value:'1',
                    label:'女'
                }
            ],
            sex:'',
            sexErrorMessage:'',

            contactName:'',
            activeContactName:false,
            contactNameErrorMessage:'',

            positionJob:'',
            activePositionJob:false,
            positionJobErrorMessage:'',

            email:'',
            activeEmail:false,
            emailErrorMessage:'',
        }
    },
    methods:{
        blurContactName(){
            this.activeContactName=false;
            if(!this.contactName){
               this.contactNameErrorMessage= '请输入联系人姓名！';
               return false
            }else{
                this.contactNameErrorMessage='';
                return true
            }
        },
        blurPositionJob(){
            this.activePositionJob=false;
            if(!this.positionJob){
               this.positionJobErrorMessage= '请输入在贵公司所担任职位！';
               return false
            }else{
                this.positionJobErrorMessage='';
                return true
            }
        },
        blurEmail(){
            this.activeEmail=false;
            var reg=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if(!reg.test(this.email)){
               this.emailErrorMessage= '该邮箱将作为租赁服务的重要联系工具，请务必正确输入！';
               return false
            }else{
                this.emailErrorMessage='';
                return true
            }
        },
        blurSex(){
            if(!this.sex){
               this.sexErrorMessage= '请选择性别！';
               return false
            }else{
                this.sexErrorMessage='';
                return true
            }
        },
        saveOrderCustomerInfo(){//保存客户联系人信息
            let parmas={
                contacts:this.contactName,
                position:this.positionJob,
                sex:this.sex,
                email:this.email
            }
            customerModule.saveOrderCustomerInfo(parmas).then(res=>{
                if(res.statusCode==1){
                    this.submitedAfter();
                }
            })
        },
        updateStep(){//注册到此处 需要判断是什么角色注册的
            // this.submitedAfter()
            if(this.blurContactName()&&this.blurPositionJob()&&this.blurSex()&&this.blurEmail()){
                if(this.role=='client'){
                    this.saveOrderCustomerInfo();
                }
            }
        },
        submitedAfter(){//接口提交成功之后
            localStorage.setItem('role',this.role);
            if(this.role=='client'){
                window.location.href="main.html#/sign/client?cp=startUse";
            }else if(this.role=='supplier'){
                window.location.href="main.html#/sign/supplier?cp=startUse";
            }
        }
    },
    components:{
        stepBar
    }
}
</script>
<style lang="scss" scoped>
    .form{
        padding-top:50px;
    }
    .input_box{
        width:284px;
        margin-left: calc(50% - 142px);
        display: flex;
        height: 40px;
        align-items: center;
        border-radius: 5px;
        margin-bottom: 25px;
        &.sex_box{
            width:108px;
        }
        .label{
            font-size: 16px;
            color: #515151;
            position: absolute;
            margin-left: -160px;
            width: 160px;
            text-align: right;
            padding-right: 15px;
            box-sizing: border-box;
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
                font-size:20px;
                color:#86837e;
            }
            /deep/ .el-input__suffix{
                right:0; 
            }
            .icon-close{
                line-height: 40px;
                margin-right:10px;
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
            &.sex_error_message{
                margin-left: 190px;
            }
        }
    }
    .footer{
        text-align: center;
        padding:20px 0px 50px;
        .button{
            cursor: pointer;
            display: inline-block;
            font-size: 18px;
            color: rgba(255, 255, 255, 0.9);
            width:110px;
            line-height: 36px;
            background: #ff9829;
            border-radius: 5px;
            &:hover{
                background:  #ffa64c;
            }
        }
    }
</style>
