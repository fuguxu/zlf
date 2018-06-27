<template>
    <div class="dialog dialog_wrap" @click="cancel">
        <div class="content" @click.stop="1">
            <div class="header font18 color6">您选择了以下租赁物以及对应的供应商来源，<br />请再次确认！</div>
            <div class="table-wrap">
                <table>
                    <tr>
                        <th>租赁物</th>
                        <th>供应商来源</th>
                    </tr>
                    <tr v-for="(item,index) in data" :key="index">
                        <td>{{item.catName}}</td>
                        <td>{{item.supplierSource==1?'我来指定供应商':'租立方推荐供应商'}}</td>
                    </tr>
                </table>
                <div class="footer">
                    <span @click="cancel" class="button back cancel">返回修改</span>
                    <span @click="submit" class="button sure">确认提交</span>
                </div>
            </div>
        </div>
        <div class="dialog" v-if="loading" @click.stop="1">
            <div class="loading-content">
                <div>
                    <div class="font18">正在努力推荐，请稍等~</div>
                    <i class="icon el-icon-loading"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['data','visible','loading'],
    data(){
        return {

        }
    },
    methods:{
        cancel(){
            this.$emit('update:visible',false);
        },
        submit(){
            this.$emit('submit',true);
        }
    },
    mounted(){
        // console.log(this.data)
    }
}
</script>
<style lang="scss" scoped>
.dialog_wrap{
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
}
    .content{
        width:590px;
        min-height: 200px;
        background:rgba(255,255,255,1);
        border-radius:5px;
        .header{
            text-align: center;
            height: 48px;
            padding:15px 0px;
            border-bottom:1px solid rgba(238,238,238,1);
        }
        .table-wrap{
            width:400px;
            margin:0 auto;
            table{
                border-collapse:collapse;
                border-radius: 3px;
                margin-top:30px;
                td,th{
                    text-align: center;
                    border:1px solid rgba(238,238,238,1);
                    line-height: 32px;
                }
                th{
                    background:rgba(255,166,50,1);
                    color:fff;
                }
            }
        }
        .footer{
            padding:40px 0px 30px;
            display: flex;
            justify-content: space-between;
            .button{
                // cursor: pointer;
                width:176px;
                line-height: 44px;
                font-size:16px;
                // text-align: center;
                border-radius:4px;
                // &.back{
                //     background:rgba(240,240,240,1);
                //     color:rgba(153,153,153,1);
                //     &:hover{
                //         background:rgba(240,240,240,0.8);
                //     }
                // }
                // &.sure{
                //     background:rgba(255,166,50,1);
                //     color: #fff;
                //     &:hover{
                //         background:rgba(255,166,50,0.8);
                //     }
                // }
            }
        }
    }
    .loading-content{
        position: absolute;
        left: 50%;
        top:50%;
        margin-left: -230px;
        margin-top:-125px;
        width:460px;
        height:250px;
        background:rgba(255,255,255,1);
        border-radius:4px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        .icon{
            font-size: 40px;
            color:rgba(255,166,50,1);
            margin-top:35px;
        }
    }
</style>
