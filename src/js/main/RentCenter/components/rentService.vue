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
                <!-- <div class="next_step">审核通过，将开启下一步</div> -->
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
                <!-- <div class="next_step">审核通过，将开启下一步</div> -->
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
            <div v-if="transfer" class="extend">
                <div class="big_custorm">
                    <p class="font16">此环节，请您与供应商针对产品清单沟通产品需求、报价等相关事宜。</p>
                    <p class="font16">我们将指派租立方大客户代表，撮和供应商与您之间的沟通，监督供应商发挥应用的作用。</p>
                    <ul>
                        <li class="title">租立方大客户代表</li>
                        <li class="name"><span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span><span>{{projectDetail.platBigCustomerName}}</span></li>
                        <li class="contact"><span>联系方式：</span><span>{{projectDetail.platBigCustomerMobile}}</span></li>
                    </ul>
                </div>
                <div class="step font16"><span class="line"></span><span>a.开始选择您的租赁物以及对应的供应商来源</span></div>
                <choiceRent :orderNo="orderNo"></choiceRent>
                <div class="recommend_supplier">
                    <div class="step font16"><span class="line"></span><span>b.与供应商产品沟通进展</span></div>
                    <div class="detail">
                        <div class="detail_item">
                            <div class="detail_title"><span class="dot"></span><span>指定合作供应商</span></div>
                            <p class="color6 desc">请将以下租赁物对应的进驻邀请码，发送给您所指定合作的供应商；供应商只有进驻到租立方平台，您后面的租赁服务，包括租赁物生产、运输、验收、售后等才能得到更好的保障</p>
                            <table>
                                <tr>
                                    <th>租赁物体</th>
                                    <th>进驻邀请码</th>
                                    <th>供应商</th>
                                </tr>
                                <tr v-for="(item,index) in appointSupplier" :key="index">
                                    <td>{{item.leaseTypeName}}</td>
                                    <td>{{item.invitationCode}}</td>
                                    <td>发送至"{{item.leaseTypeName}}"供应商</td>
                                </tr>
                            </table>
                        </div>
                        <div class="detail_item">
                            <div class="detail_title"><span class="dot"></span><span>推荐供应商</span></div>
                            <p class="color6 desc">租立方根据您的租赁需求，推荐以下优质供应商，优先次序排列如下。</p>
                            <div class="recommend_supplier_item" v-for="(item,index) in recommendSupplier" :key="index">
                                <div class="supplier_item_title font16">{{item.name}}</div>
                                <table>
                                    <tr>
                                        <th>次序</th><th>供应商</th><th>供应商简介</th><th>联系人</th>
                                    </tr>
                                    <tr v-for="(it,i) in item.list" :key="i"><td>{{i+1}}</td>
                                        <td>{{it.userAbbr}}</td>
                                        <td><a href="">点击查看详情</a></td>
                                        <td>{{it.contacts}}</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
import {customerModule} from '../../../api/main';
export default {
    props:['data','orderNo','orderName'],
    data(){
        return {
            start:false,
            doing:false,
            finish:false,
            transfer:false,
            logistics:false,
            projectDetail:{},
            appointSupplier:[],
            recommendSupplier:[]
        }
    },
    methods:{
        clickExtend(index,flag){
            if(this.data[index].isOperation=='1'){
                this[flag]=!this[flag];
                if(this.transfer){
                    this.getProjectInfo();
                    this.getAppointSupplier();
                    this.getRecommendSupplier();
                }
            }
        },
        getProjectInfo(){//获得大客户联系人
            customerModule.getProjectInfo({orderNo:this.orderNo}).then(res=>{
                if(res.statusCode=='1'){
                    this.projectDetail=res.data;
                }
            })
        },
        getAppointSupplier(){//获取指定供应商信息
            customerModule.getAppointSupplier({orderNo:this.orderNo}).then(res=>{
                if(res.statusCode=='1'){
                    this.appointSupplier=res.data;
                }
            })
        },
        getRecommendSupplier(){//获取推荐供应商信息
            customerModule.getRecommendSupplier({orderNo:this.orderNo}).then(res=>{
                if(res.statusCode=='1'){
                    this.recommendSupplier=res.data;
                }
            })
        }
    },
    mounted(){
        
    },
    components:{
        uploadLicence,
        rentMoneyInfo,
        choiceRent
    },
    watch:{
        data(n,o){
            // console.log(n)
        }
    }
}
</script>
<style lang="scss" scoped>
    .item{
        position: relative;
        margin-bottom: 15px;
        .step{
            display: flex;
            align-items: center;
            padding-bottom: 18px;
            .line{
                width:6px;
                height: 12px;
                background:rgba(255,166,50,1);
                border-radius:3px;
                margin-right: 10px;
            }
        }
        .item_sub{
            display: flex;
            height: 60px;
            align-items: center;
            font-size: 16px;
            color: #363636;
            position: relative;
            background: #f6f5f5;
            padding:0 20px 0px 16px;
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
            padding:0px 28px;
            padding-bottom:20px;
            border:1px solid rgba(231, 231, 231, 1);
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
            .big_custorm{
                padding-top:30px;
                padding-bottom:60px;
                p{
                    line-height: 30px;
                }
                ul{
                    padding-top:17px;
                }
                li{
                    line-height: 46px;
                    padding-left:17px;
                    border-bottom:1px solid rgba(231,231,231,1);
                    &.title{
                        background:rgba(244,244,244,1);
                    }
                    &.name,&.contact{
                        border-left:1px solid rgba(231,231,231,1);
                        border-right:1px solid rgba(231,231,231,1);
                    }
                }
            }
            .recommend_supplier{
                .detail{
                    padding-left:22px;
                    .detail_item{
                        padding-bottom: 30px;
                    }
                    .detail_title{
                        display: flex;
                        align-items: center;
                        padding: 16px 0px;
                        .dot{
                            width:6px;
                            height: 6px;
                            border-radius: 6px;
                            background:rgba(255,166,50,1);
                            margin-right:6px;
                        }
                    }
                    .desc{
                        padding-bottom: 22px;
                    }
                    .supplier_item_title{
                        border:1px solid rgba(244,244,244,1);
                        line-height: 46px;
                        text-align: center;
                    }
                    table{
                        border-collapse:collapse;
                        border-radius: 3px;
                        td,th{
                            text-align: center;
                            border:1px solid rgba(244,244,244,1);
                            line-height: 46px;
                        }
                        th{
                            background:rgba(244,244,244,1);
                            color:fff;
                        }
                        a{
                            color:rgba(75,168,255,1);
                            text-decoration: underline;
                        }
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
            z-index: 1000;
        }
    }
</style>
