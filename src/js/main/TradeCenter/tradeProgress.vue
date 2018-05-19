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
                <div class="content">杨栎</div>
            </div>
            <div class="item_content">
                <div class="label">性&nbsp;&nbsp;&nbsp;&nbsp;别</div>
                <div class="content">女</div>
            </div>
            <div class="item_content">
                <div class="label">手机号码</div>
                <div class="content">13710353888</div>
            </div>
            <div class="item_content">
                <div class="label">邮&nbsp;&nbsp;&nbsp;&nbsp;箱</div>
                <div class="content">354480928@163.com</div>
            </div>
            <div class="item_content">
                <div class="label">我司座机或400电话</div>
                <div class="content">4008804604</div>
            </div>
        </div>
        <div class="item bigcustorm">
            <div class="item_title">
                <div class="line"></div>
                <span>交易进展</span>
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
    .trade_progress{
        padding:0px 21px 37px 21px;
        .item{
            padding:40px 0px;
           &:not(:last-child){
                border-bottom: 1px solid rgba(237, 237, 237, 1);
           }
            .item_title{
                display: flex;
                font-size:18px;
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
                font-size:16px;
                color:rgba(51,51,51,1);
                margin-top:28px;
                .label{
                    min-width: 144px;
                    color:rgba(102,102,102,1);
                    box-sizing: border-box;
                    padding:0 20px;
                }
            }
        }
    }
</style>
