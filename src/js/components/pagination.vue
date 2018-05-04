<template>
    <el-pagination v-if="total"
        prev-text="上一页"
        next-text="下一页"
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="total"
        @current-change="currentChange"
        >
    </el-pagination>
</template>
<script>
export default {
    props:{
        total:{
            default:0
        },
        pageSize:{
            default:8
        }
    },
    data(){
        return {

        }
    },
    methods:{
        currentChange(currentPage){
            this.$emit('currentChange',currentPage);
        }
    }
}
</script>
<style lang="scss" scoped>
    .el-pagination{
        text-align: center;
        padding-top:30px;
        /deep/ .el-pager li{
            font-size: 13px;
            color: #0000FF;
            width:22px;
            min-width: 22px;
            height: 22px;
            line-height: 22px;
            padding: 0px;
            margin-left:6px;
            border-radius: 3px;
            font-weight: normal;
            border:1px solid #eee;
            &:hover{
                border-color:#0099ff;
            }
            &.active{
                color:#000;
                border:none;
            }
        }
        /deep/ button,/deep/ button span{
            height: 22px;
            line-height: 22px;
        }
            /deep/ button {
                padding: 0 6px;
                border-radius: 3px;
                border:1px solid #eee;
                color: #0000FF;
                &.disabled{
                cursor: pointer;
                }
                &:hover{
                    border-color:#0099ff;
                }
                &.btn-next{
                margin-left:6px;
                }
            } 
    }
</style>

