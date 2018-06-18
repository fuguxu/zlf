<template>
    <div class="rent_money">
        <div class="title">
            <div class="line"></div>
            <div>提交贵司财务对接人信息</div>
        </div>
        <rentMoneyInfo :orderNo="orderNo" :cusType="1"></rentMoneyInfo>
        <div class="title">
            <div class="line"></div>
            <div>请留存我司租金对接人信息</div>
        </div>
        <div class="my_person">
            <div class="form_item">
                <div class="label">姓名：</div>
                <div class="text">{{projectInfo.platFinancerName}}</div>
            </div>
            <div class="form_item">
                <div class="label">性别：</div>
                <div class="text">{{projectInfo.platFinancerSex==1?'男':'女'}}</div>
            </div>
            <div class="form_item">
                <div class="label">手机号码：</div>
                <div class="text">{{projectInfo.platFinancerMobile}}</div>
            </div>
            <div class="form_item">
                <div class="label">我司座机或400电话：</div>
                <div class="text">{{projectInfo.platFinancerTel}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import rentMoneyInfo from '../../components/rentMoneyInfo'; 
import {customerModule} from '../../../api/main';
export default {
    props:['orderNo'],
    data(){
        return {
            projectInfo:{}
        }
    },
    methods:{
        getProjectInfo(){
            customerModule.getProjectInfo({
                orderNo:this.orderNo
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.projectInfo=res.data;
                }
            })
        }
    },
    created(){
        this.getProjectInfo();
    },
    components:{
        rentMoneyInfo
    }
}
</script>
<style lang="scss" scoped>
    .rent_money{
        min-height:400px;
        padding-left:10px;
        // background: #f6f5f5;
        border: 1px solid rgba(231,231,231,1);
        .title{
            display: flex;
            align-items: center;
            padding: 20px 0px;
            .line{
                width:6px;
                height:12px; 
                background:rgba(255,166,50,1);
                border-radius: 3px ;
                margin-right:5px;
            }
        }
        .my_person{
            padding-bottom: 30px;
            .form_item{
                display: flex;
                align-items: center;
                padding:5px 15px;
                color:rgba(102,102,102,1);
                .label{
                    margin-right: 5px;
                }
                .text{
                }
            }
        }
    }
</style>
