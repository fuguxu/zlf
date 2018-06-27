<template>
    <div class="company_container">
        <div class="avatar">
            <avatar></avatar>
        </div>
        <div class="information">
            <div class="title">
                <span class="line"></span>
                <span>基本信息</span>
            </div>
            <div class="account">
                <accountInfo role="supplier"></accountInfo>
            </div>
        </div>
        <div class="contact">
            <div class="title">
                <span class="line"></span>
                <span>联系信息</span>
            </div>
            <div class="contactInfo">
                <contactInfo></contactInfo>
            </div>
        </div>
    </div>
</template>
<script>
import avatar from './components/avatar';
import accountInfo from './components/accountInfo';
import contactInfo from './components/contactInfo';
export default {
    data(){
        return {
            form:{
            }
        }
    },
    components:{
        avatar,
        accountInfo,
        contactInfo
    }
}
</script>
<style lang="scss" scoped>
    .company_container{
        padding:0 72px 0 25px;
        .avatar{
            border-bottom: 1px solid rgba(201,201,201,0.2);
            padding-left:44px;
        }
        .information{
            border-bottom: 1px solid rgba(201,201,201,0.2);
        }
        .account,.contactInfo{
            padding-left:44px;
        }
        .title{
            font-size: 16px;
            padding-left:10px;
            margin:23px 0px 23px 10px;
            display: flex;
            align-items: center;
            .line{
                width: 6px;
                height: 12px;
                background: #ffa632;
                border-radius: 3px;
                margin-right: 14px;
            }
        }
    }
</style>
