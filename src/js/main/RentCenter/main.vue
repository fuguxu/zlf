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
                    <span @click="visible=true" class="account_text">发起新租赁</span>
                </div>
            </div>
            <div class="right">
                <div class="bread_crumb">
                    <div class="line"></div>
                    <div class="first_title">
                        <span class="title_text">{{title}}</span>
                    </div>
                    <div class="second_title" @click="clickSecondTitle" :class="{detail:!!leaseNo}">
                        <i class="icon el-icon-caret-right"></i>
                        <span class="title_text">{{subTitle}}</span>
                    </div>
                    <div class="third_title" v-if="thirdTitle">
                        <i class="icon el-icon-caret-right"></i>
                        <span class="title_text">{{thirdTitle}}</span>
                    </div>
                </div>
                <div class="content">
                    <components v-if="isCp" :orderName="title" :proCommNo="proCommNo" :leaseNo="leaseNo" :orderNo="orderNo" :data="itemData" :is="isCp" @updateCp="updateCp"></components>
                </div>
            </div>
        </div>
        <rentNameDialog  @updateItem="updateItem" :visible.sync="visible"></rentNameDialog>
        <qqWexiBackTop :hideWeiXin="true"></qqWexiBackTop>
    </div>
</template>
<script>
import rentService from './components/rentService';
import contractList from './components/contractList';
import contractDetail from './components/contractDetail';
import rentMoney from './components/rentMoney';
import saleService from './components/saleService';
import rentNameDialog from './components/rentNameDialog';
import {customerModule} from '../../api/main';
import qqWexiBackTop from '../../components/qqWexiBackTop';
export default {
    data(){
        return {
            data:[],
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
            itemData:'',
            defaultActive:this.$route.query.id,
            title:'',
            subTitle:'',
            thirdTitle:'',
            activeIndex:'',
            orderNo:'',
            leaseNo:'',
            proCommNo:'',
            isCp:'',
            visible:false
        }
    },
    methods:{
        choiceCp(item){
            this.isCp='';//让组件重新渲染
            this.leaseNo='';
            this.proCommNo='';
            this.$nextTick(()=>{
                if(this.activeIndex==0){
                    this.isCp=rentService;
                    this.getRentService(item);
                }else if(this.activeIndex==1){
                    this.isCp=contractList
                }else if(this.activeIndex==2){
                    this.isCp=rentMoney
                }else if(this.activeIndex==3){
                    this.isCp=saleService
                }
                this.thirdTitle='';
                this.orderNo=item.orderNo;
            })
        },
        selectMenu(i,p){//点击菜单
            this.title=this.data[+p[0]].name;
            this.subTitle=this.subData[+p[1].split('-')[1]].name;
            this.activeIndex=this.subData[+p[1].split('-')[1]].id;
            this.choiceCp(this.data[+p[0]]);
            this.$router.push('/rent?id='+p[1]);//刷新的时候 保持在当前菜单
        },
        updateCp(item){//到合同执行的详情
            this.thirdTitle=item.leaseName;
            this.leaseNo=item.leaseContractNo;
            this.proCommNo=item.proCommNo;
            this.isCp=contractDetail;
        },
        clickSecondTitle(){//点击合同详情面包削
            if(this.leaseNo){
                this.isCp=contractList;
                this.leaseNo='';
                this.thirdTitle='';
            }
        },
        getRentService(item){//获取租赁服务
            customerModule.getRentService({orderNo:item.orderNo}).then(res=>{
                if(res.statusCode=='1'){
                    this.itemData=res.data;
                }
            })
        },
        getOrderInfoList(){//获取项目列表
            customerModule.getOrderInfoList().then(res=>{
                if(res.statusCode=='1'&&res.data.length>0){
                    this.data=res.data.map(item=>{
                        return {...item,name:item.projectName}
                    });
                    this.title=this.data[0].name;
                    this.subTitle=this.subData[+this.defaultActive.split('-')[1]].name;
                    this.activeIndex=this.subData[+this.defaultActive.split('-')[1]].id;
                    this.choiceCp(this.data[0]);
                }
            })
        },
        updateItem(){//新增项目之后
            this.$router.push('/rent?id=0-0');
            this.getOrderInfoList();
        }
    },
    mounted(){
        this.getOrderInfoList();
        Bus.$on('updateRentId',()=>{
            // this.selectMenu('',[this.$route.query.id.split('-')[0],this.$route.query.id]);
            this.getOrderInfoList();
        })
    },
    watch:{
        '$route.query.id'(n,o){
            this.defaultActive=n;
        }
    },
    computed:{
    },
    components:{
        rentService,
        contractList,
        contractDetail,
        rentMoney,
        saleService,
        rentNameDialog,
        qqWexiBackTop
    }
}
</script>
<style lang="scss" scoped>
    .rent_container{
        min-height: 700px;
        background: #fff;
        .rent_content_box{
            width:1160px;
            margin:0 auto;
            padding-top:33px;
            display: flex;
            .left{
                width:284px;
                margin-right:60px;
                box-sizing: border-box;
                .el-menu{
                    border:1px solid rgba(231, 231, 231, 1);
                    border-bottom: none;
                    /deep/ .el-submenu__title:hover{
                        background-color: inherit !important;
                        color:rgba(255, 166, 50, 1) !important;

                    }
                   /deep/ .el-submenu.is-active .el-menu-item{
                        background:#f6f5f5 !important;
                    }
                    .el-submenu.is-active /deep/ .el-submenu__title{
                        color:#fff !important;
                        border-left:6px solid rgba(41,43,44,1);
                        background-color:rgba(255, 166, 50, 1) !important;
                        i:before{
                            color:#fff;
                        }
                    }
                    /deep/ .el-menu-item,/deep/ .el-submenu__title{
                        height: 58px;
                        line-height: 58px;
                        border-bottom: 1px solid rgba(231, 231, 231, 1);
                    }
                    /deep/ .el-submenu__title{
                        padding-left:21px !important;
                        border-left:6px solid transparent;
                    }
                }
                .el-menu-item:focus, .el-menu-item:hover,.el-menu-item.is-active{
                    background-color: #fff !important;
                    color: rgba(255,166,50,1) !important;
                }
                .el-menu-item{
                    padding-left:44px !important;
                    color:rgba(136,136,136,1);
                }
                .new_rent{
                    line-height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top:32px;
                    margin-bottom:100px;
                    background: rgba(255,166,50,1);
                    border-radius: 2px;
                    cursor: pointer;
                    color:#fff;
                    font-size:14px;
                    &:hover{
                        background:rgba(255, 166, 50, 0.8);
                    }
                    .icon{
                        font-size:18px;
                        margin-right:5px;
                    }
                }
            }
            .right{
                flex: 1;
                padding-bottom: 50px;
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
                    .second_title{
                        &.detail{
                            cursor: pointer;
                        }
                    }
                    .icon{
                        color:rgba(255,166,50,1);
                    }
                    .title_text{
                        font-size: 16px;
                        color: #333;
                    }
                }
            }
        }
    }
</style>
