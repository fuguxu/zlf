<template>
    <div v-if="visible" @click="close" class="dialog">
        <div class="box">
            <div class="content" :class="{show:show}" @click.stop="1">
                <div class="header">
                    <span class="font18">请输入项目名称</span>
                    <span @click="close" class="close font18">×</span>
                </div>
                <el-form :rules="rules" :model="form" ref="form"  class="demo-ruleForm">
                    <el-form-item prop="projectName">
                        <el-input :maxlength="12"  v-model="form.projectName" placeholder="请输入您的项目名称"></el-input>
                        <div class="error_message" v-if="tipMessage">
                            <i class="icon el-icon-error"></i>
                            <span>{{tipMessage}}</span>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <span class="button" type="primary" @click="submitForm">提交</span>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import {customerModule} from '../../../api/main';
export default {
    props:['visible'],
    data(){
        return {
            form:{
                projectName:''
            },
            tipMessage:'',
            rules: {
                projectName:[
                    {type:'string', required: true, message: '请输入项目名称', trigger: 'blur,change' },
                ],
            },
            show:false
        }
    },
    methods:{
        close(){
            this.show=false;
            this.$emit('update:visible',false);
        },
        submitForm(){
            if(!this.form.projectName){
                this.tipMessage='请输入项目名称';
            }else{
                this.tipMessage='';
                this.saveCustomerItem();
            }
        },
        saveCustomerItem(){
            customerModule.saveCustomerItem({
                projectName:this.form.projectName
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.$emit('updateItem',true);
                    this.close();
                }
            })
        }
    },
    mounted(){
       
    },
    watch:{
        visible(n,o){
            if(n){
                this.form.projectName='';
                this.tipMessage='';
                setTimeout(()=>{
                    this.show=true;
                },100)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .dialog{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box{
        width:590px;
        height:300px;
        position: relative;
        overflow: hidden;
    }
    .content{
        width:590px;
        height:300px;
        background: #fff;
        border-radius: 5px;
        position: absolute;
        top:-100%;
        // left:-100%;
        &.show{
            top: 0px;
            transition: all 0.8s;
            transition-delay: 0.1s;
        }
        .header{
            line-height: 60px;
            text-align: center;
            border-bottom: 1px solid rgba(238,238,238,1);
            position: relative;
            .close{
                color:rgba(102,102,102,1);
                position: absolute;
                right:43px;
                top:20px;
                line-height: normal;
                cursor: pointer;
            }
        }
    }
    .el-form{
        padding:34px 42px 0px;
        .el-form-item{
            margin-bottom: 75px;
            text-align: center;
        }
        /deep/ .el-input__inner{
            border:1px solid rgba(255,159,48,1);
            border-radius:14px;
            height:50px;
        }
        .button{
            width:300px;
            // padding: 13px 20px;
            border-radius:9px;
            font-size: 16px;
        }
    }
    .error_message{
        position: absolute;
    }
</style>
