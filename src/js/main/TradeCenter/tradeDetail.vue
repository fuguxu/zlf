<template>
    <div class="teade_detail">
        <div class="left">
            <img class="icon" src="../../../img/u6840.png" alt="">
            <div class="title font18" >交易详情</div>
            <ul>
                <li class="item" v-for="(item,index) in routerList" :key="index" >
                    <router-link class="link" @click.native="changeRoute(item)" :to="item.path">
                        <img class="icon_img icon_img_default" :src="item.icon" alt="">
                        <img class="icon_img icon_img_active" :src="item.iconActive" alt="">
                        <span>{{item.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="right">
            <div class="item_title font18">
                <span @click="goBack" :class="{back:$route.query.leaseName}">{{activeText}}</span>
                <i v-if="$route.query.leaseName" class="icon el-icon-caret-right"></i>
                <span v-if="$route.query.leaseName">{{$route.query.leaseName}}</span>
            </div>
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            routerList:[
                {
                    path:`/trade/detail/progress?id=${this.$route.query.id}&leaseType=${this.$route.query.leaseType}&listNo=${this.$route.query.listNo}`,
                    name:'交易进展',
                    icon:require('../../../img/u5594.png'),
                    iconActive:require('../../../img/u5594_active.png'),
                },
                {
                    path:`/trade/detail/contract?id=${this.$route.query.id}&leaseType=${this.$route.query.leaseType}&listNo=${this.$route.query.listNo}`,
                    name:'合同执行',
                    icon:require('../../../img/u5599.png'),
                    iconActive:require('../../../img/u5599_active.png'),
                },
                {
                    path:`/trade/detail/service?id=${this.$route.query.id}&leaseType=${this.$route.query.leaseType}&listNo=${this.$route.query.listNo}`,
                    name:'售后服务',
                    icon:require('../../../img/u6838.png'),
                    iconActive:require('../../../img/u6838_active.png'),
                }
            ],
            activeText:'交易进展'
        }
    },
    methods:{
        changeRoute(item){
            this.activeText=item.name;
        },
        goBack(){
            if(this.$route.query.leaseName){
                this.$router.go(-1);
            }
        }
    },
    mounted(){
       
    }
}
</script>
<style lang="scss" scoped>
    .teade_detail{
       display: flex;
       min-height: 300px;
       margin-bottom: 60px;
       .left{
           width:284px;
           height:390px;
           background: #fff;
           border-radius: 6px;
           margin-right:19px;
           text-align: center;
           box-sizing: border-box;
           padding-top:55px;
           .title{
               margin:20px 0px;
           }
           .item{
               padding:0 12px;
               display: flex;
               .link{
                   line-height: 56px;
                    flex: 1;
                    font-size: 14px;
                    position: relative;
                    border-left:4px solid transparent;
                   &.router-link-active,&:hover{
                       color:rgba(255, 166, 50, 1);
                       .icon_img_active{
                           display: block;
                       }
                       .icon_img_default{
                           display: none;
                       }
                   }
                   &.router-link-active{
                       background:rgba(244,244,244,1);
                       border-left:4px solid rgba(255, 166, 50, 1);
                   }
                   .icon_img{
                       position: absolute;
                       left: 62px;
                       top:50%;
                       margin-top:-10px;
                   }
                   .icon_img_active{
                       display: none;
                   }
               }
           }
       }
       .right{
           background: #fff;
           border-radius: 6px ;
           flex: 1;
           .item_title{
               line-height: 64px;
               padding-left:21px;
               border-bottom: 1px solid rgba(237, 237, 237, 1);
               .icon{
                   font-size: 12px;
                   color:#ffa632;
               }
               .back{
                   cursor: pointer;
               }
           }
       }
    }
</style>
