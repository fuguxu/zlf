<template>
    <div class="inviteCode">
        <div class="title">请输入邀请码，关联订单</div>
        <div class="input_code_box">
            <el-input placeholder="请输入您的专属邀请码"></el-input>
        </div>
        <div>
            <span class="button">提交</span>
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
    .inviteCode{
        padding-left:60px;
        padding-top:50px;
        .title{
            color: #292B2C;
            font-size:14px;
            padding-bottom: 20px;
        }
        .input_code_box{
            width:250px;
        }
        .el-input /deep/ .el-input__inner{
            border: 1px solid #dbd8d3;
            height:32px;
            &:focus{
                box-shadow: 0 0 5px #d7d7d7;
            }
        }
        .button{
            width:70px;
            height: 30px;
            margin-top:30px;
            // cursor: pointer;
            // display: inline-block;
            font-size: 14px;
            color: #fff;
            line-height:30px;
            // text-align: center;
            // border-radius: 5px;
            background: #ed9f34;
            &:hover{
                // background: #f1b255;
            }
        }
    }
</style>
