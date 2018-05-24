<template>
    <div class="rent_money">
        <div class="title">
            <div class="line"></div>
            <div>提交贵司财务对接人信息</div>
        </div>
        <rentMoneyInfo></rentMoneyInfo>
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
import rentMoneyInfo from '../../components/rentMoneyInfo'; 
export default {
    data(){
        return {
            
        }
    },
    methods:{
        
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
    }
</style>
