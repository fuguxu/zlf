<template>
    <div class="account_information">
        <div class="avatar">
            <avatar></avatar>
        </div>
        <div>
            <accountInfo></accountInfo>
        </div>
    </div>
</template>
<script>
import avatar from './components/avatar';
import accountInfo from './components/accountInfo';
export default {
    data(){
        return {

        }
    },
    components:{
        avatar,
        accountInfo
    }
}
</script>
<style lang="scss" scoped>
    .account_information{
        padding:0 60px;
        .avatar{
            border-bottom: 1px solid rgba(201,201,201,0.2);
        }
    }
</style>

