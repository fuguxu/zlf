<template>
    <div class="trade_list">
        <div class="title">我的交易中心</div>
        <div class="table_title">
            <div class="td custorm">客户</div>
            <div class="td name">项目名称</div>
            <div class="td product">产品</div>
            <div class="td perInfo">客户项目负责人信息</div>
            <div class="td status">交易状态</div>
            <div class="td detail">交易详情</div>
        </div>
        <div class="item" v-for="(item,index) in list" :key="index">
            <div class="item_title">
                <span class="date">2018-05-05</span>
                <span class="time">19:39:16</span>
                <span class="order_number">订单号：411968713081471</span>
            </div>
            <div class="content">
                <div class="td custorm">
                    <div>新派公寓</div>
                </div>
                <div class="td name">
                    <div>新国展中心店</div>
                </div>
                <div class="td product">
                    <div>
                        <p>公寓固装家具</p>
                        <p>办公场所活动板木家具</p>
                        <p>公寓活动板式家具</p>
                    </div>
                </div>
                <div class="td perInfo">
                    <div>
                        <p>梁朝晖</p>
                        <p>市场总监</p>
                        <p>13710353879</p>
                    </div>
                </div>
                <div class="td status">进行中</div>
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
                    <a class="detail_text" href="#/trade/detail">交易详情</a>
                </div>
            </div>
        </div>
        <div class="footer">
            <span class="text">共有{{total}}条，每页显示:{{pageSize}}条</span>
            <pagination :total="total" :pageSize="pageSize"></pagination>
        </div>
    </div>
</template>
<script>
import pagination from '../../components/pagination';
export default {
    data(){
        return {
            list:[1,2,3,4,5,6,7],
            total:47,
            pageSize:15
        }
    },
    components:{
        pagination
    }
}
</script>
<style lang="scss" scoped>
    .trade_list{
        min-height:300px;
        background: #fff;
        border-radius: 6px;
        border:1px solid rgba(237, 237, 237, 1);
        margin-bottom: 38px;
        padding:0 32px;
        color:rgba(51,51,51,1);
        .title{
            line-height: 64px;
            border-bottom: 1px solid rgba(237, 237, 237, 1);
            font-size:20px;
        }
        .table_title{
            display: flex;
            line-height:60px; 
            background:rgba(244,244,244,1);
            border-radius: 4px ;
            margin-top:32px;
            margin-bottom: 32px;
            font-size:20px;
            text-align: center;
            box-sizing: border-box;
        }
        .item{
            margin-top:16px;
            box-sizing: border-box;
            border:2px solid transparent;
            &:hover{
                border:2px solid rgba(255, 166, 50, 1);
            }
        }
        .item_title{
            line-height:60px; 
            background:rgba(244,244,244,1);
            border-radius: 4px;
            font-size:18px;
            padding-left:39px;
            .time{
                margin:0 140px 0 30px;
            }
        }
        .content{
            min-height: 166px;
            border:1px solid rgba(230, 230, 230, 1);
            border-radius: 4px;
            display: flex;
            align-items: center;
            font-size:18px;
            .td:not(:last-child){
                border-right: 1px solid rgba(230, 230, 230, 1);
            }
            .td{
                height:140px;
                display: flex;
                align-items: center;
                text-align: center;
                justify-content: center;
                p{
                    line-height: 38px;
                }
                .detail_text{
                    font-size:18px;
                    color:rgba(255, 166, 50, 1);
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
            font-size:14px;
            color:rgba(102,102,102,1);
            justify-content: flex-end;
            padding:50px 0px;
            .text{
                margin-right:20px;
            }
            .el-pagination{
                padding-top:0px;
            }
        }
    }
</style>
