<template>
    <div class="message_detail">
        <div class="title">
            <span>{{title}}</span>
            <span @click="goBack" class="back"><i class="el-icon-arrow-left">返回</i></span>
        </div>
        <div class="content">
            <div class="content_title">
                <p class="title_text">融资服务合作框架协议审核通过通知</p>
                <p class="time">2018-04-23 23:01:05</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:'全部消息'
        }
    },
    mounted(){
           let path=this.$route.path.split('/');
            if(path.indexOf('all')>-1){
                this.title='全部消息'
            }else if(path.indexOf('read')>-1){
                this.title='已读消息'
            }else if(path.indexOf('unread')>-1){
                this.title='未读消息'
            }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    }
}
</script>
<style lang="scss" scoped>
    .message_detail{
        min-height: 500px;
        border: 1px solid rgba(201,201,201,0.2);
        box-shadow: 0 0 1px rgba(201,201,201,0.4);
        border-bottom: 1px solid rgba(201,201,201,0.4);
        .title{
            line-height: 50px;
            border-bottom: 1px solid rgba(201,201,201,0.2);
            background: rgb(250,250,250);
            font-size: 16px;
            color: #292B2C;
            padding-left:35px;
            .back{
                cursor: pointer;
               color: rgba(107, 107, 107, 0.898);
               font-size:14px;
               &:hover{
                   color:#000;
               }
            }
        }
        .content{
            width:780px;
            margin:0 auto;
        }
        .content_title{           
            border-bottom:1px solid rgba(201,201,201,0.2);
            text-align: center;
            .title_text{
                font-size: 20px;
                 color: rgba(41, 43, 44, 0.90);
                 padding:27px 0 10px;
            }
            .time{
                padding-bottom: 25px;
                font-size: 13px;
                color: #292B2C;
            }
        }
    }
</style>
