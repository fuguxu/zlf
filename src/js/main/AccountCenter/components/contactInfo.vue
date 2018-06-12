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
                    <el-option :key="0" label="女" :value="0"></el-option>
                </el-select>
            </div>
        </div>
        <div class="form_item">
            <div class="label label_input">手机号</div>
            <div class="item_content">
                <el-input :disabled="!isEdit" v-model="form.phone" placeholder=""></el-input>
            </div>
        </div>
        <div class="form_item">
            <div class="label">邮箱</div>
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
            isEdit:false
        }
    },
    methods:{
         clickEdit(){
            this.isEdit=true;
        },
        cancel(){
            this.isEdit=false;
        },
         save(){//点击保存
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
    },
    created(){
        AppUtil.getCurrentUserInfo(user=>{
            this.form=user;
        });
    }
}
</script>
<style lang="scss" scoped>
    @import '../../../../css/formItem.scss';
    .form_item .item_content{
        margin-bottom: 10px;
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
</style>
