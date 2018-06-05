<template>
    <div class="rent_service">
        <div class="item">
            <div class="item_sub">
                <div class="circel">1</div>
                <span>填写《项目信息收集表》</span>
                <!-- <i v-if="data[0].isOperation=='0'" class="el-icon-setting"></i> -->
                <i class="icon" :class="{'el-icon-arrow-down':!start,'el-icon-arrow-up':start}" @click="clickExtend(0,'start')"></i>
            </div>
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
                <!-- <i v-if="data[1].isOperation=='0'" class="el-icon-setting"></i> -->
                <i class="icon" :class="{'el-icon-arrow-down':!doing,'el-icon-arrow-up':doing}" @click="clickExtend(1,'doing')"></i>
            </div>
            
            <div v-if="doing" class="extend" >
                <div class="extend_title">建立双方互信、良好的合作前提，请您：</div>
                <p class="text"><span> a. 下载《融资服务合作框架协议》</span><a class="link" href="">（点此下载）</a></p>
                <p class="text"><span> b. 线下签署并加盖公司红章，上传清晰可见的扫描件</span></p>
                <uploadLicence saveType="cooperationAgreement" :orderNo="orderNo" :showMore="false"></uploadLicence>
                <div class="next_step">审核通过，将开启下一步</div>
            </div>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">3</div>
                <span>提交风控资料</span>
                <i class="icon" :class="{'el-icon-arrow-down':!finish,'el-icon-arrow-up':finish}" @click="clickExtend(2,'finish')"></i>
            </div>
            
            <div v-if="finish" class="extend">
                <div class="extend_title">授信清单要求的风控资料准备越齐全，租赁年化率将越低！</div>
                <p class="text"><span> a. 下载《租立方融资租赁授信清单》</span><a class="link" href="">（点此下载）</a></p>
                <p class="text"><span> b. 请将清单内要求的资料准备齐全，一起打包邮件至</span><span class="link">service@zulifang.co</span></p>
                <p class="text"><span> c.务必填写<span class="link">“{{orderName}}”</span>项目负责人信息，以便租立方大客户代表与您即刻取得联系！</span></p>
                <rentMoneyInfo :orderNo="orderNo" :cusType="0" placeholderPerson="请输入负责人姓名" placeholderJob="请输入负责人在贵司所担任职位"></rentMoneyInfo>
                <div class="next_step">审核通过，将开启下一步</div>
            </div>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">4</div>
                <span>产品清单沟通</span>
                <i class="icon" :class="{'el-icon-arrow-down':!transfer,'el-icon-arrow-up':transfer}"  @click="clickExtend(3,'transfer')"></i>
            </div>
            <choiceRent v-if="transfer"></choiceRent>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">5</div>
                <span>签署租赁合同与付款</span>
                <i class="icon" :class="{'el-icon-arrow-down':!logistics,'el-icon-arrow-up':logistics}"  @click="clickExtend(4,'logistics')"></i>
            </div>
            
        </div>
    </div>
</template>
<script>
import uploadLicence from '../../../components/uploadLicence';
import rentMoneyInfo from '../../components/rentMoneyInfo';
import choiceRent from '../../components/choiceRent';
export default {
    props:['data','orderNo','orderName'],
    data(){
        return {
            start:false,
            doing:false,
            finish:false,
            transfer:false,
            logistics:false,
        }
    },
    methods:{
        clickExtend(index,flag){
            // if(this.data[index].isOperation=='1'){
                this[flag]=!this[flag]
            // }
        }
    },
    components:{
        uploadLicence,
        rentMoneyInfo,
        choiceRent
    },
    watch:{
        data(n,o){
            console.log(n)
        }
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
            position: relative;
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
        }
        .icon{
            font-size:20px;
            color:#888;
            position: absolute;
            right: 20px;
            top: 50%;
            margin-top: -10px;
            cursor: pointer;
            z-index: 1000;
        }
    }
</style>
