<template>
    <div class="start_use_container">
        <stepBar :step="3" :role="role"></stepBar>
        <div class="img_box">
            <img src="../../../../img/u1340.png" alt="">
        </div>
        <p class="tip_success">深圳市中租借科技有限公司，您已成功注册！</p>
        <p class="tip_rent">是否开始<span class="rent_text">租赁测算体验？</span></p>
        <div class="button_box">
            <span @click="nextStep" class="button jump">跳过</span>
            <span class="button" @click="startRent">开始测算</span>
        </div>
        <rentCalculation v-if="visible" :visible.sync="visible"></rentCalculation>
    </div>
</template>
<script>
import stepBar from './stepBar';
import rentCalculation from './rentCalculation';
export default {
    props:{
        role:{

        }
    },
    data(){
        return {
            visible:false
        }
    },
    methods:{
        startRent(){
            this.visible=true;
        },
        nextStep(){
            this.$router.push('/licence')
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
        padding-top:83px;
        padding-bottom:10px;
        img{
            width:97px;
            height:66px;
        }
    }
    .tip_success,.tip_rent{
        font-size: 18px;
        line-height: 34px;
    }
    .rent_text{
       font-size: 22px;
    }
    .button_box{
        padding-bottom: 50px;
        padding-top: 90px;
        .button{
            width:170px;
            line-height: 40px;
            font-size: 16px;
            color: #fff;
            margin:0 16px;
            &.jump{
                border:1px solid rgba(255,166,50,1);
                background: #fff;
                color:rgba(255,166,50,1);
            }
        }
    }
</style>

