<template>
    <div class="message_detail">
        <div class="title font18">
            <span>{{title}}</span>
            <span @click="goBack" class="back"><i class="el-icon-arrow-left"></i>返回</span>
        </div>
        <div class="content">
            <div class="content_title">
                <p class="title_text font18">{{data.msgTitle}}</p>
                <p class="time">{{data.sentTime}}</p>
            </div>
            <div class="content_text" v-html="data.msgContent">
                <!-- {{data.msgContent}} -->
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
                    Bus.$emit('updateUnreadNum');
                }
            })
        }
    },
    mounted(){
        let path=this.$route.path.split('/');
        if(path.indexOf('all')>-1){
            this.title='全部消息';
        }else if(path.indexOf('read')>-1){
            this.title='已读消息';
        }else if(path.indexOf('unread')>-1){
            this.title='未读消息';
        }
        this.getMsgDetail();
    },
}
</script>
<style lang="scss" scoped>
    .message_detail{
        min-height: 500px;
        .title{
            line-height: 64px;
            border-bottom: 1px solid rgba(237, 237, 237, 1);
            padding-left:20px;
            .back{
               cursor: pointer;
               &:hover{
                   color:#888;
               }
               .el-icon-arrow-left{
                   font-size: 16px;
               }
            }
        }
        .content_title{           
            text-align: center;
            .title_text{
                 padding:65px 0 17px;
            }
            .time{
                padding-bottom: 50px;
                font-size: 12px;
                color:rgba(136,136,136,1);
            }
        }
        .content_text{
            padding:40px 116px 0px 90px;
        }
    }
</style>
