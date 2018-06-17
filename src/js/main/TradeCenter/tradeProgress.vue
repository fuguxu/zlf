<template>
    <div class="trade_progress">
        <div class="item custorm">
            <div class="item_title">
                <div class="line"></div>
                <span>客户联系信息</span>
            </div>
            <div class="item_content">
                <div class="label">客户名称</div>
                <div class="content">新派公寓</div>
            </div>
            <div class="item_content">
                <div class="label">项目名称</div>
                <div class="content">新国展中心店</div>
            </div>
            <div class="item_content">
                <div class="label">项目负责人</div>
                <div class="content">梁朝晖</div>
            </div>
            <div class="item_content">
                <div class="label">性&nbsp;&nbsp;&nbsp;&nbsp;别</div>
                <div class="content">男</div>
            </div>
            <div class="item_content">
                <div class="label">职&nbsp;&nbsp;&nbsp;&nbsp;位</div>
                <div class="content">市场总监</div>
            </div>
            <div class="item_content">
                <div class="label">手机号码</div>
                <div class="content">13710353888</div>
            </div>
            <div class="item_content">
                <div class="label">邮&nbsp;&nbsp;&nbsp;&nbsp;箱</div>
                <div class="content">354480928@163.com</div>
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
                <li>
                    <span>1. 您与客户取得了联系。</span>
                    <span>2018/04/24 10:11</span>
                </li>
                <li>
                    <span>2. 当前沟通基本顺利。</span>
                    <span>2018/04/25 09:07</span>
                </li>
                <li>
                    <span>3. 双方已针对报价达成初步共识。</span>
                    <span>2018/04/26 12:39</span>
                </li>
                <li>
                    <span>4. 您与该客户达成最终报价。</span>
                    <span>2018/04/28 15:56</span>
                </li>
                <li>
                    <span>5. 很遗憾，您的产品不符合客户需求。</span>
                    <span>2018/04/28 15:56</span>
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
            bigCustorm:{}
        }
    },
    methods:{
        getPlatformContact(){//大客户代表
            customerModule.getPlatformContact({
                orderNo:this.orderNo
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.bigCustorm=res.data;
                }
            })
        }
    },
    created(){
        this.getPlatformContact();
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
            padding-left:20px;
            padding-right: 62px;
            margin-top:20px;
            li{
                line-height: 38px;
                color:rgba(102, 102, 102, 1);
                display: flex;
                justify-content: space-between;
            }
        }
    }
</style>
