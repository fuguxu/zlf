<template>
    <div class="supplier_right">
        <a class="text" href="">交易中心</a>
        <a class="recommend text" href="">推荐值</a>
        <el-switch
            style="display: block"
            v-model="value4"
            active-color="#fff"
            inactive-color="#fff"
            :active-text="activeText"
            >
        </el-switch>
    </div>
</template>
<script>
export default {
    data(){
        return {
            value4:false,
        }
    },
    computed:{
        activeText(){
            return !this.value4?'产能不足，推荐已关闭':'产能充足，推荐已开启'
        }
    }
}
</script>
<style lang="scss" scoped>
    .supplier_right{
        flex:1;
        display: flex;
        align-items: center;
        height:100%;
        justify-content: flex-end;
        .text{
            font-size: 14px;
            &:hover{
                color: rgba(255, 255,255, 0.75);
            }
        }
        .recommend{
            margin:0 50px;
        }
    }
</style>
<style scoped>
    .el-switch{
        margin-right: 50px;
    }
    .el-switch>>>.el-switch__core .el-switch__button{
        background-color: #ffd700;
    }
    .el-switch>>>.el-switch__label{
        font-size: 14px;
        color:#fff;
    }
</style>
