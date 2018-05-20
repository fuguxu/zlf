<template>
    <div class="contract_detail">
        <div class="item">
            <div class="item_sub">
                <div class="circel">1</div>
                <span>家具生产启动</span>
            </div>
            <i class="icon" :class="{'el-icon-arrow-down':!start,'el-icon-arrow-up':start}" @click="start=!start"></i>
            <progressImg v-if="start"></progressImg>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">2</div>
                <span>家具生产进行中</span>
            </div>
            <i class="icon" :class="{'el-icon-arrow-down':!doing,'el-icon-arrow-up':doing}" @click="doing=!doing"></i>
            <progressImg v-if="doing"></progressImg>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">3</div>
                <span>家具生产完成</span>
            </div>
            <i class="icon" :class="{'el-icon-arrow-down':!finish,'el-icon-arrow-up':finish}" @click="finish=!finish"></i>
            <progressImg v-if="finish"></progressImg>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">4</div>
                <span>运输包装</span>
            </div>
            <i class="icon" :class="{'el-icon-arrow-down':!transfer,'el-icon-arrow-up':transfer}"  @click="transfer=!transfer"></i>
            <progressImg v-if="transfer"></progressImg>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">5</div>
                <span>物流信息</span>
            </div>
            <i class="icon el-icon-arrow-down"></i>
        </div>
        <div class="item">
            <div class="item_sub">
                <div class="circel">5</div>
                <span>验收完成</span>
            </div>
            <i class="icon el-icon-arrow-down"></i>
        </div>
    </div>
</template>
<script>
import progressImg from '../../components/progressImg';
export default {
    data(){
        return {
            start:false,
            doing:false,
            finish:false,
            transfer:false
        }
    },
    components:{
        progressImg
    }
}
</script>
<style lang="scss" scoped>
    .item{
        padding:0 20px;
        background: #f6f5f5;
        position: relative;
        margin-bottom: 15px;
        .item_sub{
            display: flex;
            height: 60px;
            align-items: center;
            font-size: 16px;
            color: #363636;
            .circel{
                width:26px;
                height: 26px;
                border-radius: 50%;
                background: rgb(237, 159, 52);
                font-size: 16px;
                color:#fff;
                text-align: center;
                line-height: 26px;
                margin-right: 20px;
            }
        }
        .icon{
            font-size:20px;
            color:#888;
            position: absolute;
            right: 20px;
            top: 50%;
            margin-top: -10px;
            cursor: pointer;
        }
    }
</style>
