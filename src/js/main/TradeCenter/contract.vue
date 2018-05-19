<template>
    <div class="contract">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="家具生产启动" name="first">
                <transition name="slide-fade">
                    <div v-if="activeName=='first'" class="item">
                        <progressItem></progressItem>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="家具生产进行中" name="second">
                <transition name="slide-fade">
                    <div v-if="activeName=='second'" class="item">
                        <progressItem></progressItem>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="家具生产完成" name="third">
               <transition name="slide-fade">
                    <div v-if="activeName=='third'" class="item">
                        <progressItem></progressItem>
                    </div>
                </transition>
                
            </el-tab-pane>
            <el-tab-pane label="运输包装" name="fourth">
                <transition name="slide-fade">
                    <div v-if="activeName=='fourth'" class="item">
                        <progressItem></progressItem>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="物流信息" name="five">
                <transition name="slide-fade">
                    <div v-if="activeName=='five'" class="item">
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="跟车负责人">
                                <el-input placeholder="请输入跟车负责人姓名" v-model="form.person"></el-input>
                            </el-form-item>
                            <el-form-item label="手机号码">
                                <el-input placeholder="请输入跟车负责人常用手机号" v-model="form.tel"></el-input>
                            </el-form-item>
                            <el-form-item label="车辆车牌号">
                                <el-input placeholder="选填，输入运输车辆车牌号" v-model="form.car"></el-input>
                            </el-form-item>
                        </el-form>
                        <progressItem></progressItem>
                    </div>
                </transition>
            </el-tab-pane>
            <el-tab-pane label="验收完成" name="six">
                <transition name="slide-fade">
                    <div v-if="activeName=='six'" class="item">
                        验收完成
                    </div>
                </transition>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import progressItem from './components/progressItem';
export default {
    data(){
        return {
            activeName:'first',
            form:{
                person:'',
                tel:'',
                car:''
            }
        }
    },
    methods:{
        handleClick(){

        }
    },
    components:{
        progressItem
    }
}
</script>
<style lang="scss" scoped>
    .contract{
        padding:0 21px;
        padding-bottom:40px;
        /deep/ textarea::-webkit-input-placeholder,/deep/ input::-webkit-input-placeholder
       {
            font-size: 13px; 
            color: rgba(41, 43, 44, 0.6);
        }
    }
    .el-tabs{
        /deep/ .el-tabs__active-bar{
            background-color: #ed9f34;
        }
        /deep/ .el-tabs__nav{
            padding:25px 0px 15px 0px;
        }
        /deep/ .el-tabs__item{
            font-size: 15px;
            color: #292B2C;
            height: 20px;
            line-height: 20px;
            padding:0 20px !important;
            box-shadow: none !important;
            &:not(:last-child){
                border-right:1px solid #efefef;
            }
            &.is-active{
                color:#ed9f34;
            }
        }
        /deep/ .el-tabs__nav-wrap:after{
            background-color: #dadbdb;
        }
        .item{
            min-height: 300px;
            background: #f6f5f5;
            border-radius: 7px;
        }
    }
    .el-form{
        padding-top:22px;
        /deep/ .el-form-item__content{
            margin-left:103px !important;
            width:282px;
        }
        /deep/ .el-form-item__label{
            width:90px !important;
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

