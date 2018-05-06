<template>
    <div class="start_use_container">
        <stepBar :step="3"></stepBar>
        <div class="img_box">
            <img src="../../../../img/u1340.png" alt="">
        </div>
        <p class="tip_success">深圳市中租借科技有限公司，您已成功注册！</p>
        <p class="tip_rent">是否开始<span class="rent_text">租赁测算体验？</span></p>
        <div class="button_box">
            <span class="button">跳过</span>
            <span class="button" @click="startRent">开始测算</span>
        </div>
        <rentCalculation v-if="visible" :visible.sync="visible"></rentCalculation>
    </div>
</template>
<script>
import stepBar from './stepBar';
import rentCalculation from './rentCalculation';
export default {
    data(){
        return {
            visible:false
        }
    },
    methods:{
        startRent(){
            this.visible=true;
        }
    },
    components:{
        stepBar,
        rentCalculation
    }
}
</script>
<style lang="scss" scoped>
    .start_use_container{
        text-align: center;
    }
    .img_box{
        font-size: 0px;
        img{
            width:305px;
            height:158px;
        }
    }
    .tip_success,.tip_rent{
        font-size: 18px;
        color: rgba(41, 43, 44, 0.8);
        padding-bottom: 30px;
    }
    .rent_text{
       font-size: 22px;
       color: rgba(41, 43, 44, 0.8);
    }
    .button_box{
        padding-bottom: 50px;
        padding-top: 10px;
        .button{
            display: inline-block;
            width:100px;
            line-height: 36px;
            font-size: 16px;
            color: #F29F33;
            border: 1px solid #F29F33;
            border-radius: 5px;
            cursor: pointer;
            margin:0 35px;
            &:hover{
                color:#fff;
                background: #ffaa50;
            }
        }
    }
</style>

