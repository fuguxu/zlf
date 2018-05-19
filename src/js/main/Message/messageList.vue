<template>
    <div class="message_list">
        <ul class="message">
            <li class="item title">{{title}}</li>
            <li v-for="(item,index) in messageList" :key="index" class="item message_item">
                <span class="dot" v-if="item.status=='1'"></span>
                <a class="title_text" :href="renderHref()" :class="{unread:item.status=='1'}">{{item.title}}</a>
                <span class="time">{{item.time}}</span>
            </li>
            <li class="item foot">
                <span>共有{{total}}条，每页显示：15条</span>
                <pagination :pageSize="pageSize" :total="total"></pagination>
            </li>
        </ul>
    </div>
</template>
<script>
import pagination from '../../components/pagination';
export default {
    data(){
        return {
            messageList:[
                {
                    title:'市场客户营业执照审批不通过通知',
                    status:'0',
                    time:'2018-04-23 23:01:05'
                }
            ],
            title:'全部消息',
            pageSize:15,
            total:30
        }
    },
    methods:{
        renderHref(){
            let path ='#'+this.$route.path.replace('list','detail');
            return path
        }
    },
    mounted(){
        for(var i=0;i<15;i++){
           this.messageList.push({
               title:'市场客户营业执照审批不通过通知',
                status:i%2==0?'1':'0',
                time:'2018-04-23 23:01:05'
           })
        }
        if(this.status){
            this.messageList=this.messageList.filter(item=>{
                return item.status==this.status;
            })
            if(this.status=='0'){
                this.title='已读消息'
            }else if(this.status=='1'){
                this.title='未读消息'
            }
        }
    },
    computed:{
        status(){
            let path=this.$route.path.split('/');
            if(path.indexOf('all')>-1){
                return ''
            }else if(path.indexOf('read')>-1){
                return '1'
            }else if(path.indexOf('unread')>-1){
                return '0'
            }
        }
    },
    components:{
        pagination
    }
}
</script>
<style lang="scss" scoped>
    .message_list{
        // padding-bottom: 60px;
    }
    .message{
        border: 1px solid rgba(201,201,201,0.2);
        box-shadow: 0 0 1px rgba(201,201,201,0.4);
        border-bottom: 1px solid rgba(201,201,201,0.4);
    }
    .item{
        line-height:40px;
        border-top: 1px solid rgb(241,241,241);
        box-shadow: 0 1px 1px rgba(201,201,201,0.4);
        display: flex;
        align-items: center;
        &.message_item{
            position: relative;
            &:hover{
            background: rgb(242,242,242);
        }
        }
        &.title{
            line-height: 50px;
            border:none;
            // background: rgb(250,250,250);
            font-size: 16px;
            color: #292B2C;
            padding-left:35px;
        }
        .dot{
            display: inline-block;
            width:6px;
            height: 6px;
            background: rgb(80,159,217);
            border-radius: 50%;
            position: absolute;
            left: 25px;
        }
        .title_text{
            font-size:13px;
            padding-left:45px;
            color: rgba(41, 43, 44, 0.6);
            &.unread{
                color: rgba(41, 43, 44, 0.90);
            }
            &:hover{
                color: rgba(242, 159, 51, 0.8);
                text-decoration: underline;
                background: #fff;
                &+.time{
                    background:#fff;
                }
            }
        }
        .time{
            flex: 1;
            text-align: right;
            padding-right:60px;
            font-size: 13px;
            color: rgba(41, 43, 44, 0.6);
        }
        &.foot{
            font-size: 13px;
            color: rgba(41, 43, 44, 0.8);
            justify-content: flex-end;
            .el-pagination{
                padding: 0px 30px 0 20px;
                display: flex;
                /deep/ .el-pager{
                    line-height: normal;
                }
            }
        }
    }
</style>
