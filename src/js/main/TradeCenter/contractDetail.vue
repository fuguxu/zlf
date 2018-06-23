<template>
    <div class="contract">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="家具生产启动" name="first" v-if="this.leaseType=='1'">
                <transition name="slide-fade">
                    <div v-if="activeName=='first'" class="item">
                        <progressItem :leaseType="id" :leaseContractNo="leaseContractNo" :type="0"></progressItem>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="家具生产进行中" name="second" v-if="this.leaseType=='1'">
                <transition name="slide-fade">
                    <div v-if="activeName=='second'" class="item">
                        <progressItem :leaseType="id" :leaseContractNo="leaseContractNo" :type="1"></progressItem>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="家具生产完成" name="third" v-if="this.leaseType=='1'">
               <transition name="slide-fade">
                    <div v-if="activeName=='third'" class="item">
                        <progressItem :leaseType="id" :leaseContractNo="leaseContractNo" :type="2"></progressItem>
                    </div>
                </transition>
                
            </el-tab-pane>
            <el-tab-pane label="运输包装" name="fourth">
                <transition name="slide-fade">
                    <div v-if="activeName=='fourth'" class="item">
                        <progressItem :leaseType="id" :leaseContractNo="leaseContractNo" :type="leaseType=='1'?3:5"></progressItem>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="物流信息" name="five">
                <transition name="slide-fade">
                    <div v-if="activeName=='five'" class="item">
                        <el-form ref="form" :class="{readOnly:!isEdit}" :model="form" label-width="80px">
                            <el-form-item :label="isEdit?'跟车负责人':''">
                                <div v-if="!isEdit" class="title">
                                    <span class="line"></span><span>跟车负责人</span>
                                </div>
                                <el-input :readonly="!isEdit" @blur="valiatePersonLiable" placeholder="请输入跟车负责人姓名" v-model="form.personLiable"></el-input>
                                <div class="error_message" v-if="tipPersonLiable">
                                    <i class="icon el-icon-error"></i>
                                    <span>{{tipPersonLiable}}</span>
                                </div>
                            </el-form-item>
                            <el-form-item :label="isEdit?'手机号码':''">
                                <div v-if="!isEdit" class="title">
                                    <span class="line"></span><span>手机号码</span>
                                </div>
                                <el-input :readonly="!isEdit"  @blur="valiatePhone" :maxlength="11" placeholder="请输入跟车负责人常用手机号" v-model="form.phone"></el-input>
                                <div class="error_message" v-if="tipPhone">
                                    <i class="icon el-icon-error"></i>
                                    <span>{{tipPhone}}</span>
                                </div>
                            </el-form-item>
                            <el-form-item class="car" :label="isEdit?'车辆车牌号':''">
                                <div v-if="!isEdit" class="title">
                                    <span class="line"></span><span>车辆车牌号</span>
                                </div>
                                <el-input :readonly="!isEdit"  :placeholder="isEdit?'选填，输入运输车辆车牌号':''" v-model="form.carNum"></el-input>
                            </el-form-item>
                        </el-form>
                        <progressItem :transferInfo="form" @updateStatus="updateStatus" ref="progressItem" @valiate="valiateForm" :leaseContractNo="leaseContractNo"  class="transfer" :leaseType="id" :type="leaseType=='1'?4:6"></progressItem>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="验收完成" name="six">
                <transition name="slide-fade">
                    <div v-if="activeName=='six'" class="">
                        <checkOrder role="1" :data="acceptanceData"></checkOrder>
                    </div>
                </transition>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import progressItem from './components/progressItem';
import checkOrder from '../../components/checkOrder';
import {customerModule} from '../../api/main';
export default {
    data(){
        return {
            activeName:'first',
            form:{
                personLiable:'',
                phone:'',
                carNum:''
            },
            tipPersonLiable:'',
            tipPhone:'',
            id:this.$route.query.id,
            leaseType:this.$route.query.leaseType,
            leaseContractNo:this.$route.query.leaseContractNo,
            isEdit:true,
            acceptanceData:''
        }
    },
    methods:{
        handleClick(){
        },
        valiatePersonLiable(){
            if(!this.form.personLiable){
                this.tipPersonLiable='请输入跟车负责人姓名!';
                return false;
            }else{
                this.tipPersonLiable='';
                return true;
            }
        },
        valiatePhone(){
            if(!this.form.phone){
                this.tipPhone='请输入跟车负责人常用手机号!';
                return false;
            }else if(this.form.phone.length<11){
                this.tipPhone='手机号长度不够!';
                return false;
            }else{
                this.tipPhone='';
                return true;
            }
        },
        valiateForm(){//验证表单
            if(this.valiatePersonLiable()&&this.valiatePhone()){
                this.$refs.progressItem.saveContract();
            }
        },
        updateStatus(isEdit,form){
            this.isEdit=isEdit;
            if(form){
                this.form=Object.assign(this.form,form);
            }
        },
        getSupplierAcceptanceVO(){//获取验收信息
            customerModule.getSupplierAcceptanceVO({
                leaseContractNo:this.leaseContractNo
            }).then(res=>{
                if(res.statusCode=='1'){
                    this.acceptanceData=res.data;
                }
            })
        }
    },
    mounted(){
        this.getSupplierAcceptanceVO();
        if(this.leaseType=='0'){
            this.activeName='fourth'
        }
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
        padding-bottom:25px;
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
            // background: rgba(244,244,244,1);
            // padding-right: 14px;
            // border-radius: 7px;
        }
    }
    .el-form{
        padding-top:30px;
        background:rgba(244,244,244,1);
        .el-form-item{
            margin-bottom: 20px;
            &.car{
                margin-bottom: 0px;
            }
        }
        .error_message{
            display: flex;
            align-items: center;
            position: absolute;
            left:100%;
            top:0px;
            width:80%;
            .icon{
                margin:0px 5px;
            }
        }
        /deep/ .el-form-item__content{
            margin-left:98px !important;
            width:336px;
        }
        /deep/ .el-form-item__label{
            width:90px !important;
            color:rgba(102,102,102,1);
        }
        &.readOnly{
            background: #fff;
            .el-form-item{
                margin-bottom: 0px;
            }
            /deep/ .el-form-item__content{
                margin-left:0px !important;
                display: flex;
                margin-bottom: 20px;
            }
            /deep/ .el-form-item__label{
                width:0px !important;
            }
            /deep/ .el-input__inner{
                border:none !important;
                box-shadow: none;
            }
        }
        .title{
            display: flex;
            align-items: center;
            width:120px;
            color:rgba(102,102,102,1);
            .line{
                width:6px;
                height:12px; 
                background:rgba(255,166,50,1);
                border-radius: 3px ;
                margin-right:10px;
            }
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

