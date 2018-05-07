<template>
    <div class="message_center">
        <img class="message_icon" src="../../../img/u1405.png" alt="">
        <span class="message_text">消息</span>
        <span class="number">7</span>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
    .message_center{
        display: flex;
        height: 100%;
        align-items: center;
        cursor: pointer;
        margin-left:50px;
        .message_icon{
            width:20px;
            height:20px;
        }
        .message_text{
            margin:0 5px;
            &:hover{
                color:rgba(255, 255,255, 0.75);
            }
        }
        .number{
            color: #FFD800;
        }
    }
</style>
