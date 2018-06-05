<template>
    <div v-if="visible" @click="close" class="dialog">
        <div class="content" @click.stop="1">
            <div class="header">
                <span class="font18">请输入项目名称</span>
                <span @click="close" class="close font18">×</span>
            </div>
            <el-form :rules="rules" :model="form" ref="form"  class="demo-ruleForm">
                <el-form-item prop="name" required>
                    <el-input  v-model="form.name" placeholder="请输入您的项目名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    props:['visible'],
    data(){
        return {
            form:{
                name:''
            },
            rules: {
                name: [
                    { required: true, message: '请输入项目名称', trigger: 'blur,change' },
                ],
            }
        }
    },
    methods:{
        close(){
            this.$emit('update:visible',false);
        },
        submitForm(form){
            // this.$refs.form.validate(v=>{
            //     if(v){
            //         return true
            //     }else{
            //         return false
            //     }
            // });
        }
    },
    mounted(){
       
    }
}
</script>
<style lang="scss" scoped>
    .dialog{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content{
        width:590px;
        height:300px;
        background: #fff;
        border-radius: 5px;
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
            .el-button{
                width:300px;
                padding: 13px 20px;
                background:rgba(255,166,50,1);
                border-radius:9px;
                border-color: rgba(255,166,50,1);
                font-size: 16px;
            }
        }
        /deep/ .el-input__inner{
            border:1px solid rgba(255,159,48,1);
            border-radius:14px;
            height:50px;
        }
    }
</style>
