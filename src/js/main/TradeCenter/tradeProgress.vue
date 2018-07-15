<template>
    <div class="trade_progress">
        <div class="item custorm">
            <div class="item_title">
                <div class="line"></div>
                <span>客户联系信息</span>
            </div>
            <div class="item_content">
                <div class="label">客户名称</div>
                <div class="content">{{contactData.userAbbr}}</div>
            </div>
            <div class="item_content">
                <div class="label">项目名称</div>
                <div class="content">{{contactData.projectName}}</div>
            </div>
            <div class="item_content">
                <div class="label">项目负责人</div>
                <div class="content">{{contactData.name}}</div>
            </div>
            <div class="item_content">
                <div class="label">性&nbsp;&nbsp;&nbsp;&nbsp;别</div>
                <div class="content">{{contactData.sex=='1'?'男':'女'}}</div>
            </div>
            <div class="item_content">
                <div class="label">职&nbsp;&nbsp;&nbsp;&nbsp;位</div>
                <div class="content">{{contactData.position}}</div>
            </div>
            <div class="item_content">
                <div class="label">手机号码</div>
                <div class="content">{{contactData.mobile}}</div>
            </div>
            <div class="item_content">
                <div class="label">邮&nbsp;&nbsp;&nbsp;&nbsp;箱</div>
                <div class="content">{{contactData.email}}</div>
            </div>
        </div>
        <div class="item bigcustorm">
            <div class="item_title">
                <div class="line"></div>
                <span>租立方大客户代表联系信息</span>
            </div>
            <div class="item_content">
                <div class="label">姓&nbsp;&nbsp;&nbsp;&nbsp;名</div>
                <div class="content">{{bigCustorm.platBigCustomerName}}</div>
            </div>
            <!-- <div class="item_content">
                <div class="label">性&nbsp;&nbsp;&nbsp;&nbsp;别</div>
                <div class="content">女</div>
            </div> -->
            <div class="item_content">
                <div class="label">联系方式</div>
                <div class="content">{{bigCustorm.platBigCustomerMobile}}</div>
            </div>
            <!-- <div class="item_content">
                <div class="label">邮&nbsp;&nbsp;&nbsp;&nbsp;箱</div>
                <div class="content">354480928@163.com</div>
            </div>
            <div class="item_content">
                <div class="label">我司座机或400电话</div>
                <div class="content">4008804604</div>
            </div> -->
        </div>
        <div class="item progress">
            <div class="item_title">
                <div class="line"></div>
                <span>交易进展</span>
            </div>
            <ul class="progress_content">                                                                                                                                                                                               
                <li v-for="(item,index) in tradeList" :key="index">
                    <span>{{index+1+'.'+item.remark+item.progressDesc}}</span>
                    <span>{{item.createTime}}</span>
                </li>
                <li class="icon" v-if="tradeListDetail.status==-1">
                    <img  src="../../../img/trade_close.png" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
    data(){
        return {
            orderNo:this.$route.query.id,
            proCommNo:this.$route.query.listNo,
            contactData:{},
            bigCustorm:{},
            tradeList:[],
            tradeListDetail:{}
        }
    },
    methods:{
        getCustomerContact(){//客户联系人信息
            customerModule.getCustomerContact({
                orderNo:this.orderNo,
                cusType:'0'
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.contactData=res.data;
                }
            })
        },
        getPlatformContact(){//大客户代表
            customerModule.getPlatformContact({
                orderNo:this.orderNo
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.bigCustorm=res.data;
                }
            })
        },
        getProductListComm(){//进展
            customerModule.getProductListComm({
                proCommNo:this.proCommNo
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.tradeListDetail=res.data;
                    if(res.data.list){
                        this.tradeList=res.data.list.map(item=>{
                            return {
                                ...item,
                                createTime:AppUtil.transferTimeToString(item.createTime,'/',true)
                            }
                        });
                    }
                }
            })
        }
    },
    created(){
        this.getCustomerContact();
        this.getPlatformContact();
        this.getProductListComm();
    }
}
</script>
<style lang="scss" scoped>
    .trade_progress{
        padding:0px 21px;
        .item{
            padding:40px 0px;
           &:not(:last-child){
                border-bottom: 1px solid rgba(237, 237, 237, 1);
           }
            .item_title{
                display: flex;
                font-size:16px;
                align-items: center;
                .line{
                    width:6px;
                    height:12px; 
                    background:rgba(255,166,50,1);
                    border-radius: 3px;
                    margin-right: 14px;
                } 
            }
            .item_content{
                display: flex;
                margin-top:28px;
                .label{
                    min-width: 144px;
                    color:rgba(102,102,102,1);
                    box-sizing: border-box;
                    padding:0 20px;
                }
            }
        }
        .progress_content{
            margin-left: 20px;
            background: rgba(244,244,244,1);
            border-radius: 4px;
            padding-left:15px;
            padding-right: 15px;
            margin-top:20px;
            position: relative;
            li{
                line-height: 38px;
                color:rgba(102, 102, 102, 1);
                display: flex;
                justify-content: space-between;
            }
            .icon{
                position: absolute;
                left:50%;
                top: 50%;
                margin-top: -22px;
            }
        }
    }
</style>
