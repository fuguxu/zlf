<template>
    <div class="supplier_right">
        <a class="text" href="">交易中心</a>
        <router-link to="/recommend" class="recommend text">推荐值</router-link>
        <el-switch
            style="display: block"
            v-model="switchValue"
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
            switchValue:'',
        }
    },
    mounted(){
        this.switchValue=false;
    },
    computed:{
        activeText(){
            return this.switchValue?'产能充足，推荐已开启':'产能不足，推荐已关闭'
        }
    },
    watch:{
        switchValue(n,o){
            Bus.$emit('recommendSwitch',n);
            localStorage.setItem('recommendSwitch',n);
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
            &:hover,&.router-link-active{
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
