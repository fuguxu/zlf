<template>
    <div class="dialog" v-if="flag" @click="cancel">
        <div class="content" :class="{supplier:user.type==1}" @click.stop="1">
            <div class="header font18">未通过审核</div>
            <div class="color6 text userAbbr">亲爱的{{user.userAbbr}}</div>
            <div class="font16 text"  v-html="tipText"></div>
            <div class="color6 text">请耐心等待</div>
            <span @click="cancel" class="button">好的</span>
        </div>
    </div>
</template>
<script>
export default {
    props:['user','flag'],
    data(){
        return {
            
        }
    },
    methods:{
        cancel(){
            this.$emit('update:flag',false);
        }
    },
    computed:{
        tipText(){
            return this.user.type==0?'您还未通过营业执照审核':'您还未通过营业执照以及<br />租立方实地验厂审核'
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
        .header{
            line-height: 60px;
            border-bottom: 1px solid rgba(238,238,238,1);
        }
        &.supplier{
            .text{
                margin-bottom: 10px;
                &.userAbbr{
                    margin-top:10px;
                }
            }
        }
        .text{
            margin-bottom: 15px;
            &.userAbbr{
                margin-top:18px;
            }
        }
        .button{
            width:100%;
            line-height: 40px;
            margin-top:3px;
        }
    }
</style>
