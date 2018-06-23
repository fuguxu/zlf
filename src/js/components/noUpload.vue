<template>
    <div class="no_upload">
        <img src="../../img/no_upload.png" alt="">
        <div class="font16 text">{{role=='0'?'供应商还未上传内容，请耐心等候～':'内容还未上传，请耐心等候～'}}</div>
    </div>
</template>
<script>
export default {
    props:['role'],
    data(){
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
    .no_upload{
        text-align: center;
        width:300px;
        padding:30px 0px;
        .text{
            margin-top:30px;
        }
    }
</style>
