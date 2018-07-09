<template>
    <div class="trade_list">
        <div class="title font18">我的交易中心</div>
        <div class="table_title font16">
            <div class="td custorm">客户</div>
            <div class="td name">项目名称</div>
            <div class="td product">产品</div>
            <div class="td perInfo">客户项目负责人信息</div>
            <div class="td status">交易状态</div>
            <div class="td detail">交易详情</div>
        </div>
        <div class="item" v-for="(item,index) in list" :key="index">
            <div class="item_title">
                <span class="date">{{item.createTime.substr(0,10)}}</span>
                <span class="time">{{item.createTime.substr(11)}}</span>
                <span class="order_number">订单号：{{item.proListCommNo}}</span>
            </div>
            <div class="content">
                <div class="td custorm">
                    <div>{{item.userAbbr}}</div>
                </div>
                <div class="td name">
                    <div>{{item.projectName}}</div>
                </div>
                <div class="td product">
                    <div>
                        <p v-for="(it,i) in item.leaseTypeName" :key="i">{{it}}</p>
                        <!-- <p>办公场所活动板木家具</p>
                        <p>公寓活动板式家具</p> -->
                    </div>
                </div>
                <div class="td perInfo">
                    <div>
                        <p>{{item.productJoinMan}}</p>
                        <p>{{item.position}}</p>
                        <p>{{item.mobile}}</p>
                    </div>
                </div>
                <div class="td status">{{renderStatus(item)}}</div>
                <div class="td detail">
                    <div>
                        <div class="line_item">
                            <div class="dot"></div>
                            <div class="line"></div>
                        </div>
                        <div class="line_item">
                            <div class="dot"></div>
                            <div class="line"></div>
                        </div>
                        <div class="line_item">
                            <div class="dot"></div>
                            <div class="line"></div>
                        </div>
                    </div>
                    <a class="detail_text colorYellow" target="_blank" :href="`#/trade/detail?id=${item.orderNo}&leaseType=${item.leaseType}&listNo=${item.proListCommNo}`">交易详情</a>
                </div>
            </div>
        </div>
        <div class="footer" v-if="total>0">
            <span class="text">共有{{total}}条，每页显示:{{pageSize}}条</span>
            <pagination @currentChange="currentChange" :total="total" :pageSize="pageSize"></pagination>
        </div>
        <div class="no_content" v-if="list.length==0&&ajaxDone">
            <i class="icon colorYellow font18 el-icon-warning"></i>
            <span>当前没有交易信息</span>
        </div>
    </div>
</template>
<script>
import pagination from '../../components/pagination';
import {customerModule} from '../../api/main';
export default {
    data(){
        return {
            list:[],
            total:0,
            pageNo:1,
            pageSize:15,
            ajaxDone:false
        }
    },
    methods:{
        getRecommDetail(){
            customerModule.getRecommDetail({
                pageNo:this.pageNo,
                pageSize:this.pageSize
            }).then(res=>{
                if(res.statusCode=='1'&&res.data){
                    this.list=res.data.records.map(item=>{
                        return {
                            ...item,
                            leaseTypeName:item.leaseTypeName.split('、'),
                            createTime:AppUtil.transferTimeToString(item.createTime,'-',true)
                        }
                    });
                    this.total=res.data.total;
                    this.ajaxDone=true;
                }
            })
        },
        renderStatus(item){
            let statusName='';
            if(item.status=='0'){
                statusName='进行中'
            }else if(item.status=='1'){
                statusName='已完成'
            }else if(item.status=='-1'){
                statusName='已关闭'
            }
            return statusName;
        },
        currentChange(currentPage){
            this.pageNo=currentPage;
            this.getRecommDetail();
        }
    },
    created(){
        this.getRecommDetail();
    },
    components:{
        pagination
    }
}
</script>
<style lang="scss" scoped>
    .trade_list{
        min-height:600px;
        background: #fff;
        border-radius: 6px;
        border:1px solid rgba(237, 237, 237, 1);
        margin-bottom: 30px;
        color:rgba(51,51,51,1);
        .title{
            line-height: 64px;
            border-bottom: 1px solid rgba(237, 237, 237, 1);
            padding-left:25px;
        }
        .table_title{
            display: flex;
            line-height:60px; 
            background:rgba(244,244,244,1);
            border-radius: 4px ;
            margin:12px 25px;
            text-align: center;
            box-sizing: border-box;
        }
        .item{
            box-sizing: border-box;
            border:2px solid transparent;
            margin:0 25px 24px 25px;
            &:hover{
                border:2px solid rgba(255, 166, 50, 1);
            }
        }
        .item_title{
            line-height:46px; 
            background:rgba(244,244,244,1);
            border-radius: 4px;
            padding-left:39px;
            .time{
                margin:0 81px 0 14px;
            }
        }
        .content{
            min-height: 110px;
            border:1px solid rgba(230, 230, 230, 1);
            border-radius: 4px;
            display: flex;
            align-items: center;
            box-sizing: border-box;
            .td:not(:last-child){
                border-right: 1px solid rgba(230, 230, 230, 1);
            }
            .td{
                height:82px;
                display: flex;
                align-items: center;
                text-align: center;
                justify-content: center;
                p{
                    line-height: 30px;
                }
                .detail_text{
                    font-size:14px;
                    text-decoration: underline;
                }
                .line_item{
                    display: flex;
                    align-items: center;
                    margin-top:3px;
                    .dot{
                        width:3px;
                        height:3px;
                        background: rgba(255, 166, 50, 1);
                    }
                    .line{
                        width:10px;
                        height:1px;
                        background: rgba(255, 166, 50, 1);
                        margin:0px 15px 0 5px;
                    }
                }
            }
        }
        .td{
            box-sizing: border-box;
            &.custorm{
                width:154px; 
            }
            &.name{
                width:195px; 
            }
            &.product{
                width:271px; 
            }
            &.perInfo{
                width:211px; 
            }
            &.status{
                width:142px; 
            }
            &.detail{
                width:158px; 
            }
        }
        .footer{
            display: flex;
            align-items: center;
            color:rgba(102,102,102,1);
            justify-content: flex-end;
            padding:36px 25px;
            .text{
                margin-right:20px;
            }
            .el-pagination{
                padding-top:0px;
            }
        }
        .no_content{
            display: flex;
            justify-content: center;
            padding-top:100px;
            .icon{
                margin-right: 10px;
            }
        }
    }
</style>
