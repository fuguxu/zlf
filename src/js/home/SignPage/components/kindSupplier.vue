<template>
    <div class="kind_supplier">
        <stepBar :step="2" :role="role"></stepBar>
        <div class="kind_content">
            <supplierType @updateType="updateType" ref="type"></supplierType>
            <bussinessProvince @updateArea="updateArea" ref="province"></bussinessProvince>
            <div class="footer">
                <span class="button" @click="nextStep">下一步</span>
            </div>
            
        </div>
    </div>
</template>
<script>
import stepBar from './stepBar';
import supplierType from '../../../components/supplierType';
import bussinessProvince from '../../../components/bussinessProvince';
export default {
    props:{
        stepComponent:{

        },
        role:{

        }
    },
    data(){
        return {
            sullpierType:{
                leaseArea:[],
                userType:[]
            }
            
        }
    },
    methods:{
        nextStep(){
           let type= this.$refs.type.valiate();
           let province= this.$refs.province.valiate();
            type&&province&&this.$emit('updateStep',this.stepComponent,this.sullpierType);
        },
        updateArea(area){//接受覆盖范围
            this.sullpierType.leaseArea=area;
        },
        updateType(userType){//接受类型
            this.sullpierType.userType=userType;
        }
    },
    components:{
        stepBar,
        supplierType,
        bussinessProvince
    }
    
}
</script>
<style lang="scss" scoped>
    .kind_content{
        padding-left:390px;
        /deep/ .label{
            font-size: 16px;
            color: #515151;
            width: 110px;
            display: inline-block;
        }
        /deep/ .el-input__inner{
            width:122px;
            cursor: pointer;
        }
        /deep/ .error_message{
            position: absolute;
            left: 100%;
            width:200%;
            top:0px;
            line-height: 40px;
            .icon{
                margin:0 5px 0 20px;
            }
        }
        .supplier_type{
            margin-top:50px;
        }
        .bussiness_province{
            margin-top:40px;
        }
    }
    .footer{
        padding:50px 0px 100px;
    }
    .button{
        cursor: pointer;
        display: inline-block;
        text-align: center;
        font-size: 18px;
        color: rgba(255, 255, 255, 0.9);
        width:110px;
        line-height: 36px;
        background: #ff9829;
        border-radius: 5px;
        &:hover{
            background:  #ffa64c;
        }
    }
</style>
