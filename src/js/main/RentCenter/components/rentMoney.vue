<template>
    <div class="rent_money">
        <div class="title">
            <div class="line"></div>
            <div>提交贵司财务对接人信息</div>
        </div>
        <el-form ref="form" :model="form" label-width="10px">
            <el-form-item label=" ">
                <el-input placeholder="请输入财务对接人姓名" @blur="valiatePerson" v-model="form.person">
                    <i slot="suffix" class="iconfont icon-close" @click="form.person=''" v-if="form.person"></i>
                </el-input>
                <div class="error_message" v-if="personErrorMessage">
                    <i class="icon el-icon-circle-close"></i>
                    <span>{{personErrorMessage}}</span>
                </div>
            </el-form-item>
            <el-form-item label=" ">
                <el-select v-model="form.sex">
                    <el-option value="1" label="男"></el-option>
                    <el-option value="0" label="女"></el-option>
                </el-select>
                <div class="error_message" v-if="sexErrorMessage">
                    <i class="icon el-icon-circle-close"></i>
                    <span>{{sexErrorMessage}}</span>
                </div>
            </el-form-item>
            <el-form-item label=" ">
                <el-input placeholder="请输入对接人在贵司所担任职位" @blur="valiatejob" v-model="form.job">
                    <i slot="suffix" class="iconfont icon-close" @click="form.job=''" v-if="form.job"></i>
                </el-input>
                <div class="error_message" v-if="jobErrorMessage">
                    <i class="icon el-icon-circle-close"></i>
                    <span>{{jobErrorMessage}}</span>
                </div>
            </el-form-item>
            <el-form-item label=" ">
                <el-input placeholder="请输入常用手机号码" @blur="valiatetel" :maxlength="11" v-model="form.tel">
                    <i slot="suffix" class="iconfont icon-close" @click="form.tel=''" v-if="form.tel"></i>
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
                <span class="button">提交</span>
            </el-form-item>
        </el-form>
        <div class="title">
            <div class="line"></div>
            <div>请留存我司租金对接人信息</div>
        </div>
        <div class="my_person">
            <div class="form_item">
                <div class="label">姓名：</div>
                <div class="text">梁绍辉</div>
            </div>
            <div class="form_item">
                <div class="label">性别：</div>
                <div class="text">男</div>
            </div>
            <div class="form_item">
                <div class="label">手机号码：</div>
                <div class="text">13710353888</div>
            </div>
            <div class="form_item">
                <div class="label">我司座机或400电话：</div>
                <div class="text">4008804604</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                person:'',
                sex:'',
                job:'',
                tel:'',
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
            if(!this.form.person){
                this.personErrorMessage='请输入对接人姓名！';
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
            if(!this.form.job){
                this.jobErrorMessage='请输入在贵公司所担任职位！';
                return false
            }else{
                this.jobErrorMessage='';
                return true
            }
        },
        valiatetel(){
            if(!this.form.tel){
                this.telErrorMessage='请输入常用手机号！';
                return false
            }else if(this.form.tel.length<11){
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
        }
    }
}
</script>
<style lang="scss" scoped>
    .rent_money{
        min-height:400px;
        padding-left:10px;
        background: #f6f5f5;
        /deep/ textarea::-webkit-input-placeholder,/deep/ input::-webkit-input-placeholder
       {
            font-size: 13px; 
            color: rgba(41, 43, 44, 0.6);
        }
        .title{
            display: flex;
            align-items: center;
            padding: 20px 0px;
            font-size: 16px;
            color: #363636;
            .line{
                width:6px;
                height:12px; 
                background:rgba(255,166,50,1);
                border-radius: 3px ;
                margin-right:5px;
            }
        }
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
        }
        .my_person{
            padding-bottom: 30px;
            .form_item{
                display: flex;
                align-items: center;
                padding:5px 15px;
                .label{
                    font-size: 14px;
                    color: rgba(54, 54, 54, 0.8);
                    margin-right: 5px;
                }
                .text{
                    font-size: 15px;
                    color: #363636;
                }
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
