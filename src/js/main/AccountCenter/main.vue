<template>
    <div class="account_container">
        <div class="account_content">
            <div class="account_left" :class="{high:role=='supplier'}">
                <div class="account_left_content">
                    <div class="account_icon">
                        <img class="icon" :src="user.userHeadimg" alt="">
                        <div class="title font20">{{user.userAbbr}}</div>
                    </div>
                    <ul class="router_list">
                        <router-link tag="li" @click.native="changeAccount(item)" v-for="(item,index) in muens" :key="index" :to="item.path" class="item">
                            <div class="link_box">
                                <img class="icon_img icon_img_defalut" :src="item.icon" alt="">
                                <img class="icon_img icon_img_active" :src="item.icon2" alt="">
                                <span class="link">{{item.name}}</span>
                            </div>
                        </router-link>
                    </ul>
                </div>
            </div>
            <div class="account_right" :class="{high:role=='supplier'}">
                <div v-if="title" class="title">{{title}}</div>
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
                    icon:require('../../../img/u7422.png'),
                    icon2:require('../../../img/u7422_2.png'),
                },
                {
                    name:'联系人信息',
                    path:'/account/contact',
                    icon:require('../../../img/u7427.png'),
                    icon2:require('../../../img/u7427_2.png'),
                },
                {
                    name:'重新绑定邮箱',
                    path:'/account/email',
                    icon:require('../../../img/u7673.png'),
                    icon2:require('../../../img/u7673_2.png'),
                }
            ],
            supplier:[
                {
                    name:'公司信息',
                    path:'/account/company',
                    icon:require('../../../img/u7422.png'),
                    icon2:require('../../../img/u7422_2.png'),
                },
                {
                    name:'推荐详情',
                    path:'/account/recommend',
                    hideTitle:true,
                    icon:require('../../../img/u3692.png'),
                    icon2:require('../../../img/u3692_2.png'),
                },
                {
                    name:'重新绑定邮箱',
                    path:'/account/email',
                    icon:require('../../../img/u7673.png'),
                    icon2:require('../../../img/u7673_2.png'),
                },
                {
                    name:'资料管理',
                    path:'/account/management',
                    icon:require('../../../img/u3697.png'),
                    icon2:require('../../../img/u3697_2.png'),
                },
                {
                    name:'邀请码',
                    path:'/account/code',
                    icon:require('../../../img/u3703.png'),
                    icon2:require('../../../img/u3703_2.png'),
                }
            ],
            role:'',
            user:{}
        }
    },
    methods:{
        changeAccount(item){
            this.title=item.hideTitle?'':item.name;
        },
        updateHeaderImg(imgUrl){
            this.user.userHeadimg=imgUrl;
        }
    },
    mounted(){
        this.role=localStorage.getItem('role');
        this.muens=this.role=='client'?this.clientMuen:this.supplier;
        this.changeAccount(AppUtil.findWhere(this.muens,'path',this.$route.path));
        AppUtil.getCurrentUserInfo(user=>{
            this.user=user;
        });
        Bus.$on('updateHeaderImg',this.updateHeaderImg);
    },
    components:{
    }
}
</script>
<style lang="scss" scoped>
    .account_content{
        width:1160px;
        margin:0 auto;
        display: flex;
        box-sizing: border-box;
        padding: 20px 0px 128px 0px;
        .account_left{
            width:264px;
            box-sizing: border-box;
            font-size:14px;
            margin-right: 20px;
            .account_left_content{
                 background: #fff;
                border-radius:6px;
                text-align: center;
            }
            .account_icon{
                margin-left:16px;
                .icon{
                    width:88px;
                    height:88px;
                    margin:52px 0 30px 0;
                    border-radius: 50%;
                }
                .title{
                    padding-bottom: 30px;
                }
            }
            .router_list{
                padding-bottom:15px;
            }
            .item{
                padding:0 12px;
                cursor: pointer;
                .link_box{
                    display: flex;
                    align-items: center;
                    line-height: 56px;
                    border-left:4px solid transparent;
                }
                &:hover,&.router-link-active{
                    .link_box{
                        
                    }
                    .icon_img_active{
                        display: block;
                    }
                    .icon_img_defalut{
                        display: none;
                    }
                    color: rgb(242, 159, 51);
                }
                &.router-link-active{
                    .link_box{
                        background:rgba(244,244,244,1);
                        border-left:4px solid rgb(242, 159, 51);
                    }
                }
                .icon_img{
                    width:19px;
                    height:19px;
                    margin:0 10px 0 43px;
                }
                .icon_img_active{
                    display: none;
                }
                .link{
                    // font-size: 14px;
                }
            }
        }
        .account_right{
            flex: 1;
            min-height: 500px;
            background: #fff;
            border-radius:6px;
            border: 1px solid rgba(237, 237, 237, 1);
            &.high{
                min-height:650px;
            }
            .title{
                line-height: 64px;
                font-size: 18px;
                padding-left:21px;
                border-bottom: 1px solid rgba(237, 237, 237, 1);
            }
        }
    }
</style>
