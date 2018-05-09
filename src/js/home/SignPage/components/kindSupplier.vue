<template>
    <div class="kind_supplier">
        <stepBar :step="2" :role="role"></stepBar>
        <div class="kind_content">
            <supplierType></supplierType>
            <div class="footer">
                <span class="button" @click="nextStep">下一步</span>
            </div>
        </div>
    </div>
</template>
<script>
import stepBar from './stepBar';
import supplierType from '../../../components/supplierType';
export default {
    props:{
        stepComponent:{

        },
        role:{

        }
    },
    data(){
        return {

        }
    },
    methods:{
        nextStep(){
            this.$emit('updateStep',this.stepComponent);
        }
    },
    components:{
        stepBar,
        supplierType
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
        }
    }
    .footer{
        padding-top:50px;
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
