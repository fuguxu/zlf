<template>
    <div class="client_header_right">
        <div class="new_rent item">
            <!-- <img src="../../../img/u1374.png" alt=""> -->
            <i class="icon el-icon-circle-plus"></i>
            <span @click="changeRoute(false)" class="account_text">发起新租赁</span>
        </div>
        <div class="account_center item">
            <span @click="goRoute('0')" class="user_name">租赁中心 <i class="icon el-icon-arrow-down"></i></span>
            <div class="center_box">
                <ul class="center">
                    <li @click="goRoute('0')" class="account_text">租赁服务</li>
                    <li @click="goRoute('1')" class="account_text">合同执行</li>
                    <li @click="goRoute('2')" class="account_text">后续租金</li>
                    <li @click="goRoute('3')" class="account_text">售后服务</li>
                </ul>
            </div>        
        </div>
        <unSetProject :user="user" @setProject="setProject" :flag.sync="unSetFlag"></unSetProject>
        <rentNameDialog @updateItem="updateItem" :visible.sync="rentNameFlag"></rentNameDialog>
    </div>
</template>
<script>
import {customerModule} from '../../api/main';
import unSetProject from '../components/unSetProject';
import rentNameDialog from '../RentCenter/components/rentNameDialog';
export default {
    props:['user'],
    data(){
        return {
            isHasProject:true,
            unSetFlag:false,
            rentNameFlag:false
        }
    },
    methods:{
        goRent(id){
            if(id){
                this.$router.push('/rent?id='+id);
            }else{
                this.$router.push('/rent');
            }
        },
        setProject(){
            this.rentNameFlag=true;
        },
        updateItem(){//新建项目成功后
            this.goRent();
        },
        goRoute(id){//点击租赁中心
            this.changeRoute(id);
        },
        changeRoute(flag){//点击新建项目 
            AppUtil.getLicenseStatus(status=>{
                if(status=='1'){//审核通过
                    this.getOrderInfoList(flag);
                }else{
                    Bus.$emit('sendLicenseStatus',status);
                }
            })
        },
        getOrderInfoList(flag){//获取项目列表 判断是否已经新建过项目
            customerModule.getOrderInfoList().then(res=>{
                if(res.statusCode=='1'){
                    this.isHasProject=res.data.length>0;
                    if(this.isHasProject){
                        if(flag){//此情况是点击租赁中心
                            this.goRent(flag);
                        }else{//此情况是点击新建项目
                            this.rentNameFlag=true;
                        }
                    }else{
                        this.unSetFlag=true;
                    }
                }
            })
        },
    },
    mounted(){
        
    },
    components:{
        unSetProject,
        rentNameDialog
    }
}
</script>
<style lang="scss" scoped>
    .client_header_right{
        flex: 1;
        align-items: center;
        height:100%;
        display: flex;
        justify-content: flex-end;
        .item{
             height:100%;
            display: flex;
            align-items: center;
            .account_text{
                font-size: 14px;
                cursor: pointer;
                &:hover{
                    color: rgba(255, 255,255, 0.75);
                }
            }
        }
        .new_rent{
            .icon{
                font-size:20px;
                margin-right:5px;
                color:rgba(255, 166, 50, 1);
            }

            // img{
            //     width:25px;
            //     height:23px;
            //     margin-right:5px;
            // }
        }
        .account_center{
            position: relative;
            margin:0 50px;
            cursor: pointer;
            overflow: hidden;
            &:hover{
                overflow: inherit;
                .user_name{
                    color:rgba(255, 255,255, 0.75);
                }
                .center_box{
                    box-shadow: 0px 0px 15px #333;
                    transition-delay: 0.5s;
                    .center{
                        top:0px;
                        transition: all 0.5s;
                    }
                }  
            }
            .icon{
                color:rgba(255, 255,255, 0.75);
                margin-left:5px;
            }
            .center_box{
                position: absolute;
                top:100%;
                width:90px;
                height: 140px;
                overflow: hidden;
                .center{
                    width:90px;
                    height: 140px;
                    position: absolute;
                    background: rgb(25, 25, 25);
                    top:-140px;
                    box-sizing: border-box;
                    padding-top:10px;
                    .account_text{
                        text-align: center;
                        line-height: 30px;
                    }
                }
            }   
        }
    }
</style>
