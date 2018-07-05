<template>
    <div class="message_container">
        <div class="message_content">
            <div class="message_left">
                <div class="left_content">
                    <div class="message_icon">
                        <img class="icon" src="../../../img/u8295.png" alt="">
                        <div class="title font18">消息中心</div>
                    </div>
                    <ul class="message_list">
                        <router-link tag="li" class="item" v-for="(item,index) in messageList" :to="item.path" :key="index">
                            <img class="img img1" :src="item.icon" alt="">
                            <img class="img img2" :src="item.icon2" alt="">
                            <span class="text font16" >{{item.label}}</span>
                        </router-link>
                    </ul>
                </div>
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
                    icon2:require('../../../img/u7822_2.png'),
                    label:'全部消息',
                    path:'/message/all',
                    status:''
                },
                {
                    icon:require('../../../img/u7827.png'),
                    icon2:require('../../../img/u7827_2.png'),
                    label:'未读消息',
                    path:'/message/unread',
                    status:'0'
                },
                {
                    icon:require('../../../img/u8293.png'),
                    icon2:require('../../../img/u8293_2.png'),
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
        width:100%;
        height:100%;
        .message_content{
            width:1160px;
            margin:0  auto;
            display: flex;
            padding-top:20px;
            padding-bottom: 60px;
            .left_content{
                width:264px;
                box-sizing: border-box;
                background: #fff;
                border-radius:6px;
                margin-right:18px;
                text-align: center;
                .message_icon{
                    padding-bottom: 48px;
                    .icon{
                        margin:60px 0 18px 0;
                    }
                } 
            }
            .message_list{
                padding:0 12px 10px 12px;
                .item{
                    display: flex;
                    justify-content: center;
                    line-height: 56px;
                    border-left:4px solid transparent;
                    align-items: center;
                    cursor: pointer;
                    &:hover,&.router-link-active{
                        color: rgba(255,166,50,1);
                        .img2{
                            display: block;
                        }
                        .img1{
                            display: none;
                        }
                    }
                    &.router-link-active{
                        background:rgba(244,244,244,1);
                        border-left:4px solid rgba(255,166,50,1);
                    }
                    .img{
                        width:18px;
                        height:16px;
                        margin-right: 14px;
                    }
                    .img2{
                        display: none;
                    }
                }
            }
            .message_right{
                flex: 1;
                box-sizing: border-box;
                background: #fff;
                border-radius:6px;
                border:1px solid rgba(237, 237, 237, 1);
            }
        }
    }
</style>
