<template>
    <div class="message_list">
        <ul class="message">
            <li class="item title font18">{{title}}</li>
            <li v-for="(item,index) in messageList" :key="index" class="item message_item">
                <div class="item_content">
                    <span class="dot" v-if="item.readed=='0'"></span>
                    <a class="title_text" :href="renderHref(item)" :class="{unread:item.readed=='0'}">{{item.msgTitle}}</a>
                    <span class="time">{{renderTime(item)}}</span>
                </div>
            </li>
            <li class="foot" v-if="total">
                <span class="total_text">共有{{total}}条，每页显示：15条</span>
                <pagination @currentChange="currentChange" :pageSize="pageSize" :total="total"></pagination>
            </li>
        </ul>
        <div class="no_content" v-if="messageList.length==0&&ajaxDone">
            <i class="icon colorYellow font18 el-icon-warning"></i>
            <span>当前没有{{!status?'消息内容':title}}</span>
        </div>
    </div>
</template>
<script>
import pagination from '../../components/pagination';
import {customerModule} from '../../api/main';
export default {
    data(){
        return {
            messageList:[],
            title:'全部消息',
            pageSize:15,
            pageNo:1,
            total:0,
            ajaxDone:false
        }
    },
    methods:{
        renderHref(item){
            let path ='#'+this.$route.path.replace('list',`detail?id=${item.id}`);
            return path
        },
        renderTime(item){
          return  AppUtil.transferTimeToString(item.sentTime,'-',true)
        },
        getMsg(type){
            this.ajaxDone=false;
            customerModule.getMsg({
                pageNo:this.pageNo,
                pageSize:this.pageSize,
                type:type
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.messageList=res.data.records;
                    this.total=res.data.total;
                    this.ajaxDone=true;
                }
            })
        },
        currentChange(currentPage){
            this.pageNo=currentPage;
            this.getMsg(this.status);
        }
    },
    mounted(){
        if(this.status=='0'){
            this.title='未读消息'
        }else if(this.status=='1'){
            this.title='已读消息'
        }
        this.getMsg(this.status);
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
    .item{
        &.message_item{
            padding:0 22px;
            &:hover{
                background: rgb(242,242,242);
            }
        }
        .item_content{
            border-bottom: 1px solid rgba(244,244,244,1);
            position: relative;
            line-height: 50px;
            display: flex;
            align-items: center;
            color: rgba(153, 153, 153, 1);
        }
        &.title{
            line-height: 64px;
            border-bottom: 1px solid rgba(237, 237, 237, 1);
            padding-left:20px;
        }
        .dot{
            display: inline-block;
            width:6px;
            height: 6px;
            background: rgba(255, 166, 50, 1);
            border-radius: 50%;
            position: absolute;
        }
        .title_text{
            padding-left:20px;
            
            font-size: 14px;
            &.unread{
                color: #333;
            }
            &:hover{
                color: rgba(255, 166, 50, 1);
                text-decoration: underline;
                // background: #fff;
                // &+.time{
                //     background:#fff;
                // }
            }
        }
        .time{
            flex: 1;
            text-align: right;
        }
    }
    .foot{
        color: rgba(102, 102, 102, 1);
        justify-content: flex-end;
        display: flex;
        align-items: center;
        padding:70px 22px;
        .total_text{
            margin-right: 20px;
        }
    }
    .no_content{
        display: flex;
        justify-content: center;
        padding-top:100px;
        .icon{
            margin-right: 10px;
        }
    }
</style>
