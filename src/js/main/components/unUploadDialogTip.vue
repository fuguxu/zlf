<template>
    <div class="dialog" v-if="flag">
        <div class="content"  @click.stop="1">
            <!-- <div class="color6 text userAbbr">亲爱的{{user.userAbbr}}</div> -->
            <div class="font16 text" >未上传营业执照</div>
            <span @click="uploadNow" class="button">现在上传</span>
        </div>
    </div>
</template>
<script>
export default {
    props:['user','flag'],
    data(){
        return {
            visible:true
        }
    },
    methods:{
        uploadNow(){
            if(this.user.type==0){
                this.$router.push('/licence');
            }else{
                this.$router.push('/sign/supplier?cp=startUse');
            }
            this.$emit('update:flag',false);
        }
    }
}
</script>
<style lang="scss" scoped>
    .content{
        width:430px;
        height:250px;
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-125px;
        margin-left:-215px;
        text-align: center;
        background: #fff;
        border-radius:4px;
        box-sizing: border-box;
        padding:0 30px;
        .text{
            line-height:180px;
        }
        .button{
            width:100%;
            line-height: 40px;
            margin-top:3px;
        }
    }
</style>
