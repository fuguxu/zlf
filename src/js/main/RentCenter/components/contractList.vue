<template>
    <div class="contract_list">
        <div class="item" v-for="(item,index) in data" :key="index" @click="goContractDetail(item)">
            <span>{{item.name}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            data:[
                {
                    name:'“公寓固装家具”合同执行详情'
                }
            ]
        }
    },
    methods:{
        goContractDetail(item){
            this.$emit('updateCp',item);
        }
    },
    mounted(){
        for(var i=0;i<7;i++){
            this.data.push({...this.data[0]})
        }
    }
}
</script>
<style lang="scss" scoped>
    .item{
        height: 50px;
        line-height: 50px;
        background: #f6f5f5;
        border-radius: 7px;
        font-size: 17px;
        color: #363636;
        margin-bottom: 20px;
        cursor: pointer;
        padding-left: 30px;
        &:hover{
            color:#fff;
            background: rgb(237, 159, 52);
        }
    }
</style>
