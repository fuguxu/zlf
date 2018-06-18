<template>
    <div class="contract">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="家具生产启动" name="first">
                <transition name="slide-fade">
                    <div v-if="activeName=='first'" class="item">
                        <progressItem :leaseType="id" :type="0"></progressItem>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="家具生产进行中" name="second">
                <transition name="slide-fade">
                    <div v-if="activeName=='second'" class="item">
                        <progressItem :leaseType="id" :type="1"></progressItem>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="家具生产完成" name="third">
               <transition name="slide-fade">
                    <div v-if="activeName=='third'" class="item">
                        <progressItem :leaseType="id" :type="2"></progressItem>
                    </div>
                </transition>
                
            </el-tab-pane>
            <el-tab-pane label="运输包装" name="fourth">
                <transition name="slide-fade">
                    <div v-if="activeName=='fourth'" class="item">
                        <progressItem :leaseType="id" :type="leaseType=='1'?3:5"></progressItem>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="物流信息" name="five">
                <transition name="slide-fade">
                    <div v-if="activeName=='five'" class="item">
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="跟车负责人">
                                <el-input placeholder="请输入跟车负责人姓名" v-model="form.person_liable"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号码">
                                <el-input placeholder="请输入跟车负责人常用手机号" v-model="form.phone"></el-input>
                            </el-form-item>
                            <el-form-item label="车辆车牌号">
                                <el-input placeholder="选填，输入运输车辆车牌号" v-model="form.car_num"></el-input>
                            </el-form-item>
                        </el-form>
                        <progressItem :transferInfo="form"  class="transfer" :leaseType="id" :type="leaseType=='1'?4:6"></progressItem>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="验收完成" name="six">
                <transition name="slide-fade">
                    <div v-if="activeName=='six'" class="">
                        <checkOrder></checkOrder>
                    </div>
                </transition>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import progressItem from './components/progressItem';
import checkOrder from '../../components/checkOrder';
export default {
    data(){
        return {
            activeName:'first',
            form:{
                person_liable:'',
                phone:'',
                car_num:''
            },
            id:this.$route.query.id,
            leaseType:this.$route.query.leaseType
        }
    },
    methods:{
        handleClick(){

        }
    },
    mounted(){
        console.log(this.leaseType)
    },
    components:{
        progressItem,
        checkOrder
    }
}
</script>
<style lang="scss" scoped>
    .contract{
        padding:0 21px;
        padding-bottom:40px;
        box-sizing: border-box;
    }
    .el-tabs{
        /deep/ .el-tabs__active-bar{
            background-color:rgba(255,166,50,1);
            display: none;
        }
        /deep/ .el-tabs__nav{
            // padding:25px 0px 15px 0px;
        }
        /deep/ .el-tabs__header{
            margin-bottom: 36px;
        }
        /deep/ .el-tabs__item{
            font-size: 14px;
            color: rgba(136,136,136,1);
            height: 20px;
            line-height: 20px;
            padding:37px 0px 34px 0px !important;
            margin:0 30px;
            box-shadow: none !important;
            &.is-active,&:hover{
                color:rgba(255,166,50,1);
                border-bottom: 2px solid rgba(255,166,50,1);
            }
        }
        /deep/ .el-tabs__nav-wrap:after{
            background-color: rgba(244,244,244,1);
        }
        .item{
            min-height: 300px;
            background: rgba(244,244,244,1);
            padding-right: 14px;
            // border-radius: 7px;
        }
    }
    .el-form{
        padding-top:30px;
        .el-form-item{
            margin-bottom: 20px;
        }
        /deep/ .el-form-item__content{
            margin-left:103px !important;
            width:336px;
        }
        /deep/ .el-form-item__label{
            width:90px !important;
            color:rgba(102,102,102,1);
        }
    }

    .slide-fade-enter-active {
        transition: all .3s linear;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
  {
        transform: translateX(855px);
        opacity: 1;
    }
    
</style>

