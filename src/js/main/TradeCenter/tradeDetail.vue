<template>
    <div class="teade_detail">
        <div class="left">
            <img class="icon" src="../../../img/u6840.png" alt="">
            <div class="title" >交易详情</div>
            <ul>
                <li class="item" v-for="(item,index) in routerList" :key="index">
                    <router-link class="link" @click.native="changeRoute(item)" :to="item.path">
                        <img class="icon_img" :src="item.icon" alt="">
                        <span>{{item.name}}</span>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="right">
            <div class="item_title">{{activeText}}</div>
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
                    path:'/trade/detail/progress',
                    name:'交易进展',
                    icon:require('../../../img/u5594.png')
                },
                {
                    path:'/trade/detail/contract',
                    name:'合同执行',
                    icon:require('../../../img/u5599.png')
                },
                {
                    path:'/trade/detail/service',
                    name:'售后服务',
                    icon:require('../../../img/u6838.png')
                }
            ],
            activeText:'交易进展'
        }
    },
    methods:{
        changeRoute(item){
            this.activeText=item.name;
        }
    }
}
</script>
<style lang="scss" scoped>
    .teade_detail{
       display: flex;
       min-height: 300px;
       .left{
           width:284px;
           height:390px;
           background: #fff;
           border-radius: 6px;
           margin-right:19px;
           text-align: center;
           box-sizing: border-box;
           padding-top:45px;
           .icon{
               width:100px;
               height:100px;
           }
           .title{
               color:rgba(51,51,51,1);
               font-size:20px;
               margin:20px 0px;
           }
           .item{
               padding:0 12px;
               display: flex;
               .link{
                   line-height: 56px;
                   font-size:16px;
                   color: rgba(51,51,51,1);
                    flex: 1;
                    position: relative;
                    border-left:4px solid transparent;
                   &.router-link-active{
                       background:rgba(244,244,244,1);
                       color:rgba(255, 166, 50, 1);
                       border-left:4px solid rgba(255, 166, 50, 1);
                   }
                   .icon_img{
                       position: absolute;
                       width:19px;
                       height:19px;
                       left: 62px;
                       top:50%;
                       margin-top:-10px;
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
               color:rgba(51,51,51,1);
               font-size:20px;
               padding-left:21px;
               border-bottom: 1px solid rgba(237, 237, 237, 1);
           }
       }
    }
</style>
