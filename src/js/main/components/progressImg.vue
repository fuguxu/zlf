<template>
    <div>
        <div class="line"></div>
        <preview></preview>
        <div class="desc_box">
            <p class="desc">
                <span class="sub">文字描述：</span>
                供应商前端限制输入一百字以内供应商前端限制输入一百字以内供应商前端限制输入一百字以内供应商前端限制输入一百字以内供应商前端限制输入一百字以内供应商前端限制输入一百字以内供应商前端限制输入一百字以内以。
            </p>
        </div>
    </div>
</template>
<script>
import preview from './previewPic';
export default {
    data(){
        return {

        }
    },
    components:{
        preview
    }
}
</script>
<style lang="scss" scoped>
    .desc_box{
        padding:20px 0px;
    }
    .desc{
        width:640px;
        color: #363636;
        font-size: 14px;
        .sub{
            color: rgba(54, 54, 54, 0.70);
        }
    }
    .line{
        height: 5px;
        background: #ed9f36;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;
    }
</style>
