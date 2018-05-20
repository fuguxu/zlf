<template>
    <div class="rent_sale">
        <div class="item">
            <div class="title">
                <div class="line"></div>
                <div>请留存“公寓固装家具”相关售后服务对接人信息</div>
            </div>
            <div class="info_box">
                <div class="supplier_box">
                    <div class="title">供应商（美的集团）售后服务对接人信息</div>
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
                <div class="zlf_box">
                    <div class="title">租立方售后服务对接人信息</div>
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
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    }
}
</script>
<style lang="scss" scoped>
    .rent_sale{
        min-height:400px;
        padding-left:10px;
        background: #f6f5f5;
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
        .info_box{
            display: flex;
            .supplier_box,.zlf_box{
                flex:1;
                .title{
                    padding-left:12px;
                }
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
    }
</style>
