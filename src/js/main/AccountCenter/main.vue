<template>
    <div class="account_container">
        <div class="account_content">
            <div class="account_left">
                <div class="account_icon">
                    <img class="icon" src="../../../img/u1973.png" alt="">
                    <div class="title">金凤凰家具</div>
                </div>
                <ul class="router_list">
                    <li v-for="(item,index) in muens" :key="index" class="item">
                        <img class="icon_img" :src="item.icon" alt="">
                        <router-link class="link" @click.native="changeAccount(item)" :to="item.path">{{item.name}}</router-link>
                    </li>
                </ul>
            </div>
            <div class="account_right">
                <div class="title">{{title}}</div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            title:'',
            muens:[],
            clientMuen:[
                {
                    name:'账号资料',
                    path:'/account/information',
                    icon:require('../../../img/u7422.png')
                },
                {
                    name:'联系人信息',
                    path:'/account/contact',
                    icon:require('../../../img/u7427.png')
                },
                {
                    name:'重新绑定邮箱',
                    path:'/account/email',
                    icon:require('../../../img/u7673.png')
                }
            ]
        }
    },
    methods:{
        changeAccount(item){
            this.title=item.name;
        }
    },
    mounted(){
        this.muens=this.clientMuen;
        this.changeAccount(this.muens[0]);
    }
}
</script>
<style lang="scss" scoped>
    .account_content{
        width:1200px;
        margin:0 auto;
        display: flex;
        padding: 52px 0px;
        .account_left{
            width:202px;
            box-sizing: border-box;
            height:340px;
            text-align: center;
            border: 1px solid rgba(201,201,201,0.2);
            box-shadow: 0 0 2px rgba(201,201,201,0.4);
            color: #292B2C;
            font-size:14px;
            margin-right: 15px;
            .account_icon{
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
            .router_list{
                padding-top:22px;
            }
            .item{
                display: flex;
                line-height: 25px;
                margin-bottom: 22px;
                .icon_img{
                    width:25px;
                    height:25px;
                    margin:0 10px 0 43px;
                }
                .link{
                    color: #292B2C;
                    font-size: 14px;
                    &:hover,&.router-link-active{
                        color: rgb(242, 159, 51);
                    }
                }
            }
        }
        .account_right{
            flex: 1;
            min-height: 300px;
            border: 1px solid rgba(201,201,201,0.2);
            box-shadow: 0 0 1px rgba(201,201,201,0.4);
            border-bottom: 1px solid rgba(201,201,201,0.4);
            .title{
                line-height: 52px;
                background: #FAFAF9;
                font-size: 16px;
                color: rgb(41, 43, 44);
                padding-left:33px;
                border-bottom: 1px solid rgba(201,201,201,0.2);
            }
        }
    }
</style>
