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
        padding: 0px;
        /deep/ .el-pager li{
            font-size: 14px;
            color: #666;
            width:32px;
            min-width: 32px;
            height: 32px;
            line-height: 32px;
            padding: 0px;
            // margin-left:6px;
            // border-radius: 3px;
            font-weight: normal;
            border:1px solid rgba(220, 220, 220, 1);
            border-right:none;
            &:hover{
                // border-color:#0099ff;
                color:rgba(255, 166, 50, 1);
            }
            &.active{
                color:#fff;
                background:rgba(255, 166, 50, 1);
                border:none;
            }
        }
        /deep/ button,/deep/ button span{
            height: 32px;
            line-height: 32px;
        }
            /deep/ button {
                padding: 0 6px;
                
                border:1px solid rgba(220, 220, 220, 1);
                border-right: none;
                color: #666;
                &.disabled{
                    cursor: pointer;
                }
                &:hover{
                    color:rgba(255, 166, 50, 1);
                }
                &.btn-prev{
                    border-top-left-radius: 3px;
                    border-bottom-left-radius: 3px;
                }
                &.btn-next{
                    border-right:1px solid rgba(220, 220, 220, 1);
                    border-top-right-radius: 3px;
                    border-bottom-right-radius: 3px;
                // margin-left:6px;
                }
            } 
    }
</style>

