<template>
    <div class="dialog" v-if="flag">
        <div class="content"  @click.stop="1">
            <div class="header font18">未发起新租赁</div>
            <div class="font16 text userAbbr">亲爱的{{user.userAbbr}}</div>
            <div class="font16 text">您还未发起过新租赁</div>
            <div class="footer">
                <span @click="cancel" class="button cancel">稍后发起</span>
                <span @click="setProject" class="button">现在发起新租赁</span>
            </div>
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
        },
        setProject(){
            this.cancel();
            this.$emit('setProject');
        }
    },
    computed:{
    }
}
</script>
<style lang="scss" scoped>
    .content{
        width:590px;
        height:250px;
        position: absolute;
        top:50%;
        left:50%;
        margin-top:-125px;
        margin-left:-295px;
        text-align: center;
        background: #fff;
        color:rgba(51,51,51,1);
        border-radius:4px;
        box-sizing: border-box;
        padding:0 30px;
        .header{
            line-height: 60px;
            border-bottom: 1px solid rgba(238,238,238,1);
            margin-bottom: 35px;
        }
        .text{
            line-height: 30px;
        }
        .footer{
            padding:30px 74px 0px 74px;
            display: flex;
            justify-content: space-between;
        }
        .button{
            width:180px;
            line-height: 40px;
            margin-top:3px;
        }
    }
</style>
