<template>
    <div class="start_use_container">
        <stepBar :step="3" :role="role"></stepBar>
        <div class="img_box">
            <img src="../../../../img/u1340.png" alt="">
        </div>
        <p class="tip_success">{{user.userAbbr}}，您已成功注册</p>
        <p class="tip_success">通过营业执照审核后，开始使用账号</p>
        <uploadLicence class="supplier_upload_licence"></uploadLicence>
    </div>
</template>
<script>
import stepBar from './stepBar';
import uploadLicence from '../../../components/uploadLicence';
export default {
     props:{
        role:{

        }
    },
    data(){
        return {
            user:{}
        }
    },
    mounted(){
        AppUtil.getCurrentUserInfo(user=>{
            this.user=user;
        });
        // AppUtil.message(this,'恭喜你，这是一条成功消息','warning')
    },
    methods:{
    },
    components:{
        stepBar,
        uploadLicence
    }
}
</script>
<style lang="scss" scoped>
    .start_use_container{
        text-align: center;
        padding-bottom:20px;
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
        line-height: 28px;
    }
    .supplier_upload_licence{
        margin-top:45px;
    }
    .button_box{
        padding-bottom: 50px;
        padding-top: 10px;
        .button{
            // display: inline-block;
            width:100px;
            line-height: 36px;
            font-size: 16px;
            color: #F29F33;
            border: 1px solid #F29F33;
            // border-radius: 5px;
            // cursor: pointer;
            margin:0 35px;
            &:hover{
                color:#fff;
                background: #ffaa50;
            }
        }
    }
</style>

