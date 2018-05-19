<template>
    <div class="message_container">
        <div class="message_content">
            <div class="message_left">
                <div class="message_icon">
                    <img class="icon" src="../../../img/u8295.png" alt="">
                    <div class="title">消息中心</div>
                </div>
                <ul class="message_list">
                    <li class="item" v-for="(item,index) in messageList" :key="index">
                        <img class="img" :src="item.icon" alt="">
                        <router-link class="text" :to="item.path">{{item.label}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="message_right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            messageList:[
                {
                    icon:require('../../../img/u7822.png'),
                    label:'全部消息',
                    path:'/message/all',
                    status:''
                },
                {
                    icon:require('../../../img/u7827.png'),
                    label:'未读消息',
                    path:'/message/unread',
                    status:'0'
                },
                {
                    icon:require('../../../img/u8293.png'),
                    label:'已读消息',
                    path:'/message/read',
                    status:'1'
                }
            ],
        }
    },
    methods:{

    },
    mounted(){
    },
    components:{
    }
}
</script>
<style lang="scss" scoped>
    .message_container{
        // background: #fff;
        width:100%;
        height:100%;
        .message_content{
            width:1200px;
            margin:0  auto;
            min-height: 300px;
            display: flex;
            padding-top:52px;
            
            .message_left{
                width:202px;
                box-sizing: border-box;
                background: #fff;
                height:340px;
                text-align: center;
                border: 1px solid rgba(201,201,201,0.2);
                box-shadow: 0 0 2px rgba(201,201,201,0.4);
                color: #292B2C;
                font-size:14px;
                .message_icon{
                    width:170px;
                    height: 166px;
                    margin-left:16px;
                    border-bottom: 1px solid rgba(201,201,201,0.2);
                    .icon{
                        width:100px;
                        height:100px;
                        margin:19px 0 5px 0;
                    }
                    .title{
                        font-size: 15px;
                    }
                } 
            }
            .message_list{
                .item{
                    display: flex;
                    justify-content: center;
                    line-height: 25px;
                    margin-top:20px;
                    .img{
                        width:25px;
                        height:25px;
                        margin-right: 10px;
                    }
                    .text{
                        font-size:14px;
                        &:hover,&.router-link-active{
                            color: rgb(242, 159, 51);
                        }
                    }
                }
            }
            .message_right{
                flex: 1;
                margin-left:15px;
                box-sizing: border-box;
                background: #fff;
                margin-bottom: 60px;
            }
        }
    }
</style>
