<template>
    <div class="sale">
        <div class="item_title font16">
            <div class="line"></div>
            <span>提交贵司售后服务对接人信息</span>
        </div>
        <div class="form">
            <div class="form_item">
                <el-input v-model="userName" @blur="valiteUserName" placeholder="请输入售后服务对接人姓名">
                    <i slot="suffix" class="iconfont icon-close" @click="userName=''" v-if="userName"></i>
                </el-input>
                <div class="error_message" v-if="userNameErrorMessage">
                    <i class="icon el-icon-circle-close"></i>
                    <span>{{userNameErrorMessage}}</span>
                </div>
            </div>
            <div class="form_item">
                <el-select class="sex" v-model="sex" placeholder="请选择性别">
                    <el-option v-for="(item,index) in sexList" :key="index" :value="item.value"  :label="item.label"></el-option>
                </el-select>
                <div class="error_message" v-if="sexErrorMessage">
                    <i class="icon el-icon-circle-close"></i>
                    <span>{{sexErrorMessage}}</span>
                </div>
            </div>
            <div class="form_item">
                <el-input v-model="tel" @blur="valiteTel"  :maxlength="11" placeholder="请输入常用手机号码">
                    <i slot="suffix" class="iconfont icon-close" @click="tel=''" v-if="tel"></i>
                </el-input>
                <div class="error_message" v-if="telErrorMessage">
                    <i class="icon el-icon-circle-close"></i>
                    <span>{{telErrorMessage}}</span>
                </div>
            </div>
            <div class="form_item">
                <el-input v-model="fixedNumber" @blur="valiteFixedNumber" placeholder="请输入贵机座机或400号码">
                    <i slot="suffix" class="iconfont icon-close" @click="fixedNumber=''" v-if="fixedNumber"></i>
                </el-input>
                 <div class="error_message" v-if="fixedNumberErrorMessage">
                    <i class="icon el-icon-circle-close"></i>
                    <span>{{fixedNumberErrorMessage}}</span>
                </div>
            </div>
            <div class="form_item">
                <span class="button edit">提交</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            sexList:[
                {
                    value:'1',
                    label:'男'
                },
                 {
                    value:'0',
                    label:'女'
                }
            ],
            sex:'',
            sexErrorMessage:'',
            userName:'',
            userNameErrorMessage:'',
            tel:'',
            telErrorMessage:'',
            fixedNumber:'',
            fixedNumberErrorMessage:''
        }
    },
    methods:{
        valiteUserName(){
            if(!this.userName){
                this.userNameErrorMessage='请输入对接人姓名！';
            }else{
                this.userNameErrorMessage='';
            }
        },
        valiteSex(){
            if(!this.sex){
                this.sexErrorMessage='请选择性别！';
            }else{
                this.sexErrorMessage='';
            }
        },
        valiteTel(){
            if(!this.tel){
                this.telErrorMessage='请输入常用手机号！';
            }else if(this.tel.length<11){
                this.telErrorMessage=' 您输入的手机号码长度不够！';
            }
            else{
                this.telErrorMessage='';
            }
        },
        valiteFixedNumber(){
            if(!this.fixedNumber){
                this.fixedNumberErrorMessage='请输入贵司座机或400电话!';
            }else{
                this.fixedNumberErrorMessage='';
            }
        }
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
        padding:25px 0 15px;
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
            margin-bottom: 22px;
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
                line-height: 40px;
                display: flex;
                align-items: center;
                margin-left: 15px;
                .icon{
                    margin-right: 5px;
                }
            }
        }
       .button{
            width:90px;
            height: 40px;
            line-height: 40px;
            color:#fff;
            background:rgba(255,166,50,1);
        }
    }
</style>
