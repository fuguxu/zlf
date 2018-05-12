<template>
    <div class="dialog" v-if="visible" @click="visible=false">
        <div class="content" @click.stop="1">
            <i class="icon el-icon-close" @click="visible=false"></i>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            visible:true
        }
    }
}
</script>
<style lang="scss" scoped>
    .content{
        width:430px;
        height:230px;
        background: url('../../../img/u1645.png') no-repeat center;
        background-size: cover;
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-115px;
        margin-left:-215px;
        .icon{
            color: rgba(107, 107, 107, 0.898);
            font-size:30px;
            font-weight: bold;
            cursor: pointer;
            float: right;
        }
    }
</style>
