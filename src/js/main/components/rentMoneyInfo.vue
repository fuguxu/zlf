<template>
    <el-form ref="form" :model="form" label-width="10px">
        <el-form-item label=" ">
            <el-input :readonly="!isEdit" :placeholder="placeholderPerson" @blur="valiatePerson" v-model="form.name">
                <i slot="suffix" class="iconfont icon-close" @click="form.name=''" v-if="form.name&&isEdit"></i>
            </el-input>
            <div class="error_message" v-if="personErrorMessage">
                <i class="icon el-icon-circle-close"></i>
                <span>{{personErrorMessage}}</span>
            </div>
        </el-form-item>
        <el-form-item label=" ">
            <el-select :disabled="!isEdit" v-model="form.sex" @change="valiateSex" placeholder="请选择性别">
                <el-option :value="1" label="男"></el-option>
                <el-option :value="2" label="女"></el-option>
            </el-select>
            <div class="error_message" v-if="sexErrorMessage">
                <i class="icon el-icon-circle-close"></i>
                <span>{{sexErrorMessage}}</span>
            </div>
        </el-form-item>
        <el-form-item label=" ">
            <el-input :readonly="!isEdit" :placeholder="placeholderJob" @blur="valiatejob" v-model="form.position">
                <i slot="suffix" class="iconfont icon-close" @click="form.position=''" v-if="form.position&&isEdit"></i>
            </el-input>
            <div class="error_message" v-if="jobErrorMessage">
                <i class="icon el-icon-circle-close"></i>
                <span>{{jobErrorMessage}}</span>
            </div>
        </el-form-item>
        <el-form-item label=" ">
            <el-input :readonly="!isEdit" placeholder="请输入常用手机号码" @blur="valiatetel" :maxlength="11" v-model="form.mobile">
                <i slot="suffix" class="iconfont icon-close" @click="form.mobile=''" v-if="form.mobile&&isEdit"></i>
            </el-input>
            <div class="error_message" v-if="telErrorMessage">
                <i class="icon el-icon-circle-close"></i>
                <span>{{telErrorMessage}}</span>
            </div>
        </el-form-item>
        <el-form-item label=" ">
            <el-input :readonly="!isEdit" placeholder="请务必输入正确的邮箱地址" @blur="valiateEmail" v-model="form.email">
                    <i slot="suffix" class="iconfont icon-close" @click="form.email=''" v-if="form.email&&isEdit"></i>
            </el-input>
            <div class="error_message" v-if="emailErrorMessage">
                <i class="icon el-icon-circle-close"></i>
                <span>{{emailErrorMessage}}</span>
            </div>
        </el-form-item>
        <el-form-item label=" ">
            <span @click="submit" v-if="isEdit" class="button">提交</span>
            <i v-if="loading" class="icon-loading color8 font18 el-icon-loading"></i>
            <span v-if="!isEdit" class="button disabled">提交成功</span>
            <span v-if="!isEdit" @click="isEdit=true" class="button">修改</span>
        </el-form-item>
    </el-form>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
    props:{
       placeholderPerson:{
           default:'请输入财务对接人姓名'
       },
       placeholderJob:{
           default:'请输入对接人在贵司所担任职位'
       },
       orderNo:{

       },
       cusType:{

       }
    },
    data(){
        return {
            form:{
                name:'',
                sex:'',
                position:'',
                mobile:'',
                email:''
            },
            personErrorMessage:'',
            sexErrorMessage:'',
            jobErrorMessage:'',
            telErrorMessage:'',
            emailErrorMessage:'',
            isEdit:false,
            loading:false
        }
    },
    methods:{
        valiatePerson(){
            if(!this.form.name){
                this.personErrorMessage='请输入联系人姓名！';
                return false
            }else{
                this.personErrorMessage='';
                return true
            }
        },
        valiateSex(){
            if(this.form.sex===''){
                this.sexErrorMessage='请选择性别！';
                return false
            }else{
                this.sexErrorMessage='';
                return true
            }
        },
        valiatejob(){
            if(!this.form.position){
                this.jobErrorMessage='请输入在贵公司所担任职位！';
                return false
            }else{
                this.jobErrorMessage='';
                return true
            }
        },
        valiatetel(){
            if(!this.form.mobile){
                this.telErrorMessage='请输入常用手机号！';
                return false
            }else if(''+(+this.form.mobile)=='NaN'){
                 this.telErrorMessage='您输入的手机号码格式不正确！';
                return false
            }
            else if(this.form.mobile.length<11){
                this.telErrorMessage='您输入的手机号码长度不够！';
                return false
            }
            else{
                this.telErrorMessage='';
                return true
            }
        },
        valiateEmail(){
            var reg=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
            if(!this.form.email){
                this.emailErrorMessage='请输入邮箱地址！';
                return false
            }else if(!reg.test(this.form.email)){
                this.emailErrorMessage='请务必输入正确的邮箱地址！';
                return false
            }
            else{
                this.emailErrorMessage='';
                return true
            }
        },
        submit(){//提交接口
            if(this.valiatePerson()&&this.valiateSex()&&this.valiatejob()&&this.valiatetel()&&this.valiateEmail()){
                this.saveProjectPersonInfo();
            }
        },
        saveProjectPersonInfo(){//保存联系人
            this.loading=true;
            customerModule.saveProjectPersonInfo({
                cusType:this.cusType,
                orderNo:this.orderNo,
                ...this.form
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.loading=false;
                    this.isEdit=false;
                }
            })
        },
        getOrderCustomerInfo(){//获取联系人信息
            customerModule.getOrderCustomerInfo({
                cusType:this.cusType,
                orderNo:this.orderNo,
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.form={...this.form,...(res.data||{})};
                    if(this.form.name){//有值的话
                        this.isEdit=false;
                    }else{
                        this.isEdit=true;
                    }
                }
            })
        }
    },
    mounted(){
        this.getOrderCustomerInfo();
    }
}
</script>
<style lang="scss" scoped>
    .el-form{
        .el-form-item{
            margin-bottom: 15px;
            position: relative;
        }
        /deep/ .el-form-item__content{
            // margin-left:103px !important;
            width:282px;
        }
        /deep/ .el-input__inner{
            // border: 1px solid #dbd8d3;
            &:focus{
                // box-shadow: 0 0 5px #d7d7d7;
            }
        }
        /deep/ .el-input__suffix{
            line-height: 40px;
        }
        .el-select{
            width:152px;
        }
        .el-select /deep/ .el-input.is-disabled .el-input__inner{
            background: #fff;
            border-color: rgba(224,224,224,1);
            cursor: default;
            color:#333;
        }
        .error_message{
            position: absolute;
            left: 282px;
            width:100%;
            top:0px;
            height: 40px;
            line-height: normal;
            // font-size: 13px;
            // color: #FF6C72;
            display: flex;
            align-items: center;
            // margin-left: 15px;
            .icon{
                // margin-right: 5px;
            }
        }
         .button{
            width:90px;
            height: 40px;
            // cursor: pointer;
            // display: inline-block;
            // font-size: 18px;
            color: #fff;
            line-height:40px;
            // text-align: center;
            // border-radius: 5px;
            // background: #ed9f34;
            &:hover{
                // background: #f1b255;
            }
        }
    }
</style>
