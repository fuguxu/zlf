<template>
    <div>
        <div class="form_item contact_form_item">
            <div class="label label_input">联系人姓名</div>
            <div class="item_content">
                <el-input :disabled="!isEdit" v-model="form.contacts" placeholder=""></el-input>
            </div>
        </div>
        <div class="form_item">
            <div class="label label_input">职位</div>
            <div class="item_content">
                <el-input :disabled="!isEdit" v-model="form.position" placeholder=""></el-input>
            </div>
        </div>
        <div class="form_item">
            <div class="label label_input">性别</div>
            <div class="item_content">
                <el-select :disabled="!isEdit" v-model="form.sex"  placeholder="">
                    <el-option :key="1" label="男" :value="1"></el-option>
                    <el-option :key="0" label="女" :value="2"></el-option>
                </el-select>
            </div>
        </div>
        <div class="form_item">
            <div class="label label_input">手机号</div>
            <div class="item_content">
                <el-input :maxlength="11" :disabled="!isEdit" @blur="blurPhone" v-model="form.phone" placeholder=""></el-input>
                <div class="error_message" v-if="phoneErrorMessage">
                    <i class="icon el-icon-error"></i>
                    <span>{{phoneErrorMessage}}</span>
                </div>
            </div>
        </div>
        <div class="form_item">
            <div class="label">联系人邮箱</div>
            <div class="item_content">{{form.email}}</div>
        </div>
        <div class="form_item foot_item">
            <span v-if="isEdit" @click="cancel" class="button cancel">取消</span>
            <span v-if="isEdit" @click="save" class="button sure">保存</span>
            <span v-if="!isEdit" @click="clickEdit" class="button">编辑</span>
        </div>
    </div>
</template>
<script>
import {customerModule} from '../../../api/main';
export default {
    data(){
        return {
            form:{
                contacts:'',
                position:'',
                sex:'',
                email:'',
            },
            phoneErrorMessage:'',
            isEdit:false
        }
    },
    methods:{
         clickEdit(){
            this.isEdit=true;
        },
        cancel(){
            this.isEdit=false;
            this.initData();
        },
        blurPhone(){
            if(!this.form.phone){
               this.phoneErrorMessage= '请输入联系人常用手机号码！';
               return false
            }else if(''+(+this.form.phone)=='NaN'){
                this.phoneErrorMessage='您输入的手机号码格式不正确！';
                return false;
            }else if(this.form.phone.length<11){
                this.phoneErrorMessage='您输入的手机号码长度不够！';
                return false;
            }else{
                this.phoneErrorMessage='';
                return true
            }
        },
         save(){//点击保存
            if(!this.blurPhone()){
                return;
            }
            if(localStorage.getItem('role')=='client'){
                this.perfectUser();
            }else{
                this.changeSupplierUser();
            }
        },
        perfectUser(){//完善客户信息
            customerModule.saveOrderCustomerInfo(this.form).then(res=>{
                if(res.statusCode){
                    AppUtil.setCurrentUserInfo(this.form);
                    this.isEdit=false;
                }
            })
        },
        changeSupplierUser(){//完善供应商信息
            customerModule.changeSupplierUser(this.form).then(res=>{
                if(res.statusCode=='1'){
                    AppUtil.setCurrentUserInfo(this.form);
                    this.isEdit=false;
                }
            })
        },
        initData(){
            AppUtil.getCurrentUserInfo(user=>{
                this.form=user;
            });
        }
    },
    created(){
        this.initData();
    }
}
</script>
<style lang="scss" scoped>
    @import '../../../../css/formItem.scss';
    .form_item .item_content{
        margin-bottom: 10px;
        position: relative;
        .el-input{
            width:186px;
        }
        .el-select{
            width:93px;
        }
    }
    .contact_form_item{
        margin-top:43px;
    }
    .foot_item{
        margin-top:10px;
        margin-bottom: 70px;
    }
    .error_message{
        position: absolute;
        left:100%;
        width: 150%;
        height: 100%;
        display: flex;
        top:0px;
        align-items: center;
    }
</style>
