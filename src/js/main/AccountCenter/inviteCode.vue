<template>
    <div class="inviteCode">
        <div class="title">请输入邀请码，关联订单</div>
        <div class="input_code_box">
            <el-input @blur="valiateCode" :maxlength="6" v-model="inviteCode" placeholder="请输入您的专属邀请码"></el-input>
            <div class="error_message" v-if="errorMessage">
                <i class="icon el-icon-error"></i>
                <span>{{errorMessage}}</span>
            </div>
        </div>
        <div>
            <span @click="relationOrder" class="button">提交</span>
        </div>
    </div>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
    data(){
        return {
            inviteCode:'',
            errorMessage:''
        }
    },
    methods:{
        valiateCode(){
            if(!this.inviteCode){
                this.errorMessage='请输入您的专属邀请码！';
                return false;
            }else{
                this.errorMessage='';
                return true;
            }
        },
        relationOrder(){
            if(this.valiateCode()){
                customerModule.relationOrder({
                    code:this.inviteCode
                }).then(res=>{
                    if(res.statusCode=='1'){
                        let data=res.data;
                        this.$router.push(`/trade/detail/progress?id=${data.orderNo}&leaseType=${data.leaseType}&listNo=${data.proListCommNo}`)
                    }else{
                        this.errorMessage=res.message;
                    }
                })
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .inviteCode{
        padding-left:43px;
        padding-top:50px;
        .title{
            padding-bottom: 20px;
        }
        .input_code_box{
            display: flex;
            .error_message{
                display: flex;
                align-items: center;
                .icon{
                    // margin:0 5px 0 15px;
                }
            }
        }
        .el-input{
            width:296px;
        }
        .el-input /deep/ .el-input__inner{
            height:40px;
        }
        .button{
            width:148px;
            height: 40px;
            margin-top:30px;
            color: #fff;
            line-height:40px;
            &:hover{
                
            }
        }
    }
</style>
