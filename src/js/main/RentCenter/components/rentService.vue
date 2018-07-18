<template>
    <div class="rent_service">
        <div class="item">
            <div class="item_sub">
                <div class="circel">1</div>
                <span>填写《项目信息收集表》</span>
                <!-- <i v-if="data[0].isOperation=='0'" class="el-icon-setting"></i> -->
                <i class="icon" :class="{'el-icon-caret-bottom':!start,'el-icon-caret-top':start}" @click="clickExtend(0,'start')"></i>
            </div>
            <el-collapse-transition>
                <div class="extend"  v-if="start">
                    <div class="extend_title">了解您的项目详情，以便开展下一步租赁服务，请您：</div>
                    <p class="text"><span> a. 下载《项目信息收集表》</span><a class="link" target="_blank" href="https://zlfoss.oss-cn-shenzhen.aliyuncs.com/pub_doc/%E7%A7%9F%E7%AB%8B%E6%96%B9%E9%A1%B9%E7%9B%AE%E4%BF%A1%E6%81%AF%E6%94%B6%E9%9B%86%E8%A1%A8.xlsx">（点此下载）</a></p>
                    <p class="text"><span> b. 线下填写《项目信息收集表》，并将该表及表中要求的附件，一起打包邮件至</span><span class="link">service@zucube.cn</span></p>
                    <!-- <div class="next_step">审核通过，将开启下一步</div> -->
                </div>
            </el-collapse-transition>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">2</div>
                <span>签署《平台服务协议》</span>
                <!-- <i v-if="data[1].isOperation=='0'" class="el-icon-setting"></i> -->
                <i class="icon" :class="{'el-icon-caret-bottom':!doing,'el-icon-caret-top':doing}" @click="clickExtend(1,'doing')"></i>
            </div>
            <el-collapse-transition>
                <div v-if="doing" class="extend" >
                    <div class="extend_title">建立双方互信、良好的合作前提，请您：</div>
                    <p class="text"><span> a. 下载《平台服务协议》</span><a class="link" target="_blank" href="https://zlfoss.oss-cn-shenzhen.aliyuncs.com/pub_doc/%E5%B9%B3%E5%8F%B0%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE.pdf">（点此下载）</a></p>
                    <p class="text"><span> b. 线下签署并加盖公司红章，上传清晰可见的扫描件</span></p>
                    <uploadLicence saveType="cooperationAgreement" :orderNo="orderNo" :showMore="false"></uploadLicence>
                    <!-- <div class="next_step">审核通过，将开启下一步</div> -->
                </div>
            </el-collapse-transition>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">3</div>
                <span>提交认证资料</span>
                <i class="icon" :class="{'el-icon-caret-bottom':!finish,'el-icon-caret-top':finish}" @click="clickExtend(2,'finish')"></i>
            </div>
            <el-collapse-transition>
                <div v-if="finish" class="extend">
                    <div class="extend_title">认证清单要求的认证资料准备越齐全，租赁年化率将越低！</div>
                    <p class="text"><span> a. 下载《租立方认证资料清单》</span><a class="link" target="_blank" href="https://zlfoss.oss-cn-shenzhen.aliyuncs.com/pub_doc/%E7%A7%9F%E7%AB%8B%E6%96%B9%E8%AE%A4%E8%AF%81%E8%B5%84%E6%96%99%E6%B8%85%E5%8D%95.doc">（点此下载）</a></p>
                    <p class="text"><span> b. 请将清单内要求的资料准备齐全，一起打包邮件至</span><span class="link">service@zucube.cn</span></p>
                    <p class="text"><span> c.务必填写<span class="link">“{{orderName}}”</span>项目负责人信息，以便租立方大客户代表与您即刻取得联系！</span></p>
                    <rentMoneyInfo :orderNo="orderNo" :cusType="0" placeholderPerson="请输入负责人姓名" placeholderJob="请输入负责人在贵司所担任职位"></rentMoneyInfo>
                    <!-- <div class="next_step">审核通过，将开启下一步</div> -->
                    <div class="next_step_desc">
                        <div class="circle_wrap">
                            在您将“<div class="circel">1</div> 、<div class="circel">2</div> 、<div class="circel">3</div> ”要求的资料提交后，
                        </div>
                        <div>
                            我们将在3个工作日内审核，并系统消息或者邮件通知您，请留意：
                        </div>
                        <div> 审核通过，将开启下一步！</div>
                    </div>
                </div>
            </el-collapse-transition>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">4</div>
                <span>产品清单沟通</span>
                <img v-if="data.length>0&&data[3].isOperation=='0'" class="lock" src="../../../../img/lock.png" alt="">
                <i class="icon" :class="{'el-icon-caret-bottom':!transfer,'el-icon-caret-top':transfer}"  @click="clickExtend(3,'transfer')"></i>
            </div>
            <el-collapse-transition>
                <div v-if="transfer" class="extend">
                    <div class="big_custorm">
                        <p class="font16">此环节，请您与供应商针对产品清单沟通产品需求、报价等相关事宜。</p>
                        <p class="font16">我们将指派租立方大客户代表，负责该项目的租赁服务。</p>
                        <ul>
                            <li class="title">租立方大客户代表</li>
                            <li class="name"><span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span><span>{{projectDetail.platBigCustomerName}}</span></li>
                            <li class="contact"><span>联系方式：</span><span>{{projectDetail.platBigCustomerMobile}}</span></li>
                        </ul>
                    </div>
                    <div class="step font16"><span class="line"></span><span>a.开始选择您的租赁物以及对应的供应商来源</span></div>
                    <choiceRent @updateRecommend="updateRecommend" :isRecommend="isRecommend" :orderNo="orderNo"></choiceRent>
                    <div class="recommend_supplier" v-if="isRecommend">
                        <div class="step font16"><span class="line"></span><span>b.与供应商产品沟通进展</span></div>
                        <div class="detail">
                            <div class="detail_item" v-if="appointSupplier.length>0">
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
                            <div class="detail_item" v-if="recommendSupplier.length>0">
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
                                            <td><a :href="`#/case?id=${it.userNo}`" target="_blank">点击查看详情</a></td>
                                            <td>{{it.ext}}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div class="detail_item" v-if="appointProgress.length>0">
                                <div class="detail_title"><span class="dot"></span><span>指定合作供应商产品清单沟通进展</span></div>
                                <ul class="progress" v-for="(item,index) in appointProgress" :key="index">
                                    <li class="title">{{item.name}}产品清单沟通进展</li>
                                    <li v-for="(it,i) in item.list" :key="i">
                                        <span>{{i+1}}. {{it.type==1?`${it.ext1}被淘汰`:it.progressDesc}}</span>
                                        <span>{{it.createTime}}</span>
                                    </li>
                                    <li class="icon" v-if="item.status==1||item.status==-1">
                                        <img v-if="item.status==1" src="../../../../img/pass_icon_big.png" alt="">
                                        <img v-if="item.status==-1" src="../../../../img/trade_close.png" alt="">
                                    </li>
                                </ul>
                            </div>
                            <div class="detail_item" v-if="recommendProgress.length>0">
                                <div class="detail_title"><span class="dot"></span><span>推荐供应商产品清单沟通进展</span></div>
                                <ul class="progress" v-for="(item,index) in recommendProgress" :key="index">
                                    <li class="title">{{item.name}}产品清单沟通进展</li>
                                    <li v-for="(it,i) in item.list" :key="i">
                                        <span>{{i+1}}. {{it.type==1?`${it.ext1}被淘汰`:it.progressDesc}}</span>
                                        <span>{{it.createTime}}</span>
                                    </li>
                                    <li class="icon" v-if="item.status==1||item.status==-1">
                                        <img v-if="item.status==1" src="../../../../img/pass_icon_big.png" alt="">
                                        <img v-if="item.status==-1" src="../../../../img/trade_close.png" alt="">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </el-collapse-transition>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">5</div>
                <span>签署购销合同与付款</span>
                <img v-if="data.length>0&&data[4].isOperation=='0'" class="lock" src="../../../../img/lock.png" alt="">
                <i class="icon" :class="{'el-icon-caret-bottom':!logistics,'el-icon-caret-top':logistics}"  @click="clickExtend(4,'logistics')"></i>
            </div>
            <el-collapse-transition>
                <div class="extend logistics" v-if="logistics">
                    <ul v-for="(item,index) in contractAndPay" :key="index" class="logistics_item">
                        <li class="logistics_title">{{item.name}}</li>
                        <ul v-for="(it,i) in item.list" :key="i" class="second_item">
                            <li >
                                <span v-if="it.ext1" class="colorYellow">{{it.ext1}}></span>
                                <span class="color6">签署购销合同与付款</span>
                            </li>
                            <li>
                                <span>a.线下签署</span>
                                <span class="colorBlue">《购销合同》</span>
                                <img v-if="it.financLeaseContractStatus==1" src="../../../../img/pass_icon.png" alt="">
                            </li>
                            <li>
                                <span>b.依照合同约定期限，请您线下缴付该租赁物</span>
                                <span class="colorBlue">“保证金及平台服务费”</span>
                                <img v-if="it.marginLeaseholdStatus==1" src="../../../../img/pass_icon.png" alt="">
                            </li>
                            <li>
                                <span>c.依照合同约定期限，请您线下缴付该租赁物</span>
                                <span class="colorBlue">“第一次月付租金”</span>
                                <img v-if="it.firstRentStatus==1" src="../../../../img/pass_icon.png" alt="">
                            </li>
                        </ul>
                    </ul>
                </div>
            </el-collapse-transition>
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
            start:true,
            doing:false,
            finish:false,
            transfer:false,
            logistics:false,
            projectDetail:{},
            appointSupplier:[],
            recommendSupplier:[],
            appointProgress:[],
            recommendProgress:[],
            contractAndPay:[]
        }
    },
    methods:{
        clickExtend(index,flag){
            if(this.data[index].isOperation=='1'){
                this[flag]=!this[flag];
                if(this.transfer&&flag=='transfer'){
                    this.getProjectInfo();
                    this.getAppointSupplier();
                    this.getRecommendSupplier();
                    this.getAppointProgress();
                    this.getRecommendProgress();
                }else if(this.logistics&&flag=='logistics'){
                    this.getContractAndPay();
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
        },
        getAppointProgress(){//获取指定合作供应商产品列表
            customerModule.getAppointProgress({orderNo:this.orderNo}).then(res=>{
                if(res.statusCode=='1'){
                    this.appointProgress=res.data.map(item=>{
                        item.list=item.list.map(it=>{
                            return {
                                ...it,
                                createTime:AppUtil.transferTimeToString(it.createTime,'/',true)
                            }
                        })
                        return item;
                    });
                }
            })
        },
        getRecommendProgress(){//获取指定合作供应商产品列表
            customerModule.getRecommendProgress({orderNo:this.orderNo}).then(res=>{
                if(res.statusCode=='1'){
                    this.recommendProgress=res.data.map(item=>{
                        item.list=item.list.map(it=>{
                            return {
                                ...it,
                                createTime:AppUtil.transferTimeToString(it.createTime,'/',true)
                            }
                        })
                        return item;
                    });
                }
            })
        },
        updateRecommend(){//点击提交租赁物后 更新推荐结果
            this.getProjectInfo();
            this.getAppointSupplier();
            this.getRecommendSupplier();
            this.getAppointProgress();
            this.getRecommendProgress();
        },
        getContractAndPay(){//获取合同与付款
            customerModule.getContractAndPay({orderNo:this.orderNo}).then(res=>{
                if(res.statusCode=='1'){
                    this.contractAndPay=res.data;
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
    computed:{
        isRecommend(){//是否推荐过
            return this.appointSupplier.length>0||this.recommendSupplier.length>0||this.appointProgress.length>0||this.recommendProgress.length>0
        }
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
            font-size: 14px;
            // color: #363636;
            position: relative;
            background: rgba(244,244,244,1);
            padding:0 20px 0px 16px;
            
        }
        .circel{
            width:18px;
            height: 18px;
            border-radius: 50%;
            background: rgba(255,166,50,1);
            font-size: 14px;
            color:#fff;
            text-align: center;
            line-height: 18px;
            margin-right: 16px;
        }
        .extend{
            padding:0px 28px;
            padding-bottom:40px;
            border:1px solid rgba(231, 231, 231, 1);
            &.logistics{
                padding:0px 0px 0px 50px;
                .logistics_item{
                    margin-top:20px;
                }
                .second_item{
                    margin:20px 0px;
                    line-height: 34px;
                }
                li{
                    display: flex;
                    align-items: center;
                    img{
                        margin-left:10px;
                    }
                }
                .colorBlue{
                    color:rgba(75, 155, 255, 1);
                }
                .logistics_title{
                    line-height: 34px;
                    background: rgba(255,166,50,1);
                    color:#fff;
                    padding-left:13px;
                }
            }
            .el-form{
                padding-top:20px;
                /deep/ .el-form-item__label{
                    width:0px !important;
                }
                /deep/ .el-form-item__content{
                    margin-left:0px !important;
                }
            }
            .extend_title{
                // font-size: 15px;
                color: rgba(136,136,136,1);
                padding-bottom: 10px;
                padding-top: 28px;
            }
            .text{
                // color: #363636;
                font-size:14px;
                line-height: 30px;
                .link{
                    color:rgba(50,146,255,1);
                }
                a.link:hover{
                    text-decoration: underline;
                }
            }
            .file-upload-container{
                justify-content: flex-start;
                // padding-left:20px;
                padding-top:10px;
                /deep/ .button{
                    margin-top:0px;
                }
            }
            .next_step_desc{
                display: inline-block;
                color:rgba(102,102,102,1);
                font-size: 12px;
                background:rgba(244,244,244,1);
                padding:20px 20px 20px 13px;
                line-height: 18px;
                .circle_wrap{
                    display: flex;
                    .circel{
                        margin-right:0px;
                    }
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
                    .recommend_supplier_item{
                        padding-bottom: 20px;
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
                    .progress{
                        margin-bottom: 20px;
                        position: relative;
                        .icon{
                            position: absolute;
                            left:50%;
                            z-index: 100;
                        }
                    }
                    ul{
                        border:1px solid rgba(244,244,244,1);
                    }
                    li{
                        line-height: 46px;
                        display: flex;
                        justify-content: space-between;
                        padding:0 25px 0 28px;
                        &.title{
                            background:rgba(244,244,244,1);
                            padding-left:14px;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        .icon{
            font-size:12px;
            color:rgba(153,153,153,1);
            position: absolute;
            right: 20px;
            top: 50%;
            margin-top: -6px;
            cursor: pointer;
            z-index: 1000;
        }
        .lock{
            position: absolute;
            right: 63px;
            top: 50%;
            margin-top: -8px;
        }
    }
    .collapse-enter-active,.collapse-leave-active {
        // transition: all 0.3s;
        // height:auto;
    }
    .collapse-enter,.collapse-leave-to{
        // height:0px;
        // overflow: hidden;
    }
    .collapse-leave,.collapse-enter-to{
        // height:auto;
        // overflow: visible;
    }
</style>
