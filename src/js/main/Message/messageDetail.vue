<template>
    <div class="message_detail">
        <div class="title">
            <span>{{title}}</span>
            <span @click="goBack" class="back"><i class="el-icon-arrow-left"></i>返回</span>
        </div>
        <div class="content">
            <div class="content_title">
                <p class="title_text">{{data.msgTitle}}</p>
                <p class="time">{{data.sentTime}}</p>
            </div>
            <div class="content_text">
                {{data.msgContent}}
            </div>
        </div>
    </div>
</template>
<script>
import {customerModule} from '../../api/main';
export default {
    data(){
        return {
            data:{},
            title:''
        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        },
        getMsgDetail(){
            customerModule.getMsgDetail({
                id:this.$route.query.id
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.data=res.data;
                    this.data.sentTime=AppUtil.transferTimeToString(this.data.sentTime,'-',true);
                    //让头部的未读消息刷新

                }
            })
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
        this.getMsgDetail();
    },
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
               color: rgb(81, 81, 81);
               font-size:14px;
               font-weight: 700;
               &:hover{
                   color:#000;
               }
               .el-icon-arrow-left{
                    font-weight: 700;
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
        .content_text{
            padding-top:40px;
            line-height: 30px;
        }
    }
</style>
