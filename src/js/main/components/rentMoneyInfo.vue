<template>
    <el-form ref="form" :model="form" label-width="10px">
        <el-form-item label=" ">
            <el-input :placeholder="placeholderPerson" @blur="valiatePerson" v-model="form.name">
                <i slot="suffix" class="iconfont icon-close" @click="form.name=''" v-if="form.name"></i>
            </el-input>
            <div class="error_message" v-if="personErrorMessage">
                <i class="icon el-icon-circle-close"></i>
                <span>{{personErrorMessage}}</span>
            </div>
        </el-form-item>
        <el-form-item label=" ">
            <el-select v-model="form.sex" placeholder="请选择性别">
                <el-option :value="1" label="男"></el-option>
                <el-option :value="0" label="女"></el-option>
            </el-select>
            <div class="error_message" v-if="sexErrorMessage">
                <i class="icon el-icon-circle-close"></i>
                <span>{{sexErrorMessage}}</span>
            </div>
        </el-form-item>
        <el-form-item label=" ">
            <el-input :placeholder="placeholderJob" @blur="valiatejob" v-model="form.position">
                <i slot="suffix" class="iconfont icon-close" @click="form.position=''" v-if="form.position"></i>
            </el-input>
            <div class="error_message" v-if="jobErrorMessage">
                <i class="icon el-icon-circle-close"></i>
                <span>{{jobErrorMessage}}</span>
            </div>
        </el-form-item>
        <el-form-item label=" ">
            <el-input placeholder="请输入常用手机号码" @blur="valiatetel" :maxlength="11" v-model="form.mobile">
                <i slot="suffix" class="iconfont icon-close" @click="form.mobile=''" v-if="form.mobile"></i>
            </el-input>
            <div class="error_message" v-if="telErrorMessage">
                <i class="icon el-icon-circle-close"></i>
                <span>{{telErrorMessage}}</span>
            </div>
        </el-form-item>
        <el-form-item label=" ">
            <el-input placeholder="请务必输入正确的邮箱地址" @blur="valiateEmail" v-model="form.email">
                    <i slot="suffix" class="iconfont icon-close" @click="form.email=''" v-if="form.email"></i>
            </el-input>
            <div class="error_message" v-if="emailErrorMessage">
                <i class="icon el-icon-circle-close"></i>
                <span>{{emailErrorMessage}}</span>
            </div>
        </el-form-item>
        <el-form-item label=" ">
            <span @click="submit" class="button">提交</span>
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
            emailErrorMessage:''
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
            if(!this.form.sex){
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
            }else if(this.form.mobile.length<11){
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
            customerModule.saveProjectPersonInfo({
                cusType:this.cusType,
                orderNo:this.orderNo,
                ...this.form
            })
        },
        getOrderCustomerInfo(){//获取联系人信息
            customerModule.getOrderCustomerInfo({
                cusType:this.cusType,
                orderNo:this.orderNo,
            }).then(res=>{
                if(res.statusCode=='1'&&res.data){
                    this.form={...this.form,...res.data}
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
            border: 1px solid #dbd8d3;
            &:focus{
                box-shadow: 0 0 5px #d7d7d7;
            }
        }
        /deep/ .el-input__suffix{
            line-height: 40px;
        }
        .el-select{
            width:152px;
        }
        .error_message{
            position: absolute;
            left: 282px;
            width:100%;
            top:0px;
            line-height: 40px;
            font-size: 13px;
            color: #FF6C72;
            display: flex;
            align-items: center;
            margin-left: 15px;
            .icon{
                margin-right: 5px;
            }
        }
         .button{
            width:130px;
            height: 40px;
            cursor: pointer;
            display: inline-block;
            font-size: 18px;
            color: #fff;
            line-height:40px;
            text-align: center;
            border-radius: 5px;
            background: #ed9f34;
            &:hover{
                background: #f1b255;
            }
        }
    }
</style>
