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
           if(type&&province){
               this.$emit('updateStep',this.stepComponent,this.sullpierType);
           }
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
        text-align: center;
        /deep/ .label{
            width: 110px;
            display: inline-block;
            text-align: right;
            box-sizing: border-box;
            padding-right: 15px;
        }
        /deep/ .el-input__inner{
            width:282px;
            cursor: pointer;
        }
        /deep/ .error_message{
            position: absolute;
            left: 100%;
            width:80%;
            top:0px;
            line-height: 40px;
            text-align: left;
            .icon{
                margin:0 5px 0 20px;
            }
        }
        .supplier_type{
            margin-top:50px;
            display: flex;
            justify-content: center;
            /deep/ .label{
                line-height: 40px;
            }
        }
        .bussiness_province{
            margin-top:50px;
        }
        /deep/ .el-checkbox__input.is-checked .el-checkbox__inner{
            background: rgba(255,166,50,1);
            &:after{
                border: 1px solid #fff;
                border-left: 0;
                border-top: 0;
            }
        }
    }
    .footer{
        padding:50px 0px 100px;
    }
    .button{
        font-size: 16px;
        color: rgba(255, 255, 255, 1);
        width:282px;
        line-height: 36px;
        margin-left: 110px;
    }
</style>
