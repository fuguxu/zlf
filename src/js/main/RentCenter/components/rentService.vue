<template>
    <div class="rent_service">
        <div class="item">
            <div class="item_sub">
                <div class="circel">1</div>
                <span>填写《项目信息收集表》</span>
            </div>
            <i class="icon" :class="{'el-icon-arrow-down':!start,'el-icon-arrow-up':start}" @click="start=!start"></i>
            <div class="extend" v-if="start">
                <div class="extend_title">了解您的项目详情，以便开展下一步融资服务，请您：</div>
                <p class="text"><span> a. 下载《项目信息收集表》</span><a class="link" href="">（点此下载）</a></p>
                <p class="text"><span> b. 线下填写《项目信息收集表》，并将该表及表中要求的附件，一起打包邮件至</span><span class="link">service@zulifang.co</span></p>
                <div class="next_step">审核通过，将开启下一步</div>
            </div>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">2</div>
                <span>签署《融资服务合作框架协议》</span>
            </div>
            <i class="icon" :class="{'el-icon-arrow-down':!doing,'el-icon-arrow-up':doing}" @click="doing=!doing"></i>
            <div v-if="doing" class="extend" >
                <div class="extend_title">建立双方互信、良好的合作前提，请您：</div>
                <p class="text"><span> a. 下载《融资服务合作框架协议》</span><a class="link" href="">（点此下载）</a></p>
                <p class="text"><span> b. 线下签署并加盖公司红章，上传清晰可见的扫描件</span></p>
                <uploadLicence :showMore="false"></uploadLicence>
                <div class="next_step">审核通过，将开启下一步</div>
            </div>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">3</div>
                <span>提交风控资料</span>
            </div>
            <i class="icon" :class="{'el-icon-arrow-down':!finish,'el-icon-arrow-up':finish}" @click="finish=!finish"></i>
            <div class="extend">
                <div class="extend_title">授信清单要求的风控资料准备越齐全，租赁年化率将越低！</div>
                <p class="text"><span> a. 下载《租立方融资租赁授信清单》</span><a class="link" href="">（点此下载）</a></p>
                <p class="text"><span> b. 请将清单内要求的资料准备齐全，一起打包邮件至</span><span class="link">service@zulifang.co</span></p>
                <p class="text"><span> c.务必填写<span class="link">“CBD国贸店”</span>项目负责人信息，以便租立方大客户代表与您即刻取得联系！</span></p>
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
            </div>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">4</div>
                <span>产品清单沟通</span>
            </div>
            <i class="icon" :class="{'el-icon-arrow-down':!transfer,'el-icon-arrow-up':transfer}"  @click="transfer=!transfer"></i>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">5</div>
                <span>签署租赁合同与付款</span>
            </div>
            <i class="icon" :class="{'el-icon-arrow-down':!logistics,'el-icon-arrow-up':logistics}"  @click="logistics=!logistics"></i>
        </div>
    </div>
</template>
<script>
import uploadLicence from '../../../components/uploadLicence'
export default {
    data(){
        return {
            start:false,
            doing:false,
            finish:false,
            transfer:false,
            logistics:false,
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
    },
    components:{
        uploadLicence
    }
}
</script>
<style lang="scss" scoped>
    .item{
        padding:0 20px;
        background: #f6f5f5;
        position: relative;
        margin-bottom: 15px;
        .item_sub{
            display: flex;
            height: 60px;
            align-items: center;
            font-size: 16px;
            color: #363636;
            .circel{
                width:26px;
                height: 26px;
                border-radius: 50%;
                background: rgb(237, 159, 52);
                font-size: 16px;
                color:#fff;
                text-align: center;
                line-height: 26px;
                margin-right: 20px;
            }
        }
        .extend{
            padding-left:46px;
            padding-bottom:20px;
            .extend_title{
                font-size: 15px;
                color: rgba(54, 54, 54, 0.75);
                padding-bottom: 10px;
            }
            .text{
                color: #363636;
                font-size:14px;
                line-height: 22px;
                .link{
                    color:rgb(237, 159, 52);
                }
            }
            .file-upload-container{
                justify-content: flex-start;
                padding-left:20px;
                padding-top:10px;
                /deep/ .button{
                    margin-top:0px;
                }
            }
            .next_step{
                width:276px;
                text-align: center;
                line-height: 40px;
                background: rgb(237, 159, 52);
                color:#fff;
                font-size: 16px;
                margin-top:20px;
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
        }
        .icon{
            font-size:20px;
            color:#888;
            position: absolute;
            right: 20px;
            top: 50%;
            margin-top: -10px;
            cursor: pointer;
        }
    }
</style>
