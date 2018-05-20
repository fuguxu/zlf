<template>
    <div class="rent_container">
        <div class="rent_content_box">
            <div class="left">
                <el-menu
                    :default-active="defaultActive"
                    @select="selectMenu"
                    class="el-menu-vertical-demo"
                    background-color="#fff"
                    text-color="#888"
                    active-text-color="#ffd04b">
                    <el-submenu :index="''+index" v-for="(item,index) in data" :key="index">
                        <template slot="title">
                            <span>{{item.name}}</span>
                        </template>
                        <el-menu-item v-for="(it,i) in subData" :index="`${index}-${i}`" :key="i">{{it.name}}</el-menu-item>
                    </el-submenu>
                </el-menu>
                <div class="new_rent">
                    <i class="icon el-icon-circle-plus"></i>
                    <span class="account_text">发起新租赁</span>
                </div>
            </div>
            <div class="right">
                <div class="bread_crumb">
                    <div class="line"></div>
                    <div class="first_title">
                        <span class="title_text">{{title}}</span>
                    </div>
                    <div class="second_title">
                        <i class="icon el-icon-caret-right"></i>
                        <span class="title_text">{{subTitle}}</span>
                    </div>
                    <div class="third_title" v-if="thirdTitle">
                        <i class="icon el-icon-caret-right"></i>
                        <span class="title_text">{{thirdTitle}}</span>
                    </div>
                </div>
                <div class="content">
                    <components :is="isCp" @updateCp="updateCp"></components>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import rentService from './components/rentService';
import contractList from './components/contractList';
import contractDetail from './components/contractDetail';
import rentMoney from './components/rentMoney';
import saleService from './components/saleService';
export default {
    data(){
        return {
            data:[
                {
                    name:'CBD国贸店',
                    id:1
                },
                {
                    name:'紫禁城店',
                    id:2
                },
                {
                    name:'深圳新店',
                    id:3
                },
                {
                    name:'广州新店',
                    id:4
                },
            ],
            subData:[
                {
                    name:'租赁服务',
                    id:0
                },
                 {
                    name:'合同执行',
                    id:1
                },
                 {
                    name:'后续租金',
                    id:2
                },
                 {
                    name:'售后服务',
                    id:3
                }
            ],
            defaultActive:'0-0',
            title:'',
            subTitle:'',
            thirdTitle:'',
            activeIndex:'',
            isCp:''
        }
    },
    methods:{
        choiceCp(){
            if(this.activeIndex==0){
                this.isCp=rentService
            }else if(this.activeIndex==1){
                this.isCp=contractList
            }else if(this.activeIndex==2){
                this.isCp=rentMoney
            }else if(this.activeIndex==3){
                this.isCp=saleService
            }
            this.thirdTitle='';
        },
        selectMenu(i,p){
            this.title=this.data[+p[0]].name;
            this.subTitle=this.subData[+p[1].split('-')[1]].name;
            this.activeIndex=this.subData[+p[1].split('-')[1]].id;
            this.choiceCp();
        },
        updateCp(item){//到合同执行的详情
            this.isCp=contractDetail;
            this.thirdTitle='公寓固装家具';
        }
    },
    mounted(){
        this.title=this.data[0].name;
        this.subTitle=this.subData[+this.defaultActive.split('-')[1]].name;
        this.activeIndex=this.subData[+this.defaultActive.split('-')[1]].id;
        this.choiceCp();
    },
    watch:{
    },
    computed:{
    },
    components:{
        rentService,
        contractList,
        contractDetail,
        rentMoney,
        saleService
    }
}
</script>
<style lang="scss" scoped>
    .rent_container{
        min-height: 700px;
        background: #fff;
        .rent_content_box{
            width:1200px;
            margin:0 auto;
            padding-top:52px;
            display: flex;
            .left{
                width:218px;
                margin-right:40px;
                .el-menu{
                    border:1px solid rgba(231, 231, 231, 1);
                    border-bottom: none;
                    /deep/ .el-submenu__title:hover{
                        background-color: inherit !important;
                        color:rgba(255, 166, 50, 1) !important;
                    }
                    .el-submenu.is-active /deep/ .el-submenu__title{
                        color:#fff !important;
                        background-color:rgba(255, 166, 50, 1) !important;
                        i{
                            color:#fff;
                        }
                    }
                    /deep/ .el-menu-item,/deep/ .el-submenu__title{
                        height: 42px;
                        line-height: 42px;
                        border-bottom: 1px solid rgba(231, 231, 231, 1);
                    }
                    /deep/ .el-submenu__title{
                        padding-left:60px !important;
                    }
                }
                .el-menu-item:focus, .el-menu-item:hover{
                    background-color: #fff !important;
                    color: rgb(255, 208, 75) !important;
                }

                .new_rent{
                    line-height: 44px;
                    margin-top:30px;
                    // background: rgba(255, 166, 50, 1);
                    border:1px solid rgba(255, 166, 50, 1);
                    border-radius: 5px;
                    text-align: center;
                    cursor: pointer;
                    color:#888;
                    font-size:17px;
                    &:hover{
                        color:rgba(255, 166, 50, 1);
                    }
                    .icon{
                        font-size:20px;
                        margin-right:5px;
                        // color:#fff;
                    }
                }
            }
            .right{
                flex: 1;
                .bread_crumb{
                    display: flex;
                    align-items: center;
                    padding-bottom: 20px;
                    .line{
                        width:6px;
                        height:12px; 
                        background:rgba(255,166,50,1);
                        border-radius: 3px ;
                        margin-right:5px;
                    }
                    .icon{
                        color:rgba(255,166,50,1);
                    }
                    .title_text{
                        font-size: 16px;
                        color: #363636;
                    }
                }
            }
        }
    }
</style>
