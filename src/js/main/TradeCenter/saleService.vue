<template>
    <div class="sale">
        <div class="item_title font16">
            <div class="line"></div>
            <span>提交贵司售后服务对接人信息</span>
            <span v-if="!isEdit" @click="isEdit=true" class="button font14 update">修改</span>
        </div>
        <div class="form">
            <div class="form_item">
                <el-input :readonly="!isEdit" v-model="form.supplierAftersaleName" @blur="valiteUserName" placeholder="请输入售后服务对接人姓名">
                    <i slot="suffix" class="iconfont icon-close" @click="form.supplierAftersaleName=''" v-if="form.supplierAftersaleName&&isEdit"></i>
                </el-input>
                <div class="error_message" v-if="userNameErrorMessage">
                    <i class="icon el-icon-circle-close"></i>
                    <span>{{userNameErrorMessage}}</span>
                </div>
            </div>
            <div class="form_item">
                <el-select :disabled="!isEdit" class="sex" v-model="form.supplierAftersaleSex" placeholder="请选择性别">
                    <el-option  v-for="(item,index) in sexList" :key="index" :value="item.value"  :label="item.label"></el-option>
                </el-select>
                <div class="error_message" v-if="sexErrorMessage">
                    <i class="icon el-icon-circle-close"></i>
                    <span>{{sexErrorMessage}}</span>
                </div>
            </div>
            <div class="form_item">
                <el-input :readonly="!isEdit" v-model="form.supplierAftersaleMobile" @blur="valiteTel"  :maxlength="11" placeholder="请输入常用手机号码">
                    <i slot="suffix" class="iconfont icon-close" @click="form.supplierAftersaleMobile=''" v-if="form.supplierAftersaleMobile&&isEdit"></i>
                </el-input>
                <div class="error_message" v-if="telErrorMessage">
                    <i class="icon el-icon-circle-close"></i>
                    <span>{{telErrorMessage}}</span>
                </div>
            </div>
            <div class="form_item">
                <el-input :readonly="!isEdit" v-model="form.supplierAftersaleTel" @blur="valiteFixedNumber" placeholder="请输入贵机座机或400号码">
                    <i slot="suffix" class="iconfont icon-close" @click="form.supplierAftersaleTel=''" v-if="form.supplierAftersaleTel&&isEdit"></i>
                </el-input>
                 <div class="error_message" v-if="fixedNumberErrorMessage">
                    <i class="icon el-icon-circle-close"></i>
                    <span>{{fixedNumberErrorMessage}}</span>
                </div>
            </div>
            <div class="form_item footer">
                <span v-if="isEdit" @click="saveAfterSaleMan" class="button edit">提交</span>
                <i v-if="loading" class="icon-loading font18 color8 el-icon-loading"></i>
                <span v-if="!isEdit" class="button disabled success">
                   <i class="icon el-icon-circle-check"></i> 提交成功
                </span>
            </div>
        </div>
    </div>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
    data(){
        return {
            sexList:[
                {
                    value:1,
                    label:'男'
                },
                 {
                    value:0,
                    label:'女'
                }
            ],
            loading:false,
            isEdit:true,
            form:{
                proListCommNo:this.$route.query.listNo,
                supplierAftersaleName:'',
                supplierAftersaleSex:'',
                supplierAftersaleMobile:'',
                supplierAftersaleTel:''
            },
            sexErrorMessage:'',
            userNameErrorMessage:'',
            telErrorMessage:'',
            fixedNumberErrorMessage:''
        }
    },
    methods:{
        valiteUserName(){
            if(!this.form.supplierAftersaleName){
                this.userNameErrorMessage='请输入对接人姓名！';
                return false;
            }else{
                this.userNameErrorMessage='';
                return true;
            }
        },
        valiteSex(){
            if(!this.form.supplierAftersaleSex){
                this.sexErrorMessage='请选择性别！';
                return false;
            }else{
                this.sexErrorMessage='';
                return true;
            }
        },
        valiteTel(){
            if(!this.form.supplierAftersaleMobile){
                this.telErrorMessage='请输入常用手机号！';
                return false;
            }else if(this.form.supplierAftersaleMobile.length<11){
                this.telErrorMessage=' 您输入的手机号码长度不够！';
                return false;
            }
            else{
                this.telErrorMessage='';
                return true;
            }
        },
        valiteFixedNumber(){
            if(!this.form.supplierAftersaleTel){
                this.fixedNumberErrorMessage='请输入贵司座机或400电话!';
                return false;
            }else{
                this.fixedNumberErrorMessage='';
                return true;
            }
        },
        saveAfterSaleMan(){//保存接口
            if(this.valiteUserName()&&this.valiteSex()&&this.valiteTel()&&this.valiteFixedNumber()){
                this.loading=true;
                customerModule.saveAfterSaleMan(this.form).then(res=>{
                    if(res.statusCode=='1'){
                        this.loading=false;
                        this.isEdit=false;
                    }
                })
            }
        },
        getAfterSaleMan(){//获取信息
            customerModule.getAfterSaleMan({proListCommNo:this.$route.query.listNo}).then(res=>{
                if(res.statusCode=='1'){
                   if(res.data.isEdit=='1'){
                       this.form=Object.assign(this.form,res.data)
                       this.loading=false;
                       this.isEdit=false;
                   }
                }
            })
        }
    },
    created(){
        this.getAfterSaleMan();
    }
}
</script>
<style lang="scss" scoped>
    .sale{
        padding-left:21px;
        min-height: 400px;
    }
    .item_title{
        display: flex;
        align-items: center;
        padding:38px 0 17px;
        .line{
            width:6px;
            height:12px; 
            background:rgba(255,166,50,1);
            border-radius: 3px;
            margin-right: 14px;
        } 
    }
    .form{
        padding-left:20px;
        .form_item{
            margin-bottom: 12px;
            position: relative;
            .el-input{
                width:282px;
            }
            .el-select.sex{
                width:135px;
            }
            /deep/ .el-input__inner{
                height: 40px !important;
                line-height: 40px;
            }
            /deep/ .el-input__suffix{
                line-height: 40px;
            }
            .error_message{
                position: absolute;
                left: 282px;
                top:0px;
                height: 40px;
                display: flex;
                align-items: center;
                // margin-left: 15px;
                .icon{
                    // margin-right: 5px;
                }
            }
        }
    }
    .footer{
        margin-top:23px;
    }
    .button{
        width:90px;
        height: 40px;
        line-height: 40px;
        &.update{
            margin-left:182px;
        }
        &.success{
            width:120px;
        }
    }
    .el-select /deep/ .el-input.is-disabled .el-input__inner{
        background: #fff;
        border-color: rgba(224,224,224,1);
        cursor: default;
        color:#333;
    }
</style>
